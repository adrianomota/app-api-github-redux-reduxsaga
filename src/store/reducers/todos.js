const STATE_INITIAL = [
  {
    id: 1,
    text: 'Fazer café',
  },
  {
    id: 2,
    text: 'Estudar React',
  },
  {
    id: 3,
    text: 'Ir ao supermercado',
  },
];
export default function todos(state = STATE_INITIAL, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'DEl_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
