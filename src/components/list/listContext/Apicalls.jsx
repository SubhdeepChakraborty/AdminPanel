import axios from "axios";
import {
  getListsStart,
  getListsFailure,
  getListsSuccess,
  createListStart,
  createListFailure,
  createListSuccess,
  deleteListStart,
  deleteListFailure,
  deleteListSuccess,
  updateListStart,
  updateListFailure,
  updateListSuccess,
} from "./Action.jsx";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("https://server-sf9z.onrender.com/api/lists/", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post(
      "https://server-sf9z.onrender.com/api/lists/",
      list,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("https://server-sf9z.onrender.com/api/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
