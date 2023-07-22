import React, { useEffect, useState } from "react";
import "./new.scss";
import { Select } from "@mui/material";
import { useGlobalMoviesContext } from "../../movies/movieContext/Context";
import { createList } from "../listContext/Apicalls";
import { getMovies } from "../../movies/movieContext/Apicalls";
import { useGlobalListContext } from "../listContext/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewList = ({ setOpen }) => {
  const [list, setList] = useState(null);
  const { dispatch } = useGlobalListContext();
  const { movies, dispatch: dispatchMovie } = useGlobalMoviesContext();
  console.log(movies);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    // console.log(e.target.selectedOptions);
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    toast.success("Process finished", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="newlist">
      <div className="modal">
        <div onClick={() => setOpen(false)} className="cursor-pointer close">
          <img src="/cross.svg" alt="image" className="image" />
        </div>
        <h1>Add New List</h1>
        <div className="form">
          <div className="item">
            <label>Title</label>
            <input
              type="text"
              placeholder="Action Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Type</label>
            <select
              className="outline-none border-white"
              name="type"
              onChange={handleChange}
            >
              <option className="options-select" value="">
                Select
              </option>
              <option value="movies" className="options-select">
                Movies
              </option>
              <option value="series" className="options-select">
                Series
              </option>
            </select>
          </div>
          <div className="item">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Action"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "288px", color: "white" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default NewList;
