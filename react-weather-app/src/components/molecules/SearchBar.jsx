import { useState } from "react";
import Button from "../atoms/Button";
import InputField from "../atoms/InputField";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearchCity = () => {
    console.log("SK@", city);
    onSearch(city);
  };

  return (
    <>
      <InputField
        placeHolder="Enter City Name"
        ariaLabel="Enter City Name"
        name="inputCity"
        id="input-City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        text="Search City"
        onClick={handleSearchCity}
        value={city}
      ></Button>
    </>
  );
};
export default SearchBar;
