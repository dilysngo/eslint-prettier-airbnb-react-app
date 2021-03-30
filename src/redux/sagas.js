import { all } from 'redux-saga/effects';

import { HomeSaga } from 'modules/home';

export default function* rootSaga() {
  yield all([HomeSaga()]);
}
