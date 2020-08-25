import { combineReducers } from 'redux';
import { AppState } from '../../models/state/AppState';
import dashboardReducer from '../dashboard/duck';

const rootReducer = combineReducers<AppState>({
  dashboardState: dashboardReducer,
});

export default rootReducer;
