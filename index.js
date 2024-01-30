const apikey = "e116753ce29bfc2cdc3cc74fd824c679";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".city input");
const searchbtn=document.querySelector(".city button");
const weatherIcon= document.querySelector(".icon");

async function checkWeather(place){
    const response = await fetch(apiurl + place + `&appid=${apikey}`);


    
    var data= await response.json();

    console.log(data);
    document.querySelector(".place").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=Math.round( data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src="cloudy-day.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src="sunny.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src="fog.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src="rain.png";
    }
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})

