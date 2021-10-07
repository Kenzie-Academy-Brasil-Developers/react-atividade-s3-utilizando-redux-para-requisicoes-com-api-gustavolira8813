import { ADD_DIGIMONS } from "./actionsTypes";

export const addDigimon = (digimon) => {
  return {
    type: ADD_DIGIMONS,
    digimon,
  };
};
