// Variable to add todays date
var currentDay = $('#currentDay');
var saveBtn = $('#button-addon1');
// var entry = $("#entry").val();

// Function to set date on page load
$(document).ready(function() {
    currentDay.html(moment().format('dddd, MMMM Do YYYY'));
}, 1000);

// Functions Needed
saveBtn.on("click", function() {
    var entry = $("#entry").val();
    localStorage.setItem("entryContent", JSON.stringify(entry));
});

var getEntry = localStorage.getItem("entryContent");