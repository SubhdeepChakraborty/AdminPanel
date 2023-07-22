import React, { useEffect } from "react";
import DataTable from "../../dataTable/DataTable";
import { useGlobalListContext } from "./listContext/Context";
import { getLists, deleteList } from "./listContext/Apicalls";
import { Link } from "react-router-dom";
import { useGlobalAreaContext } from "../context/AreaContext";
import { useGlobalMoviesContext } from "../movies/movieContext/Context";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewList from "./addList/NewList";

const List = ({ text }) => {
  const { lists, dispatch } = useGlobalListContext();
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { field: "title", headerName: "title", width: 220 },
    { field: "genre", headerName: "Genre", width: 90 },
    { field: "type", headerName: "type", width: 90 },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 210,
      renderCell: (params) => (
        <div className="flex gap-5 actions">
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
  const { open, setOpen } = useGlobalAreaContext();
  const { movies } = useGlobalMoviesContext();
  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleClick = (id) => {
    deleteList(id, dispatch);
    toast.success("Successfully Deleted", {
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
    <motion.div
      className="list"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut" }}
    >
      <button
        className="bg-white text-black p-[5px] cursor-pointer mb-[20px] rounded"
        onClick={() => setOpen(true)}
      >
        {text}
      </button>
      <DataTable cols={columns} rows={lists} title="Lists" />
      {open && <NewList setOpen={setOpen} />}
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

export default List;
