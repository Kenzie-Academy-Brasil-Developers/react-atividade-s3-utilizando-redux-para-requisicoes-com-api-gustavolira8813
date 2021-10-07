import { addDigimon } from "./actions";
import axios from "axios";

export const addDigimonThunk =
  (digimon, setError, setIsLoading) => (dispatch, store) => {
    setIsLoading(true);
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
      .then((response) => {
        setIsLoading(false);
        dispatch(addDigimon(response.data[0]));
        console.log(response);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(true);
        console.log(e);
      });
  };
