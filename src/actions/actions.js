import * as actionTypes from './actionTypes';
import store from '../store/store';

export const getUsers = () => dispatch => {
    fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(users => 
            dispatch({
            type: actionTypes.GET_USERS,
            payload: users
            })
        );
};

export const getUser = (userId) => dispatch => {
    console.log("getting user");
    fetch('http://localhost:8080/users/' + userId) 
        .then(res => res.json())
        .then(loggedInUser => 
            dispatch({
            type: actionTypes.GET_LOGGED_IN_USER,
            payload: loggedInUser
            })
        );
}

export const showProjectDetails = (event) => dispatch => {
    const state = store.getState();
    const index = event.currentTarget.value;
    console.log("setting showProject: ");
    fetch("http://localhost:8080/users/"+state.user.loggedInUser.id)
        .then(res=> res.json())
        .then(loggedInUser => {
            const showProject = loggedInUser.projects[index];
            dispatch({
                type: actionTypes.SHOW_PROJECT,
                payload: {showProject, loggedInUser}});
            
        });
}

export const deleteTask = (event) => dispatch => {
    const number = event.currentTarget.value;
    const state = store.getState();
    fetch("http://localhost:8080/tasks/" + number, {
        method: 'DELETE'
    }).then(() => {
        console.log("PROJECT ID>>>>>>>>" + state.user.showProject.id);
        fetch("http://localhost:8080/projects/" + state.user.showProject.id)
        .then(res => res.json())
        .then(project => 
            dispatch({ 
                type: actionTypes.DELETE_TASK,
                payload: project
             }));
        console.log('removed');
    }).catch(err => {
        console.error(err)
    });
}

export const newList = (payload) => dispatch => {
    const projectID = payload.projectID;
    const columnTitle = payload.columnTitle;
    const state = store.getState();
    const postData = {columnTitle: columnTitle};
    fetch("http://localhost:8080/"+projectID+"/column", {
        method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(() => {
        fetch("http://localhost:8080/projects/" + state.user.showProject.id)
        .then(res => res.json())
        .then(project =>
            dispatch({
                type: actionTypes.NEW_LIST,
                payload: project
            }));
        console.log("created");
    }).catch(err => {
        console.error(err)
    });
}

export const getWeather = () => dispatch => {
    fetch("http://localhost:8080/weather")
        .then(res => res.json())
        .then(weather => {
            dispatch({
                type: actionTypes.GET_WEATHER,
                payload: weather
            })
        }).catch(err=> {
            console.error(err);
        });
}