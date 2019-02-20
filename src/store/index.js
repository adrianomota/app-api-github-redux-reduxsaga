// configuracao inicial do REDUX

// inicializando redux na aplicacao
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import reducers from './ducks';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddlewares);

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

// passando os reducers que armazenam e alteram as informacoes de estado de dentro do redux
const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddlewares.run(sagas);

export default store;
