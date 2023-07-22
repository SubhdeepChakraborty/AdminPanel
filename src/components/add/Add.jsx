import React, { useState } from "react";
import "./add.scss";
import { AddPhotoAlternate } from "@mui/icons-material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { storage } from "../firebase/firebase.js";
import { UpdateUser, createUser } from "../user/userContext/Api";
import { useGlobalUserData } from "../user/userContext/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UpdateMovie, createMovie } from "../movies/movieContext/Apicalls";

const Add = ({ setOpen, title, inputs, update, id }) => {
  const location = useLocation();
  console.log(location);
  const name = location.pathname.substring(1, 7);
  console.log(name);

  //FOR MOVIES
  const [movie, setMovie] = useState(null);
  const [imgTitle, setimgTitle] = useState(null);
  const [imgSm, setimgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  //FOR USERS
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [img, setImg] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [count, setCount] = useState(0);
  const { dispatch } = useGlobalUserData();

  const handleChange = (e) => {
    const value = e.target.value;
    if (name === "users") {
      setUser({ ...user, [e.target.name]: value });
    } else {
      setMovie({ ...movie, [e.target.name]: value });
    }
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setCount(progress + "%");
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          toast.error("Something went wrong.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            if (name === "users") {
              setUser((prev) => {
                return { ...prev, [item.label]: url };
              });
            } else {
              setMovie((prev) => {
                return { ...prev, [item.label]: url };
              });
            }
            setUpdated((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (name === "users") {
      upload([{ file: img, label: "profilePic" }]);
      toast.info("Processing your request", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (name === "users/") {
      upload([{ file: img, label: "profilePic" }]);
      toast.info("Processing your request", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      upload([
        { file: img, label: "img" },
        { file: imgTitle, label: "imgTitle" },
        { file: imgSm, label: "imgSm" },
        { file: trailer, label: "trailer" },
        { file: video, label: "video" },
      ]);
      toast.info("Processing your request", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "users") {
      createUser(user, dispatch);
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
    } else {
      createMovie(movie, dispatch);
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
    }
    setOpen(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (name === "users/") {
      UpdateUser(id, movie, dispatch);
      toast.success("Successfully Updated", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      toast.info("Kindly refresh the page before going anywhere.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      UpdateMovie(id, movie, dispatch);
      toast.success("Successfully Updated", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      toast.info("Kindly refresh the page before going anywhere.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  console.log(user);
  console.log(movie);

  return (
    <div className="add">
      <div className="modal">
        <div onClick={() => setOpen(false)} className="cursor-pointer close">
          <img src="/cross.svg" alt="image" className="image" />
        </div>
        <h1>{title}</h1>
        <form>
          {inputs
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "Avatar" &&
                item.field !== "action"
            )

            .map((item) => (
              <div className="item" key={item?.id}>
                <label>{item.headerName}</label>
                <input
                  type={item.type}
                  name={item.field}
                  placeholder={item.field}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          <div className={`item ${name === "movies" && "hide-paas"}`}>
            <label>Password</label>
            <input
              type="password"
              placeholder="xxxx"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className={`item ${name === "movies" && "hide-paas"} `}>
            <label>Amount</label>
            <input
              type="text"
              placeholder="200"
              name="amount"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>
              {name === "users" || name === "users/" ? "Avatar" : "Wallpaper"}
            </label>
            <div className="flex items-center justify-between">
              <label
                className="cursor-pointer flex items-center"
                htmlFor="image"
              >
                <AddAPhotoIcon sx={{ fontSize: 40 }} />
              </label>
              <span>{count}</span>
            </div>
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={(e) => setImg(e.target.files[0])}
              name={name === "user" ? "profilePic" : "img"}
            />
          </div>
          <div className={`item ${name === "movies" ? "show" : "hide-paas"}`}>
            <label>Title image</label>
            <div className="flex items-center justify-between">
              <label
                className="cursor-pointer flex items-center"
                htmlFor="imgTitle"
              >
                <AddPhotoAlternate sx={{ fontSize: 40 }} />
              </label>
              <span>{count}</span>
            </div>
            <input
              type="file"
              id="imgTitle"
              className="hidden"
              name="imgTitle"
              onChange={(e) => setimgTitle(e.target.files[0])}
            />
          </div>
          <div className={`item ${name === "movies" ? "show" : "hide-paas"}`}>
            <label>Thumbnail</label>
            <div className="flex items-center justify-between">
              <label
                className="cursor-pointer flex items-center"
                htmlFor="imgSm"
              >
                <AddPhotoAlternate sx={{ fontSize: 40 }} />
              </label>
              <span>{count}</span>
            </div>
            <input
              type="file"
              id="imgSm"
              className="hidden"
              name="imgSm"
              onChange={(e) => setimgSm(e.target.files[0])}
            />
          </div>
          <div className={`item ${name === "movies" ? "show" : "hide-paas"}`}>
            <label>Trailer</label>
            <div className="flex items-center justify-between">
              <label
                className="cursor-pointer flex items-center"
                htmlFor="trailer"
              >
                <VideocamIcon sx={{ fontSize: 40 }} />
              </label>
              <span>{count}</span>
            </div>
            <input
              type="file"
              id="trailer"
              className="hidden"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className={`item ${name === "movies" ? "show" : "hide-paas"}`}>
            <label>Movie</label>
            <div className="flex items-center justify-between">
              <label
                className="cursor-pointer flex items-center"
                htmlFor="video"
              >
                <VideoCameraBackIcon sx={{ fontSize: 40 }} />
              </label>
              <span>{count}</span>
            </div>
            <input
              type="file"
              id="video"
              className="hidden"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          {name === "users/" || name === "users" ? (
            <>
              {updated === 1 ? (
                <button onClick={update ? handleUpdate : handleSubmit}>
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleUpload}
                  className={`${clicked ? "opacity-0" : "opacity-100"} `}
                >
                  Upload
                </button>
              )}
            </>
          ) : (
            <>
              {updated === 5 ? (
                <button onClick={update ? handleUpdate : handleSubmit}>
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleUpload}
                  className={`${clicked ? "opacity-0" : "opacity-100"}`}
                >
                  Upload
                </button>
              )}
            </>
          )}
        </form>
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

export default Add;
