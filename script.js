//global variables 

// date and time variabls
var times = JSON.parse(localStorage.getItem("times"));
console.log(times);
var currentHour = parseInt(moment().format('HH'));
console.log(currentHour);

// Displays date in real time
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();

// //city search on click 

// //weather key 
// function getWeather() {
//     
//     var ApiKey = "b3a715295a3981335545db2b6dede970";
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApiKey


// store all data retrieved inside object "response"


// This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Bujumbura,Burundi&appid=" + APIKey;

// AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
        console.log(queryURL);
        console.log(response);

        // Transfer content to HTML
        $(".city-name").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);

        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temperature").text("Temperature (F): " + tempF.toFixed(2));

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    });