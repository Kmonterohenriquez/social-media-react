import { GET_CURR_USER } from "./types";

export default function getCurrUser(userInfo) {
  return {
    type: GET_CURR_USER,
    payload: userInfo,
  };
} 
