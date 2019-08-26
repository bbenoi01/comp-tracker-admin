import axios from 'axios';
import { types } from '../../types/types';

export const updateQuota = (quota, quotaId) => (dispatch) => {
    axios.post(`/quota/${quotaId}`, quota)
        .then(res => {
            alert('Quota updated');
            dispatch(getQuota());
        })
        .catch(err => console.log(err));
}

export const getQuota = () => (dispatch) => {
    dispatch({ type: types.LOADING_USER });
    axios.get('/quota')
        .then(res => {
            dispatch({
                type: types.SET_QUOTA,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const updateQuotaState = (metric) => {
    return {
        type: types.EDIT_METRIC,
        payload: metric
    }
}