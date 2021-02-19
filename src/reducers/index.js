import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF,ADD_SMURF_START, POST_ERROR,SUBMIT_ERROR} from "./../actions/index";
  
  export const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
  };

//2. Add in the arguments needed to complete a standard reducer function.
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_START:
        return {
          ...state,
          isLoading: true,
          smurfs: [],
        };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isLoading: false,
          error: "",
        };
      case FETCH_SMURF_FAIL:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case ADD_SMURF:
        return {
          ...state,
          smurfs: action.payload,
          error: "",
          isLoading: false,
        };
      case ADD_SMURF_START:
        return state;
      case POST_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case SUBMIT_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  };