import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./Action";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/auth/login",
      user
    );
    console.log(res.data);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
