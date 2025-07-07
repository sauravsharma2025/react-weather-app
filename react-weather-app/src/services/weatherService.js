const API_KEY = "bf909b4a90c47e810fc156dc73c0ed75";
export const getWeatherByCityName = async (cityName) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
  );
  const data = await res.json();
  return {
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
};
