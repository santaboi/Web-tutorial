/*****************print list***********************************/

$(document).ready(function () {
    $('#ajax-form button[id="list_button"]').click((event) => {
        event.preventDefault()
        $.getJSON('students.json', (data) => {
            console.log("fuck2022")
            var each_line = ''
            for (const [id, name] of Object.entries(data)) {
                each_line += `"${id}":  "${name}"<br>\n`
            }
            $('#list_print').html(each_line + "<br><br>")
        })
    })

    $('#search button[name="search_id_b"]').click((event) => {
        event.preventDefault()
        $.get('/search', {
            searchID: $('#search input[name=searchID]').val(),
        }, (data) => {
            if (data) {
                $('#searchID-output').html("Hello, " + data + "<br><br>")
            } else {
                $('#searchID-output').html("ID not exist.<br><br>")
            }
        })
    })
    // ------------add------------------------//
    $('#add_name button[id="add_name_b"]').click((event) => {
        event.preventDefault()
        $.get('/add_name', {
            addID: $('#add_name input[name="addID"]').val(),
            addName: $('#add_name input[name="addName"]').val(),
        } , (data) => {
            if(data){
                $('#add-output').html("Homies (" + addID + ":" + addName + ")are added successfully<br><br>");
            }
            console.log("fuck2021");
        })
    
    })

    // ------------delete------------------------//
    
    $(document).ready(function () {
        $('#delete button[id="delete_name_b"]').click((event) => {
            event.preventDefault()
            $.get('/delete', {
                id_to_delete: $('#delete input[name="id_to_delete"]').val(),
            } , (data) => {
                if (data) {
                    $('#delete-output').html("Homies (" + id_to_delete + ")are successfully deleted<br><br>");
                }
            })
        })
    })
});


