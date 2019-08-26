import axios from 'axios';
import { types } from '../../types/types';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: types.LOADING_UI });
    axios.post('/login', userData)
    .then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: types.CLEAR_ERRORS });
        console.log('history', history);
        history.push('/home');
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: types.SET_ERRORS,
            payload: err.response.data
        })
    });
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: types.LOADING_USER });
    axios.get('/user')
        .then(res => {
            dispatch({
                type: types.SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}