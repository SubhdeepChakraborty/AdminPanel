import React from "react";
import { useLocation } from "react-router-dom";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { motion } from "framer-motion";
import Add from "../add/Add";
import { useGlobalAreaContext } from "../context/AreaContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const data = [
  {
    name: "Sun",
    Visited: 6,
    Watching_hours: 2,
    amt: 2400,
  },
  {
    name: "Mon",
    Visited: 3,
    Watching_hours: 1,
    amt: 2210,
  },
  {
    name: "Tue",
    Visited: 5,
    Watching_hours: 3,
    amt: 2290,
  },
  {
    name: "Wed",
    Visited: 2,
    Watching_hours: 5,
    amt: 2000,
  },
  {
    name: "Thru",
    Visited: 6,
    Watching_hours: 2,
    amt: 2181,
  },
  {
    name: "Fri",
    Visited: 1,
    Watching_hours: 4,
    amt: 2500,
  },
  {
    name: "Sat",
    Visited: 8,
    Watching_hours: 7,
    amt: 2100,
  },
];

//MOVIES
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

//USERS
const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 210,
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
    renderCell: (params) => <span>{params.row.username}</span>,
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
          to={{ pathname: "/users/" + params.row._id }}
          state={{ user: params.row }}
        >
          <img src="/view.svg" alt="image" className="cursor-pointer" />
        </Link>
        <div
          className="delete cursor-pointer"
          onClick={() => handleUser(params.row._id)}
        >
          <img src="/delete.svg" alt="image" />
        </div>
      </div>
    ),
  },
];

const Single = () => {
  const location = useLocation();
  const { state } = location;
  const name = location.pathname.substring(1, 7);
  console.log(name);
  console.log(state);

  const { open, setOpen } = useGlobalAreaContext();

  return (
    <motion.div exit={{ opacity: 0 }} className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <LazyLoadImage
              src={name === "movies" ? state.user.img : state.user.profilePic}
              alt="image"
              effect="blur"
              className="image"
            />
            <div>
              {name === "movies" ? state.user.title : state.user.username}
            </div>
            <button className="rounded" onClick={() => setOpen(true)}>
              Update
            </button>
          </div>
          <div className="details w-[80%]">
            <div className="item">
              <div className="itemTitle">
                {name === "movies" ? "year" : "email"}:{" "}
              </div>
              <div className="itemValue">
                {name === "movies" ? state.user.year : state.user.email}
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">
                {name === "movies" ? "Genre" : "Amount"}:{" "}
              </div>
              <div className="itemValue">
                {name === "movies" ? state.user.genre : state.user.amount}
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">
                {name === "movies" ? "limit" : "Verified"} :{" "}
              </div>
              <div className="itemValue">
                {name === "movies" ? (
                  state.user.limit + "+"
                ) : state.user.status ? (
                  <DoneIcon />
                ) : (
                  <CloseIcon />
                )}
              </div>
            </div>
            <div
              className={`item ${
                name === "movies" ? "opacity-100" : "opacity-0"
              } `}
            >
              <div className="itemTitle">{name === "movies" && "Series"}:</div>
              <div className="itemValue">
                {name === "movies" && state.user.isSeries ? (
                  <DoneIcon />
                ) : (
                  <CloseIcon />
                )}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ background: "#f45b6810", border: "white" }}
                animationEasing="ease-in"
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Watching_hours"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="Visited" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          <li>
            <div>
              <p>
                {name === "movies"
                  ? `${state.user.title}. title image has been updated.`
                  : `${state.user.username} watching a series name Peaky Blinders.`}{" "}
              </p>
              <time>1 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                {name === "movies"
                  ? `${state.user.title}. description had been changed.`
                  : `${state.user.username} liked a movie name Matrix.`}{" "}
              </p>
              <time>2 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                {name === "movies"
                  ? `${state.user.title}. The title have been changed.`
                  : `${state.user.username} liked the movie name Lucy.`}{" "}
              </p>
              <time>4 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                {name === "movies"
                  ? `${state.user.title}. Had been added in a 200₹ subscription list.`
                  : `${state.user.username} added a action movie name superman.`}{" "}
              </p>
              <time>5 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                {name === "movies"
                  ? `${state.user.title}. trailer have been updated.`
                  : `${state.user.username} watched 70% of sci movies.`}{" "}
              </p>
              <time>10 day ago</time>
            </div>
          </li>
        </ul>
      </div>
      {open && (
        <Add
          setOpen={setOpen}
          title="Update"
          inputs={name === "movies" ? columns : userColumns}
          update={true}
          id={state.user._id}
        />
      )}
    </motion.div>
  );
};

export default Single;
