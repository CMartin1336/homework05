// Variable to add todays date
var currentDay = $('#currentDay')

$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
}, 1000);