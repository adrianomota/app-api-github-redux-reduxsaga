export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: { text },
});

export const delTodo = id => ({
  type: 'DEl_TODO',
  payload: { id },
});
