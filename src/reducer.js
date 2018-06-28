// @flow
import {combineReducers} from 'redux';

const info = (state = {}, action) => {
    switch(action.type) {
        case 'GET_DATA':
            return state;
        case 'GET_DATA_SUCCESS':
            return {...state, data: action.data};
        case 'GET_DATA_ERROR':
            console.error(action.data);
            return state;
        default:
            return state;
    }
};

export default combineReducers({
    info,
});
