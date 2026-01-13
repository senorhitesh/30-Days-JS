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


export // The Debounce Function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // 1. Clear the previous timer if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // 2. Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute the function after the delay
    }, delay);
  };
}


const fetchWeatherData = async (inputValue) => {
  if (!inputValue) return;

  cityName.textContent = `Searching...`;

  try {
    const cityData = await Api.getCoordinates(inputValue);
    
    if (!cityData) throw new Error("Kuch toh hua hai"); // Keeping your custom error!

    await weatherRenderer(cityData.latitude, cityData.longitude, cityData.name);
    
  } catch (error) {
    cityName.textContent = "Error";
    console.log(error.message);
  } finally {
    console.log(`karaykram samparn hua`);
  }
};
// Create a version of the function that waits 500ms before running
const debouncedFetch = debounce((e) => {
  fetchWeatherData(e.target.value);
}, 500);

searchInput.addEventListener("input", debouncedFetch);

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