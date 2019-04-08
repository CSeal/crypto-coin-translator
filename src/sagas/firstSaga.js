import { SET_VALUE } from '../actions'
import {delay, cancelled, takeLatest, cancel} from 'redux-saga/effects';

function* saga(){
  try{
    let chk = 0;
    while(true){
      console.log(`run ${++chk}`);
      yield delay(500);
    }
  }finally{
    const canceled = yield cancelled();
    console.log(`Process is canseled ? `, canceled)
  }
}

export function* myFirstSaga(){
  const process = yield takeLatest(SET_VALUE, saga);
  console.log('process = ', process);
  yield delay(3000);
  yield cancel(process)
}