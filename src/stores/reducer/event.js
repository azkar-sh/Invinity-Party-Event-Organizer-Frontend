const initialState = {
  eventData: [],
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_EVENT_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_EVENT_REJECTED":
      return {
        ...state,
      };
    case "GET_DATA_EVENT_FULFILLED":
      return {
        ...state,
        eventData: action.payload.data.data,
      };
    case "GET_DATA_EVENT_BY_ID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_EVENT_BY_ID_REJECTED":
      return {
        ...state,
      };
    case "GET_DATA_EVENT_BY_ID_FULFILLED":
      return {
        ...state,
        eventData: action.payload.data.data,
      };
    case "UPDATE_DATA_EVENT_PENDING":
      return {
        ...state,
        data: [],
      };
    case "UPDATE_DATA_EVENT_REJECTED":
      return {
        ...state,
      };
    case "UPDATE_DATA_EVENT_FULFILLED":
      return {
        ...state,
        eventData: action.payload.data.data,
      };
    case "DELETE_DATA_EVENT_PENDING":
      return {
        ...state,
        data: [],
      };
    case "DELETE_DATA_EVENT_REJECTED":
      return {
        ...state,
      };
    case "DELETE_DATA_EVENT_FULFILLED":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default event;
