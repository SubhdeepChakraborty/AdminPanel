import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home.jsx";
import {
  Homepage,
  List,
  Movie,
  Movies,
  User,
  Users,
} from "../../components/index.js";
import Login from "../login/Login.jsx";
import { useGlobalAuthContext } from "../login/loginContext/Context.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useGlobalAuthContext();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={user ? <Home /> : <Login />}>
          <Route index element={<Homepage />} />
          <Route path="users">
            <Route index element={<Users text="Add New User" />} />
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="movies">
            <Route index element={<Movies text="Add New Movie" />} />
            <Route path=":id" element={<Movie />} />
          </Route>
          <Route path="lists" element={<List text="Add New List" />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
