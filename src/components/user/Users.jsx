import React, { useEffect } from "react";
import DataTable from "../../dataTable/DataTable";
import { Link } from "react-router-dom";
import { useGlobalUserData } from "./userContext/Context";
import { getUserDelete, getUsersData } from "./userContext/Api";
import { motion } from "framer-motion";
import { useGlobalAreaContext } from "../context/AreaContext";
import Add from "../add/Add";
import { userInputs } from "../add/formdata";
import "./user.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = ({ text }) => {
  const { users, dispatch } = useGlobalUserData();
  const { open, setOpen } = useGlobalAreaContext();
  // console.log(users);

  useEffect(() => {
    getUsersData(dispatch);
  }, [dispatch]);

  const handleUser = (id) => {
    getUserDelete(id, dispatch);
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

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 210,
      renderCell: (params) => <span>{params?.row?._id}</span>,
    },
    {
      field: "Avatar",
      headerName: "Avatar",
      headerAlign: "center",
      align: "center",
      width: 100,
      renderCell: (params) => (
        <LazyLoadImage
          src={params?.row?.profilePic || "/noavatar.png"}
          alt="image"
          effect="blur"
          threshold={100}
          className="Avatar-image"
        />
      ),
    },
    {
      field: "username",
      headerName: "Name",
      type: "string",
      width: 180,
      editable: true,
      renderCell: (params) => <span>{params?.row?.username}</span>,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      editable: true,
      width: 170,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
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
            to={{ pathname: "/users/" + params?.row?._id }}
            state={{ user: params?.row }}
          >
            <img src="/view.svg" alt="image" className="cursor-pointer" />
          </Link>
          <div
            className="delete cursor-pointer"
            onClick={() => handleUser(params?.row?._id)}
          >
            <img src="/delete.svg" alt="image" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut" }}
      className="users"
    >
      <div className="info">
        <button onClick={() => setOpen(true)} className="rounded">
          {text}
        </button>
      </div>
      <DataTable cols={columns} rows={users} title="Users" />
      {open && (
        <Add
          setOpen={setOpen}
          title="Add New User"
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

export default Users;
