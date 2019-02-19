import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// importando actions do componente
import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, delTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => delTodo(todo.id)}>(-) Remover</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo('Fazer mais café')}>(+) Adicionar</button>
  </Fragment>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

// disparando actions para algum reducer tratar e atualizar o estado ou nao
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
