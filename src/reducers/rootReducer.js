import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    user: postReducer
});