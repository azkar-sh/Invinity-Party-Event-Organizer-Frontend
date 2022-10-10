const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      const incrementCounter = state.count + action.data;

      return {
        ...state,
        count: incrementCounter,
      };
    }
    case "DECREASE": {
      const decrementCounter = state.count - action.data;

      return {
        ...state,
        count: decrementCounter,
      };
    }

    default: {
      return state;
    }
  }
};

export default counter;
