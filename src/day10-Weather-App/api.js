export class WeatherAPI {
    async getCoordinates(city) {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        
        const data = await response.json();
        if (!data.results) {
            throw new Error("City not found");
        }

        return data.results[0]; 
    }

    async getWeather(lat, lon) {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        
        return data.current_weather; 
    }
}
