import axios from "axios";
import {
  getUsersFailureData,
  getUsersSucessData,
  getUsersStartData,
  deleteUsersStart,
  deleteUsersSuccess,
  deleteUsersFailure,
  createUsersStart,
  createUsersSucess,
  createUserFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
} from "./Action";

//GET USERS
export const getUsersData = async (dispatch) => {
  dispatch(getUsersStartData());
  try {
    const res = await axios.get("https://server-sf9z.onrender.com/api/users/", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    // console.log(res.data);
    dispatch(getUsersSucessData(res.data));
  } catch (err) {
    dispatch(getUsersFailureData());
    console.log(err);
    dispatch(deleteUsersFailure());
  }
};

//DELETE USERS
export const getUserDelete = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    await axios.delete("https://server-sf9z.onrender.com/api/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUsersSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteUsersFailure());
  }
};

//CREATE USER
export const createUser = async (user, dispatch) => {
  dispatch(createUsersStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/auth/register",
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(createUsersSucess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

export const UpdateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put(
      "https://server-sf9z.onrender.com/api/users/" + id,
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    console.log(res.data);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
