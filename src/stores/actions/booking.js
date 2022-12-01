import axios from "../../utils/axios";

export const createBooking = (data) => {
  return {
    type: "CREATE_BOOKING",
    payload: axios.post(`booking`, data),
  };
};

export const getBookingDataByUserId = (id) => {
  return {
    type: "GET_BOOKING_DATA_BY_USER_ID",
    payload: axios.get(`booking/${id}`),
  };
};
