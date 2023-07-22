export const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return {
        movies: [],
        isfetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isfetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: [],
        isfetching: false,
        error: true,
      };
    case "CREATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MOVIE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_MOVIES_DELETE":
      return {
        ...state,
        isfetching: false,
        error: false,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie.id !== action.payload),
        isfetching: false,
        error: false,
      };
    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_MOVIE_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
