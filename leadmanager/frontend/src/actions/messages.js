import { CREATE_MESSAGE } from "./types";

//Create MEssage

export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
