import React, { useState } from "react";
import SearchTemplate from "../components/templates/SearchTemplate";
import cities from "../data/cities.json";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setLoading(true);
    setTimeout(() => {
      const result = cities.filter((city) =>
        city.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCities(result);
      setLoading(false);
    }, 300); // simulate debounce/API delay
  };

  const handleCitySelect = (city) => {
    navigate(`/city/${city.id}`);
  };

  return (
    <SearchTemplate
      cities={filteredCities}
      loading={loading}
      onSearch={handleSearch}
      onCitySelect={handleCitySelect}
    />
  );
};

export default SearchPage;
