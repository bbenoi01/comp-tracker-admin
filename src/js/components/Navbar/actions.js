import axios from 'axios';
import { types } from '../../types/types';

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization'];
        dispatch({ type: types.SET_UNAUTHENTICATED });
        window.location.href = '/';
    }
}

export const updateMetrics = (userMetrics) => (dispatch) => {
    axios.post('/metrics/user', userMetrics)
        .then(res => {
            dispatch(getUserMetrics());
        })
        .catch(err => console.log(err));
}

export const getUserMetrics = () => (dispatch) => {
    dispatch({ type: types.LOADING_USER });
    axios.get('/user')
        .then(res => {
            dispatch({
                type: types.SET_METRICS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}