import { combineReducers } from 'redux';
import AppReducer from './reducer/appReducer';
import HomeReducer from './containers/Home/reducer';

const rootReducer = combineReducers({
    app: AppReducer,
    home: HomeReducer
})

export default rootReducer;