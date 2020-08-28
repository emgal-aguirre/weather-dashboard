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

var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";
// //city search on click 
$(".search-btn").on("click", function (event) {
    cityWeather($("#city").val())
})


// AJAX call to the OpenWeatherMap API
var cityWeather = function (city) {
    $.ajax({
        url: queryURL + city + "&appid=" + APIKey,
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
            console.log(response.coord.lat);
            console.log(response.coord.lon);
            dailyWeather(response.coord.lat, response.coord.lon);
        });
}

//5-day forecast 
var dailyWeather = function (lat, lon) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=
        "imperial"`,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        const daily = response.daily;
        let temp = 0
        for (let i = 0; i < 5; i++) {
            temp = (daily[i].temp.day - 273.15) * 1.80 + 32;
            $(".card-deck").append(`
            <div class="card mt-5">
    <div class="card-body five-day">
    <h5 class="card-title">Day ${i + 1}</h5>
    <img class="card-img-top" src="Assets/cloud.png" Card image cap>
    <!-- <p> proably need to update p tags to recieve data -->
    temperature: ${temp.toPrecision(4)}
    humity: ${daily[i].humidity}
    </p>
</div>
</div>
            `)
        }

    });

}

//UV index





// function getWeather() {
//     
//     var ApiKey = "b3a715295a3981335545db2b6dede970";
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApiKey
