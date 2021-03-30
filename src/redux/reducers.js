import { combineReducers } from 'redux';

import { HomeReducer } from 'modules/home';

export default combineReducers({
  home: HomeReducer,
});
