const initialState = {
  userAuth: [],
  isLogin: false,
  isLoading: false,
  isError: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        userAuth: action.payload.data.data,
        isLogin: true,
        isLoading: false,
        isError: false,
      };
    case "LOGOUT":
      return {
        ...state,
        userAuth: [],
        isLogin: false,
      };
    default:
      return state;
  }
};

export default auth;
