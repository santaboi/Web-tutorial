/* http://luffy.ee.ncku.edu.tw:1768/index.html */
// 建立一個 express (也就是網頁伺服器)實體

import express from 'express'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// const express = require('express')

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()
const port = 1798


//把hw_4_15下面的靜態檔案弄進來
app.use(express.static(`${__dirname}/hw_4_15`))

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/search', (req, res) => {
    var fs = require('fs');
    var path = require('path');
    var jsonPath = path.join(__dirname, 'hw_4_15', 'students.json');
    try {
        //let student_name ;
        var data = fs.readFileSync(jsonPath, 'utf8'); //typeof data : string
        var data_json = JSON.parse(data);
        //console.log(data);
        //console.log(typeof data_json);
        res.send(data_json[req.query.searchID]);
    } catch (e) {
        console.log('Error:', e.stack);
    }
    //res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})

app.get('/add_name', (req, res) => {
    var fs = require('fs');
    var path = require('path');
    var jsonPath = path.join(__dirname,'hw_4_15' ,'students.json');
    try {
        var data2 = fs.readFileSync(jsonPath, 'utf8'); //typeof data : string
        var data_json2 = JSON.parse(data2);
        data_json2[req.query.addID] = req.query.addName;
        console.log(data_json2);
        let data_to_write = JSON.stringify(data_json2, null, 2);
        fs.writeFile(jsonPath, data_to_write, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
        res.send(true);
    } catch (e) {
        res.send(false);
        console.log('Error:', e.stack);
    }
})

app.get('/delete', (req, res) => {
    var fs = require('fs');
    var path = require('path');
    var jsonPath = path.join(__dirname, 'hw_4_15', 'students.json');
    try {
        //let student_name ;
        var data3 = fs.readFileSync(jsonPath, 'utf8'); //typeof data : string
        var data_json3 = JSON.parse(data3);
        delete data_json3[req.query.id_to_delete];
        let data_to_write = JSON.stringify(data_json3, null, 2);
        console.log(data_to_write);
        fs.writeFile(jsonPath, data_to_write, (err) => {
            if (err) throw err;
            console.log('Data written to file');
            res.send(true);
        });
    } catch (e) {
        res.send(false);
        console.log('Error:', e.stack);
    }
    //res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})