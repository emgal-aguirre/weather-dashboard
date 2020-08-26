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




//weather key 
function getWeather() {
    var city = $("#searchInput").val();
    var weatherApiKey = "b3a715295a3981335545db2b6dede970";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApiKey

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(QueryURL);
        console.log(response);

        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        $(".city").html("<h1>" + response.name + "</h1>");
        $(".tempF").text("Temperature: " + response.main.temp);
        $(".humity").text("Humidity: " + response.main.humidity);
        $(".wind").text("Wind Speed: " + response.main.wind);

        //console.log
        console.log("Temperature: " + response.main.temp);
        console.log("Humidity: " + response.main.humidity);
        console.log("Wind Speed: " + response.main.wind);
    });
}

// store all data retrieved inside object "response"


//transfer content to HTML 

