// Variable to add todays date
var currentDay = $('#currentDay');
var saveBtn = $('#button-addon1');

// Function to set date on page load
$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
    $("#entry").val(localStorage.getItem("entryContent"));
}, 1000);

// Functions Needed
saveBtn.on("click", function() {
    var entry = $("#entry").val();
    localStorage.setItem("entryContent", entry);
});