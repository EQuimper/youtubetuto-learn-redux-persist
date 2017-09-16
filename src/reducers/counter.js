const initialState = 0

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/UP':
      return state + 1;
    case 'counter/DOWN':
      return state - 1;
    default:
      return state;
  }
}
