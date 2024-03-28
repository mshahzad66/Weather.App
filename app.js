const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchBtn");
const weather_image = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const Description = document.querySelector(".Description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body  = document.querySelector(".weather-body");

async function checkweath(city) {
  const api_key = "de84ff6d5082cbf8909a695f529aaa09";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(url);

  let response = await weather_data.json();

  console.log(response);
  if (response.cod == '404'){
      location_not_found.style.display = "flex";
      weather_body.style.display = "none"
    console.log('error');
    return;
    
  }
      weather_body.style.display = "flex";
      location_not_found.style.display = "none";



  temperature.innerHTML = `${Math.round(response.main.temp - 273.15)}°C`;



  Description.innerHTML = `${response.weather[0].description}`;


  humidity.innerHTML = `${response.main.humidity}`;


  wind_speed.innerHTML = `${response.wind.speed}Km/h`;


//   switch(response.weather[0].main){
//     case 'Clouds' :
//         weather_image.src = "/assets/cloud.png";
//         break;
//     case 'Clear' :
//         weather_image.src = "/assets/clear.png";
//         break;
//     case 'Rain' :
//         weather_image.src = "/assets/rain.png";
//         break;
//     case 'Mist' :
//         weather_image.src = "/assets/mist.png";
//         break;
//     case 'Snow' :
//         weather_image.src = "/assets/snow.png";
//         break;
//   }

if(response.weather[0].main == 'Clouds'){
    weather_image.src = "/assets/cloud.webp";
}
else if (response.weather[0].main == 'Clear'){
    weather_image.src = "/assets/clear.webp";

}
else if (response.weather[0].main == 'Rain'){
    weather_image.src = "/assets/rain.webp";


}else if (response.weather[0].main == 'Mist'){
    weather_image.src = "/assets/mist.webp";


}else if (response.weather[0].main == 'Snow'){
    weather_image.src = "/assets/snow.webp";

}
else if (response.weather[0].main == 'Haze'){
    weather_image.src = "/assets/haze.webp";

}
  
}

searchbtn.addEventListener("click", () => {
  checkweath(inputbox.value);
});
