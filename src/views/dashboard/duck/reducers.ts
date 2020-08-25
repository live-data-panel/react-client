import { AnyAction, Reducer } from 'redux';
import { DashboardState } from '../../../models/state/DashboardState';

const INITIAL_STATE: DashboardState = {};

const dashboardReducer: Reducer<DashboardState, AnyAction> = (
  state = INITIAL_STATE,
  action
) => {
  return state;
};

export default dashboardReducer;
