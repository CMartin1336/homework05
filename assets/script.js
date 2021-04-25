// Variable to add todays date
var currentDay = $('#currentDay');
var saveBtn = $('#button-addon1');
var entry = $('#7AM');

// Function to set date on page load
$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
}, 1000);

// Functions Needed
saveBtn.addEventListener("click", function() {
    // localStorage.setContent(input.value);
    localStorage.setItem("scheduleContent", input.value);
});