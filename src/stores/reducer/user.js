const initialState = {
  userData: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_REJECTED":
      return {
        ...state,
      };
    case "GET_DATA_USER_FULFILLED":
      return {
        ...state,
        userData: action.payload.data.data,
      };

    default: {
      return state;
    }
  }
};

export default user;
