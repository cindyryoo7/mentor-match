import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';

// right now, there is no need to make async calls so we will leave saga-related code commented out
// import rootSaga from '../sagas/rootSaga';

//const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer);
  //const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  // sagaMiddleware.run(rootSaga); 
  return store;
};

export default configureStore;