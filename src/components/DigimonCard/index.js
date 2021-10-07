import "./styles.css";
const DigimonCard = ({ digimon }) => {
  return (
    <div className="digimonCard">
      <img src={digimon.img} alt={digimon.name} />

      <div className="digimonInfo">
        <p>{digimon.name}</p>
        <p>{digimon.level}</p>
      </div>
    </div>
  );
};

export default DigimonCard;
