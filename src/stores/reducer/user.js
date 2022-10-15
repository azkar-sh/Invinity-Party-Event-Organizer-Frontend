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
    case "GET_DATA_USER_BY_ID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_BY_ID_REJECTED":
      return {
        ...state,
      };
    case "GET_DATA_USER_BY_ID_FULFILLED":
      return {
        ...state,
        userData: action.payload.data.data,
      };
    case "UPDATE_DATA_USER_PENDING":
      return {
        ...state,
        data: [],
      };
    case "UPDATE_DATA_USER_REJECTED":
      return {
        ...state,
      };
    case "UPDATE_DATA_USER_FULFILLED":
      return {
        ...state,
        userData: action.payload.data.data,
      };

    case "UPDATE_PASSWORD_USER_PENDING":
      return {
        ...state,
        data: [],
      };
    case "UPDATE_PASSWORD_USER_REJECTED":
      return {
        ...state,
      };
    case "UPDATE_PASSWORD_USER_FULFILLED":
      return {
        ...state,
        userData: action.payload.data.data,
      };

    case "UPDATE_IMAGE_USER_PENDING":
      return {
        ...state,
        data: [],
      };
    case "UPDATE_IMAGE_USER_REJECTED":
      return {
        ...state,
      };
    case "UPDATE_IMAGE_USER_FULFILLED":
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
