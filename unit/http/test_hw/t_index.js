$(document).ready(function() {
$('#list button[type="submit"]').click((event) => {
event.preventDefault()
$.get('/list', {
},(data) => {
var list = ''
for (const [key, value] of Object.entries(data)) {
list += `'${key}':'${value}'<br>`
}
$('#all').html(list + '<br>')
})
})

$('#search button[type="submit"]').click((event) => {
event.preventDefault()
$.get('/search', {
search_id: $('#search input[name=search_id]').val(),
}, (data) => {
if (data){
$('#search_output').html('Hello, ' + data + '<br><br>')
}else{
$('#search_output').html('ID not exist' + '<br><br>')
}
})
})

$('#add button[type="submit"]').click((event) => {
event.preventDefault()
$.get('/add', {
add_id: $('#add input[name=add_id]').val(),
add_name: $('#add input[name=add_name]').val(),
})
})

$('#del button[type="submit"]').click((event) => {
event.preventDefault()
$.get('/del', {
del_id: $('#del input[name=del_id]').val(),
})
})

})