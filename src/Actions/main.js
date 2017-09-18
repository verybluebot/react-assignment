import axios from 'axios';
import { URL } from '../config/settings';

export const GET_EVENTS_REQUEST               = 'GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS               = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE               = 'GET_EVENTS_FAILURE';


export const getEventsRequest = () => ({
    type: GET_EVENTS_REQUEST
});

export const getEventsSuccess = (events) => ({
    type: GET_EVENTS_SUCCESS,
    events
});


export const getEventsFailure = (error) => ({
    type: GET_EVENTS_FAILURE,
    error
});

export const getEvents = () => {
    return dispatch => {
        dispatch(getEventsRequest());

        const body = {
            "APIKey": "1.0.0___3659E990-DDBB-42F6-B9DA-5E39B301FE74",
            "DeviceType": -1,
            "DeviceId": null,
            "RequestingUserId": "00000000-0000-0000-0000-000000000000",
            "SearchFilters": {
                "coordinates": {
                    "lat": 32.076769,
                    "lng": 34.770069
                },
                radius:6.404,
                time: "2017-09-11T04:00:00+03:00"

            }
        };
        axios.post(URL.events, body).then(res => {
            if (!res.data || !res.data.ResultSet || !res.data.ResultSet.Events) {
                dispatch(getEventsFailure('Result from getEvents was not as expected'));
                return;
            }

            dispatch(getEventsSuccess(res.data.ResultSet.Events))
        }, err => {
            dispatch(getEventsFailure(err))
        })
    }
};