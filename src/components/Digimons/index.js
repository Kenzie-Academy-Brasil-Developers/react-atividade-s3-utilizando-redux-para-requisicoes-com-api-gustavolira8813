import { useSelector } from "react-redux";
import DigimonCard from "../DigimonCard";
import "./styles.css";
const Digimons = () => {
  const digimons = useSelector((state) => state.digimons);
  return (
    <div>
      <ul className="digimonBox">
        {digimons.map((e, i) => (
          <li key={i}>
            <DigimonCard digimon={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Digimons;
