


export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'SET_COUNTER':
      
      return state += 1;
      break;
    default:
      return state;
      break;
  }
}

export const value = (state = null, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.value;
      break;
    default:
      return state;
      break;
  }
}