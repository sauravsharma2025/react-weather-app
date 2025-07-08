import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherTemplate from "../components/templates/WeatherTemplate";
import { getWeatherByCityName } from "../services/weatherService";
import cities from "../data/cities.json";

const CityWeatherPage = () => {
  const { cityId } = useParams();
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedCity = cities.find((c) => c.id === cityId);
    setCity(selectedCity);

    if (selectedCity) {
      getWeatherByCityName(selectedCity.name).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }
  }, [cityId]);

  return <WeatherTemplate city={city} weather={weather} loading={loading} />;
};

export default CityWeatherPage;
