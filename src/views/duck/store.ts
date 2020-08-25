import { createStore, Store } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from '../../models/localStorage';
import throttle from 'lodash.throttle';
import { SavedAppState } from '../../models/state/SavedAppState';
import { AppState } from '../../models/state/AppState';

const mapStateToSavedState = (state: AppState): SavedAppState => {
  return {};
};

const mapSavedStateToState = (
  savedState: SavedAppState | undefined
): AppState | undefined => {
  if (!savedState) {
    return undefined;
  }
  return {
    dashboardState: {}
  };
};

export function configureStore(): Store<AppState> {
  const initialState = mapSavedStateToState(loadState());

  const store = createStore(rootReducer, initialState);

  store.subscribe(
    throttle(() => {
      saveState(mapStateToSavedState(store.getState()));
    }, 1000)
  );

  return store;
}
