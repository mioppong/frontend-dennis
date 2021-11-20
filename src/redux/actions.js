import axios from "axios";
import types from "./actionTypes";

export const login = (payload) => async (dispatch) => {
  const url = "https://618de9ebfe09aa001744092d.mockapi.io/login";

  dispatch({ type: types.LOGIN_START });

  const response = await axios.post(url, { payload }).catch((err) => {
    return dispatch({ type: types.LOGIN_FAILED });
  });

  dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: types.LOGOUT });
};

export const createUser = (payload) => async (dispatch) => {
  console.log("the user we created is", payload);
  dispatch({ type: types.CREATE_USER_START });

  const url = "https://618de9ebfe09aa001744092d.mockapi.io/createUser";

  await axios.post(url, { payload }).catch((err) => {
    return dispatch({ type: types.CREATE_USER_FAILED });
  });
  dispatch({ type: types.CREATE_USER_SUCCESS, payload: { newUser: payload } });
};
