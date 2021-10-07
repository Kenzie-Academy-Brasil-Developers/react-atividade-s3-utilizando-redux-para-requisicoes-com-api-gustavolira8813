import { CircularProgress } from "@material-ui/core/";
import { circularProgressClasses } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonThunk } from "../../store/modules/digimons/thunk";
import "./styles.css";
const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSearch = (evento) => {
    setError(false);
    evento.preventDefault();
    dispatch(addDigimonThunk(input, setError, setIsLoading));
    setInput("");
  };
  return (
    <div className="form">
      <input
        placeholder="procure um digimon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button disabled={!input} onClick={handleSearch}>
        Pesquisar
      </button>
      <div>{error && <span>Digimon não encontrado</span>}</div>
      {isLoading && <CircularProgress color="primary" />}
    </div>
  );
};
export default Search;
