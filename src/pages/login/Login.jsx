import React, { useState } from "react";
import "./login.scss";
import { useGlobalAuthContext } from "./loginContext/Context";
import { motion } from "framer-motion";
import { login } from "./loginContext/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isfetching, dispatch } = useGlobalAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    toast.success("Welcome Subhdeeep.", {
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
      className="login"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeOut",
      }}
    >
      <div className="container">
        <div className="item">
          <label htmlFor="" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            required
            autoFocus
            autoComplete="off"
            auto
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="" className="text-2xl">
            Password
          </label>
          <input
            type="password"
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} disabled={isfetching}>
          Login
        </button>
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
    </motion.div>
  );
};

export default Login;
