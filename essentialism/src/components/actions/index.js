import axios from "axios";
//THIS IS WHERE THE API SENDS A REQUEST AND RETURN THE INFORMATION
export const INITIAL_FETCH = "INITIAL_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
//FORM THAT ADDS
export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
//WHEN DELETING
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_SUCCESS = "REMOVE_SUCCESS";
export const REMOVE_FAILURE = "REMOVE_FAILURE";

export const fetchGoals = () => (dispatch) => {
  dispatch({ type: INITIAL_FETCH });
  axios
    .get("http://localhost:5000")
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAIL, payload: err.response }));
};

export const addGoal = (title, date) => (dispatch) => {
  dispatch({ type: ADD_START });
  axios
    .post("http://localhost:5000", { title, date })
    .then((res) => dispatch({ type: ADD_SUCCESS }))
    .catch((err) => dispatch({ type: ADD_FAILURE }));
};

export const removeGoal = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM });
  axios
    .delete(`http://localhost:5000`)
    .then((res) => dispatch({ type: REMOVE_SUCCESS }))
    .catch((err) => dispatch({ type: REMOVE_FAILURE }));
};
