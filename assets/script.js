// Variable to add todays date
var currentDay = $('#currentDay');
var saveBtn = $('#button-addon1');

// Function to set date on page load
$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
    $("input").val(localStorage.getItem("entryContent"));
}, 1000);

// Functions Needed
saveBtn.on("click", function() {
    var entry = $(this).siblings('input').val();
    localStorage.setItem("entryContent", entry);
});