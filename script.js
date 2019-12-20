// This will be our current time 
let today = moment().format('MMMM Do YYYY');
let currentTime = moment().format('HH');
console.log(currentTime);

let time_slots = [];
let start_time = 9;
let end_time = 17;

console.log(currentTime);

$(document).ready(function(){
    $('.today').text(today);
    for( let i = start_time ; i <= end_time ; i++ ){
        $('#time-slot-' + i + ' input').val(localStorage.getItem('time-slot-' + i ));
    }
});

// this is our html for the calendar just adjust start_time and/or end_time to change the times
for( let i = start_time ; i <= end_time ; i++ ){
	let suffix = 'AM';
    let hour = i;
    if( i >= 12 ){
        suffix = 'PM';
    } if( i >= 13 ){
        hour = i - 12;
    }
    time_slots[i] = hour + ':00 ' + suffix;   
}

time_slots.forEach( function( item, index){
    let timeofday = ' past';
    if (index==currentTime){
        timeofday = ' present';
    } 
    if (index>currentTime){
        timeofday = ' future';
    } 
    var row = $("<row>")
    $(row).attr("class", "row")
    $("#calendar").append(row)
	$(row).append('<li class="col-sm-12' + timeofday +'" id="time-slot-' + index + '">' + item +': <input type="text" id="input"></input><button type="button" class="btn saveBtn col-sm-1 btn-primary ">Save</button ></li>' );
   
   console.log(index)
});

$('.btn').click(function(){

    let ID = $(this).parent().attr('id');
    let Value = $(this).siblings('input').val();
    localStorage.setItem(ID, Value);
});
