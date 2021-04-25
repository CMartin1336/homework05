// Variable to add todays date
var currentDay = $('#currentDay');
var saveBtn = $('#button-addon1');
var entry = $('#entryinput').val();

// Function to set date on page load
$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
}, 1000);

// Functions Needed
saveBtn.on("click", function() {
    // localStorage.setContent(input.value);
    localStorage.setItem("entryContent", entry);
});
