import CityCard from "../molecules/CityCard";

const CityList = ({ cities, onCitySelect }) => {
  if (!cities.length)
    return <p className="text-gray-500 text-center">No Cities found</p>;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => {
          return <CityCard city={city.id} onClick={onCitySelect} />;
        })}
      </div>
    </>
  );
};

export default CityList;
