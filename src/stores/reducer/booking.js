const initialState = {
  bookingData: [],
  userBooking: [],
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    // case "GET_DATA_BOOKING_PENDING":
    //   return {
    //     ...state,
    //     bookingData: [],
    //   };
    // case "GET_DATA_BOOKING_REJECTED":
    //   return {
    //     ...state,
    //   };
    // case "GET_DATA_BOOKING_FULFILLED":
    //   return {
    //     ...state,
    //     bookingData: action.payload.data.data,
    //   };
    case "GET_BOOKING_DATA_BY_USER_ID_PENDING":
      return {
        ...state,
        userBooking: [],
      };
    case "GET_DATA_BOOKING_BY_USER_ID_REJECTED":
      return {
        ...state,
      };
    case "GET_DATA_BOOKING_BY_USER_ID_FULFILLED":
      return {
        ...state,
        userBooking: action.payload.data.data,
      };
    // case "UPDATE_DATA_BOOKING_PENDING":
    //   return {
    //     ...state,
    //     bookingData: [],
    //   };
    // case "UPDATE_DATA_BOOKING_REJECTED":
    //   return {
    //     ...state,
    //   };
    // case "UPDATE_DATA_BOOKING_FULFILLED":
    //   return {
    //     ...state,
    //     bookingData: action.payload.data.data,
    //   };
    // case "DELETE_DATA_BOOKING_PENDING":
    //   return {
    //     ...state,
    //     bookingData: [],
    //   };
    // case "DELETE_DATA_BOOKING_REJECTED":
    //   return {
    //     ...state,
    //   };
    // case "DELETE_DATA_BOOKING_FULFILLED":
    //   return {
    //     ...state,
    //     bookingData: action.payload.data.data,
    //   };

    case "CREATE_BOOKING_PENDING":
      return {
        ...state,
        bookingData: [],
      };
    case "CREATE_BOOKING_REJECTED":
      return {
        ...state,
      };
    case "CREATE_BOOKING_FULFILLED":
      return {
        ...state,
        bookingData: action.payload.data.data,
      };

    default:
      return state;
  }
};

export default booking;
