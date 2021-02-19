import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_START = " ADD_SMURF_START";
export const POST_ERROR = "POST_ERROR";
export const SUBMIT_ERROR = "SUBMIT_ERROR";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: err.message });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_ERROR, payload: err.message });
    });
};

export const setError = (err) => (dispatch) => {
  dispatch({ type: SUBMIT_ERROR, payload: err });
};