let today = new Date();

// Format the date as YYYY-MM-DD
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();

 today = yyyy + '-' + mm + '-' + dd;

// Set the default value of the input field to today's date
document.getElementById("date").value = today;