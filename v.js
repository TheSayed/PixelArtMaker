// Select color input

// Your code goes here!

let height;
let width;
const sizePicker = $("#sizePicker")


sizePicker.submit( function (event) {
    event.preventDefault();

    let height = $("#inputHeight").val();
    let width = $("#inputWidth").val();
    console.log("h : "+height+ "w : " + width)
    makeGrid(height , width)
    });

// When size is submitted by the user, call makeGrid()inputWidth
    
function makeGrid(h , w) {
    $('tr').remove();


    for ( let i = 1; i <= h; i++) {
        $('#pixelCanvas').append('<tr id= table'+ i +'></tr>');
            for ( var j = 1; j <= w; j++) {
                $('#table' + i).append('<td id= cell' +j+ '></td>')
                
        }
        
    }
    // Your code goes here!
    $('td').click(function addColor(){

        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color)
        }

    })
}

