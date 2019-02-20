// configuracao inicial do REDUX

// inicializando redux na aplicacao
import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

// passando os reducers que armazenam e alteram as informacoes de estado de dentro do redux
const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));

export default store;
