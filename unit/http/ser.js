#!/usr/bin/env node

// Step 1 and step 2 code goes here
/* Step 1:
 * edit [port] to an appropriate value
 * storing config to variables is a good practice, see `port` in the code
 * learn the syntax of string interpolation in js, see `${port}` in the code
 * 將 [port] 修改成合適的值
 * 將設定放在變數中是一種好習慣，參考程式中的 `port`
 * 學習 js 的 string interpolation 語法，參考程式中的 `${port}`
 */

// include `express`
// 載入 `express`
const express = require('express')

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()

const port = 8111

// handle `/step1` url
// 處理 `/step1` 網址 (網址是step1 才會啟動luffy.ee.ncku.edu.tw:6699/step1)
/*req : 使用者的input res : response*/ 

app.get('/step1', (req, res) => {
    // response browser
    // 回應瀏覽器
    /*step1 */
    //res.send('hello world 6666')
    /*step2 */
    res.send('<h1>hello world 6666</h1>')
})

// start the server
// 啟動伺服器
/*this is server*/
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

// Step 3 code goes here
/*'${a}b' === 'a' + 'b'*/
/*可以透過此port取代apache , 讓外面可以連到server上的任一檔案 */
app.use(express.static(`${__dirname}/dist`))


// Step 4 code goes here

let nRequests = 0
app.get('/step4', (req, res) => {
    res.send(`this is request #${++nRequests}`)
})

// Step 5 code goes here
/*? :後面是輸入  $:是隔開變數*/
/*get 會讓網址變一大串 get : property name 配 query*/

app.get('/step5', (req, res) => {
    /*server 只是在負責處理資料 拿到fname lname 打包回傳資料 */
    res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})

// Step 7 code goes here
// include `body-parser`
// 載入 `body-parser`
const bodyParser = require('body-parser')

// setup `body-parser`
// 設定 `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*post 固定用property name 配 body */
/*https://stackoverflow.com/questions/30915424/express-what-is-the-difference-between-req-query-and-req-body*/
app.post('/step7', (req, res) => {
    // `bady-parser` stores parsed data in `req.body`
    // `bady-parser` 將解析好的資料存放在 `req.body`
    res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})
