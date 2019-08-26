import { types } from '../types/types';

const INITIAL_STATE = {
    authenticated: false,
    loading: false,
    credentials: {},
    errors: {}
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        
        case (types.SET_ERRORS): {
            return {
                ...state,
                loading: false,
                errors: payload
            };
        }

        case (types.CLEAR_ERRORS): {
            return {
                ...state,
                loading: false,
                errors: {}
            };
        }

        case (types.LOADING_UI): {
            return {
                ...state,
                loading: true
            };
        }

        case (types.SET_AUTHENTICATED): {
            return {
                ...state,
                authenticated: true
            };
        }

        case (types.SET_UNAUTHENTICATED): {
            return {
                INITIAL_STATE
            };
        }

        case (types.SET_USER): {
            return {
                authenticated: true,
                loading: false,
                credentials: payload.credentials,
                errors: {}
            };
        }

        case (types.LOADING_USER): {
            return {
                ...state,
                loading: false
            };
        }
        
        default: return state;
    }
};