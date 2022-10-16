const initialState = {
  wishlistData: [],
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_WISHLIST_BY_USER_ID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_WISHLIST_BY_USER_ID_REJECTED":
      return {
        ...state,
      };
    case "GET_DATA_WISHLIST_BY_USER_ID_FULFILLED":
      return {
        ...state,
        wishlistData: action.payload.data.data,
      };

    case "DELETE_WISHLIST_PENDING":
      return {
        ...state,
      };
    case "DELETE_WISHLIST_REJECTED":
      return {
        ...state,
      };
    case "DELETE_WISHLIST_FULFILLED":
      return {
        ...state,
        wishlistData: action.payload.data.data,
      };

    default:
      return state;
  }
};

export default wishlist;
