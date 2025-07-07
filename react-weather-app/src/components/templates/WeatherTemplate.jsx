import Text from "../atoms/Text";
import { Link } from "react-router-dom";

const WeatherTemplate = ({ city, weather }) => {
  if (!city || !weather) {
    return <Text content="City or weather data not found." />;
  }
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 underline">
          ← Back to Search
        </Link>
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <Text text={city.name} className="text-2xl font-bold mb-2" />
        <WeatherInfoBlock weather={weather} />
      </div>
    </div>
  );
};

export default WeatherTemplate;
