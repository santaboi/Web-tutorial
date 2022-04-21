/*this is client*/ 

//ajax 是每次trigger時候不會重新reload 網站 (攔截request的東西)
$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault() //4/15 prevent default : default 會在網址後面打包資料
    // Step 9 and step 10 code goes here
    /*要記的name的匹配 */
    $.get('./step5') //4/15 get 發送ajax 請求 (request 可以看到)
    $.get('./step5', {
      fname: $("#ajax-form input[name = first_name]").val(),
      lname: $("#ajax-form input[name = second_name]").val(),
    })

    // Step 11 code goes here
    $.get('./step5', //第一個參數(送到server的哪裡)
    { 
      /*期中考考這邊 get ./step5 (ser.js 裡面就要有一個 ./step5 去抓東西)*/ 
      fname: $('#ajax-form input[name=fname]').val(),
      lname: $('#ajax-form input[name=lname]').val(),
      }, //第二個參數(打包的資料)
      (data) => { //第三個參數:server res.send就是送回來的data可以是object ，取得資料在這邊在處理
      $('#ajax-output').html(data)
    })

    setTimeout(() => {
      $('#ajax-output').html('it is loaded')
    }, 3000) //讓他非同步 delay 3000ms
    $('#ajax-output').html('loading')
  })
});



/*.php 曾經稱霸  現在可以自己寫server客製化程式
  chat (資料夾裡面有) 用來存檔
*/