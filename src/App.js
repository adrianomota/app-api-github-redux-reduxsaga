import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';

const App = () => (
  <div className="App">
    {/* O provider passa a todos os componentes dentro dele a informacao sobre o estado do redux usando a api de contexto do REACT */}
    <Provider store={store}>
      <TodoList />
    </Provider>
  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello React</h1>
//       </div>
//     );
//   }
// }

export default App;
