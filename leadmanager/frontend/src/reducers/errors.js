import { GET_ERRORS } from "../actions/types";
//import { SwitchTransition } from "react-transition-group";

const initialState = {
  msg: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.statu,
      };
    default:
      return state;
  }
}
