import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loggedInUser: null,
    showProject: null,
    weather: null
}

const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_TASK:
            console.log("in the delete task reducer");
            return {
                ...state,
                showProject: action.payload
            };
        case actionTypes.SHOW_PROJECT:
            console.log("in the showProject reducer: " + action.payload);
            return {
                ...state,
                showProject: action.payload.showProject,
                loggedInUser: action.payload.loggedInUser
            };
        case actionTypes.GET_LOGGED_IN_USER:
            console.log("in the reducer")
            return {
              ...state,
              loggedInUser: action.payload

            };
        case actionTypes.NEW_LIST:
            console.log("in the new List reducer");
            return {
                ...state,
                showProject: action.payload
            }
        case actionTypes.GET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
            
        default:
            return state;
    }
};

export default postReducer;