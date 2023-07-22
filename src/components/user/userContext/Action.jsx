//GETTING USERS
export const getUsersStartData = () => ({
  type: "GET_USERS_START",
});

export const getUsersSucessData = (user) => ({
  type: "GET_USERS_SUCCESS",
  payload: user,
});

export const getUsersFailureData = () => ({
  type: "GET_USERS_FAILURE",
});

//DELETING USERS
export const deleteUsersStart = () => ({
  type: "DELETE_USERS_START",
});

export const deleteUsersSuccess = (id) => ({
  type: "DELETE_USERS_SUCCESS",
  payload: id,
});

export const deleteUsersFailure = () => ({
  type: "DELETE_USERS_FAILURE",
});

//CREATING USERS
export const createUsersStart = () => ({
  type: "CREATE_USER_START",
});

export const createUsersSucess = (user) => ({
  type: "CREATE_USER_SUCCESS",
  payload: user,
});

export const createUserFailure = () => ({
  type: "CREATE_USER_FAILURE",
});

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  payload: user,
});

export const updateUserFailure = () => ({
  type: "UPDATE_USER_FAILURE",
});
