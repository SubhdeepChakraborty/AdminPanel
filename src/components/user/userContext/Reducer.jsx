export const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return {
        users: [],
        isfetching: true,
        error: false,
      };
    case "GET_USERS_SUCCESS":
      return {
        users: action.payload,
        isfetching: false,
        error: false,
      };
    case "GET_USERS_FAILURE":
      return {
        users: [],
        isfetching: false,
        error: true,
      };

    case "DELETE_USERS_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "DELETE_USERS_SUCCESS":
      return {
        users: state.users.filter((user) => user._id !== action.payload),
        isfetching: false,
        error: false,
      };
    case "DELETE_USERS_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };

    case "CREATE_USER_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "CREATE_USER_SUCCESS":
      return {
        users: [...state.users, action.payload],
        isfetching: true,
        error: false,
      };
    case "CREATE_USER_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };
    case "UPDATE_USER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_USER_SUCCESS":
      return {
        movies: state.users.map(
          (user) => user._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
