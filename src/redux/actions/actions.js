import axios from 'axios';
export const GET_ALL_HOUSES = 'GET_ALL_HOUSES';
export const CREATE_HOUSE = 'CREATE_HOUSE'

let fetchingTimes = 0;

export function getHouses() {
    return function (dispatch) {
        return axios.get('http://localhost:3000/houses')
        .then((result) => result.data)
        .then((houses) => {
            dispatch({ type: GET_ALL_HOUSES, payload: houses, fetchingTimes: ++fetchingTimes})
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

let id = 3;

export function createHouse(house) {
    return {
        type: CREATE_HOUSE,
        payload: { ...house, id: ++id},
    }
}

