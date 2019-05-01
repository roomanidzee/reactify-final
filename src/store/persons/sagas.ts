import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {getAllPersons} from "./services";
import {allPersonsAction} from "./actions";
import {PersonsActionTypes} from "./types";

function* handleFetch(){

    try{
        const res = yield call(getAllPersons);

        yield put(allPersonsAction(res));

    }catch(err){
        console.error(err);
    }

}

function* watchFetchRequest(){
    yield takeEvery(PersonsActionTypes.FETCH_DATA, handleFetch);
}

function* personsSaga() {
    yield all([fork(watchFetchRequest)]);
}

export default personsSaga;
