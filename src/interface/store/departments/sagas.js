import { all } from 'redux-saga/effects';

import authentication from './authentication/sagas'
import database from './database/sagas'
import notifications from './notifications/sagas'
import storage from './storage/sagas'
import assimilationSagas from 'assimilation/store/sagas'


export default function* rootSaga() {
  yield all([
    authentication(),
    database(),
    notifications(),
    storage(),
    ...assimilationSagas
  ]);
}