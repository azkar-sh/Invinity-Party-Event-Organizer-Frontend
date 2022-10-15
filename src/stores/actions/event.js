import axios from "../../utils/axios";

export const getDataEvent = () => {
  return {
    type: "GET_DATA_EVENT",
    payload: axios.get(`event?page=&limit=20&sort=&dateTimeShow=&name=`),
  };
};

export const getDataEventById = (id) => {
  return {
    type: "GET_DATA_EVENT_BY_ID",
    payload: axios.get(`event/${id}`),
  };
};

export const updateDataEvent = (id, data) => {
  return {
    type: "UPDATE_DATA_EVENT",
    payload: axios.patch(`event/${id}`, data),
  };
};

export const createDataEvent = (data) => {
  return {
    type: "CREATE_DATA_EVENT",
    payload: axios.post(`event`, data),
  };
};
