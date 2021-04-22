// Variable to add todays date
var currentDay = $('#currentDay')

// Function to set date on page load
$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
}, 1000);