const initialState = {
  userData: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.data,
      };
    }

    default: {
      return state;
    }
  }
};
