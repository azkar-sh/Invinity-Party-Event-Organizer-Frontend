import axios from "../../utils/axios";

export const getDataUser = () => {
  return {
    type: "GET_DATA_USER",
    payload: axios({}),
  };
};
