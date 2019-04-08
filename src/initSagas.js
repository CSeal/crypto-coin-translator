import * as sagas from './sagas';
export const initSagas = (sagasMiddlware) => {
  Object.values(sagas).forEach(sagasMiddlware.run.bind(sagasMiddlware));
}