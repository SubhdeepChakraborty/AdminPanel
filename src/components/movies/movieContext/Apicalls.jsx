import axios from "axios";

import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSucess,
  createMovieStart,
  createMovieFailure,
  createMovieSuccess,
  deleteMovieStart,
  deleteMovieFailure,
  deleteMovieSucess,
  updateMovieFailure,
  updateMovieSuccess,
  updateMovieStart,
} from "./Action";

export const getMovies = async (dispatch) => {
  dispatch(deleteMovieStart());
  try {
    const res = await axios.get(
      "https://server-sf9z.onrender.com/api/movies/",
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(deleteMovieSucess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(deleteMovieFailure());
  }
};

//create MOVIE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/movies/",
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
    console.log(err);
  }
};

//DELETE MOVIE
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("https://server-sf9z.onrender.com/api/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};

//UPDATE MOVIE
export const UpdateMovie = async (id, movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.put(
      "https://server-sf9z.onrender.com/api/movies/" + id,
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFailure());
  }
};
