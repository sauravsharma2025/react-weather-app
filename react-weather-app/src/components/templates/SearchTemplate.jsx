import SearchBar from "../molecules/SearchBar";
import CityList from "../organisms/CityList";

const SearchTemplate = ({ cities, onSearch, onCitySelect }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search for the City</h1>
      <SearchBar onSearch={onSearch} />

      <div className="mt-6">
        <CityList cities={cities} onCitySelect={onCitySelect} />
      </div>
    </div>
  );
};

export default SearchTemplate;
