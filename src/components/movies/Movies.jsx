import React, { useEffect } from "react";
import { useGlobalAreaContext } from "../context/AreaContext";
import { useGlobalMoviesContext } from "./movieContext/Context";
import { deleteMovie, getMovies } from "./movieContext/Apicalls";
import DataTable from "../../dataTable/DataTable";
import { Link } from "react-router-dom";
import Add from "../add/Add";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Movies = ({ text }) => {
  const { open, setOpen } = useGlobalAreaContext();
  const { movies, dispatch } = useGlobalMoviesContext();

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleClick = (id) => {
    deleteMovie(id, dispatch);
    toast.success("Successfully deleted.", {
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

  console.log(movies);
  console.log(import.meta.env.VITE_FIRE_BASE_KEY);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      renderCell: (params) => <span>{params.row._id}</span>,
    },
    {
      field: "Avatar",
      headerName: "Avatar",
      headerAlign: "center",
      align: "center",
      width: 100,
      renderCell: (params) => (
        <LazyLoadImage
          effect="blur"
          threshold={100}
          src={params?.row?.img}
          alt="image"
          className="Avatar-image"
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      type: "string",
      width: 180,
      editable: true,
      renderCell: (params) => <span>{params.row.title}</span>,
    },
    {
      field: "genre",
      headerName: "Genre",
      type: "string",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 90,
    },
    {
      field: "year",
      headerName: "Year",
      width: 90,
      headerAlign: "center",
      align: "center",
      type: "String",
      editable: true,
    },

    {
      field: "limit",
      headerName: "Limit",
      width: 90,
      headerAlign: "center",
      align: "center",
      editable: true,
      type: "String",
    },

    {
      field: "isSeries",
      headerName: "Series",
      width: 90,
      editable: true,
      type: "boolean",
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 210,
      renderCell: (params) => (
        <div className="flex gap-5 actions">
          <Link
            to={{ pathname: "/movies/" + params.row._id }}
            state={{ user: params.row }}
          >
            <img src="/view.svg" alt="image" className="cursor-pointer" />
          </Link>
          <div
            className="delete cursor-pointer"
            onClick={() => handleClick(params.row._id)}
          >
            <img src="/delete.svg" alt="image" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div exit={{ opacity: 0 }} className="movies">
      <div className="info">
        <button onClick={() => setOpen(true)} className="rounded">
          {text}
        </button>
      </div>
      <DataTable cols={columns} rows={movies} title="Products" />
      {open && (
        <Add
          setOpen={setOpen}
          title="Add New Movie"
          inputs={columns}
          update={false}
        />
      )}
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
    </motion.div>
  );
};

export default Movies;
