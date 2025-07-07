import Text from "../atoms/Text";

const WeatherInfoBlock = ({ weather }) => {
  const { temp, humid, windSpeed, feelLike } = weather;
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <Info label="Temperature" value={`${temperature}°C`} />
      <Info label="Feels Like" value={`${feelsLike}°C`} />
      <Info label="Humidity" value={`${humidity}%`} />
      <Info label="Wind Speed" value={`${windSpeed} km/h`} />
    </div>
  );
};
const Info = ({ label, value }) => {
  <div className="p-3 border rounded-md text-center shadow-sm">
    <Text text={label} className="text-sm text-gray-500" />
    <Text text={value} className="font-bold text-lg" />
  </div>;
};
export default WeatherInfoBlock;
