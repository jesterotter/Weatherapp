let weather = {
    apiKey: "5228b5fd9f139d0ce7d3428cdd24a77c",
    fetchWeather: function(city) {
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        //this is the api i am using to get data from
    
    .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];//extracts icon and description from the array weather
        const { temp, humidity } = data.main;//extracts temp and humidity
        const { speed } = data.wind;
        //console.log(name, icon, description, temp, humidity, speed);//to display on the console
        document.querySelector(".city").innerText = "Weather in " + name;//to change the name when displaying new information like a new city for example
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"//to get icons that rep the weather info
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.floor(temp)  + "°C";
        document.querySelector(".humidity").innerText =  "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = " Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")

    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};//to get the parameters and extracts the name from the object in the API

document.querySelector(".search button")
.addEventListener("click", function(){
 weather.search();//gets info from search bar and automatically searches for it
});

document.querySelector(".search-bar")
.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});//this is to make the search bar responsive to data input by the user



weather.fetchWeather("");


