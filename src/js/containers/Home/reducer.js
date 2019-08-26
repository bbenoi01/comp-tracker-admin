import { types } from '../../types/types';

const INITIAL_STATE = {
    quotaId: '',
    newLines: 0,
    upgrades: 0
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default function HomeReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {

        case (types.SET_QUOTA):
            console.log('test', payload);
            return {
                ...state,
                quotaId: payload.quotaId,
                newLines: payload.newLines,
                upgrades: payload.upgrades
            };

        case(types.EDIT_METRIC):
            return {
                ...state,
                ...payload
            }
            
        default: return state;

    }
};