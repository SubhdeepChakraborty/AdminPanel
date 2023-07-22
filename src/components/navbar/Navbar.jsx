import React from "react";
import "./navbar.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { useGlobalAuthContext } from "../../pages/login/loginContext/Context";
import { logout } from "../../pages/login/loginContext/Action";

const Navbar = () => {
  const { dispatch } = useGlobalAuthContext();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="image" />
        <span>Admin</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="icon" className="icon" />
        <img src="/app.svg" alt="icon" className="icon" />
        <img src="/expand.svg" alt="icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="icon" />
          <span className="">1</span>
        </div>
        <div className="user">
          <LazyLoadImage
            effect="black-and-white"
            threshold={100}
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
        </div>
        <div onClick={() => dispatch(logout())}>
          <LogoutIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
