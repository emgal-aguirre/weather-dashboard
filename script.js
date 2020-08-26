//global variables 
var times = JSON.parse(localStorage.getItem("times"));
console.log(times);

// Displays date in real time
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();

// var value for hour = interger value 
var currentHour = parseInt(moment().format('HH'));
console.log(currentHour);

// search by using city name

//weather key 
var weatherApiKey = "b3a715295a3981335545db2b6dede970";
var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + weatherApiKey
//run AJAX and call OpenWeather API 

$.ajax({
    url: queryURL,
    method: "GET"
})
    // store all data retrieved inside object "response"
    .then(function (response) {
        console.log(QueryURL);
        console.log(response);
    });

//transfer content to HTML 


$(".wind").text("Wind Speed: " + response.wind.speed);
