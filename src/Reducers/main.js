import {
    GET_EVENTS_SUCCESS
} from '../Actions/main';

const initialState = {
    events: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS_SUCCESS:
            return {...state, events: action.events};
        default:
            return state;
    }
}