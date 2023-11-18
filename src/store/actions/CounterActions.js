const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Actions

const increment = () => {
  return {
    type: INCREMENT,
  }
}

const decrement = () => {
  return {
    type: DECREMENT,
  }
}

// Actions must be plain objects.Instead, the actual type was: 'function'.
// You may need to add middleware to your store setup to handle dispatching other values, 
// such as 'redux-thunk' to handle dispatching functions

// Actions
// const increment = {
//   type: INCREMENT,
// }

// const decrement = {
//   type: DECREMENT,
// }

export { increment, decrement }
