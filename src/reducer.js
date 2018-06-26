// @flow
import {combineReducers} from 'redux';

const data = (state = {}, action) => {
    switch(action.type) {
        case 'GET_DATA':
            return {...state, ...action.data};
        default:
            return state;
    }
};

export default combineReducers({
    data,
});
