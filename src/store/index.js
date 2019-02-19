// configuracao inicial do REDUX

// inicializando redux na aplicacao
import { createStore } from 'redux';

import reducers from './reducers';

// passando os reducers que armazenam e alteram as informacoes de estado de dentro do redux
const store = createStore(reducers);

export default store;
