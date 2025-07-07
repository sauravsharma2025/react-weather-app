import Text from "../atoms/Text";

const CityCard = ({ city, onClick }) => {
  const { name = "Gwalior", rank = "1st", image = "" } = city;

  return (
    <div onClick={() => onClick(city)}>
      <image
        src={image}
        alt="city image"
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <Text content={name} />
      <Text content={rank} />
    </div>
  );
};

export default CityCard;
