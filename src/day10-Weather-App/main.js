import { WeatherAPI } from "./api.js";

const Api = new WeatherAPI();

const searchInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature span");
const windCondi = document.querySelector("#condition span");

async function weatherRenderer(lat, long , name ) {
   try{
   const details = await Api.getWeather(lat,long);
   cityName.textContent = name;
   temperature.textContent = details.temperature; 
   windCondi.textContent = details.windspeed;
   }
   catch(error){
   console.log("Error", error);
   }
}

searchInput.addEventListener("input", async function(){
let input = searchInput.value
if(!input) return;
cityName.textContent = `Searching...`
 try{
   const cityData = await Api.getCoordinates(input);
   if(!cityData) throw new Error("Kuch toh hua hai");
   
   await weatherRenderer(cityData.latitude, cityData.longitude ,cityData.name)
 }
 catch(error){
   cityName.textContent = "Error";
   console.log(error.message)
 }
 finally{
   console.log(`karaykram samparn hua`)
 }
})

navigator.geolocation.getCurrentPosition(async (position)=>{
   let lat = position.coords.latitude;
   let long = position.coords.longitude;
   
   weatherRenderer(lat, long, "Your Location");

}, async (error)=>{
   console.log(error, `Access Denied, Location is changed to Default(London) `)
   cityName.textContent = "Loading.."
// Manually fetch London
        try {
            const cityData = await Api.getCoordinates("London");
            weatherRenderer(cityData.latitude, cityData.longitude, cityData.name);
        } catch (err) {
            console.error(err);
        }

})