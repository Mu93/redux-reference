import { legacy_createStore as createStore } from 'redux'

// action => js obj contact with reducer to  handle state
const action1 = {
  type: 'SPLIT',
  payload: 'Muhammed Abdelhakeem',
}
const action2 = {
  type: 'ADD_NAME',
  payload: 'Muhammed',
}

// js function return data => state
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SPLIT':
      return action.payload.split(' ')
    case 'ADD_NAME':
      state.push(action.payload)
      return state
    default:
      return state
  }
}

// const reducer = (state = [], action) => {
//   if (action.type === 'SPLIT') {
//     return action.payload.split(' ')
//   }
//   if (action.type === 'ADD_NAME') {
//     state.push(action.payload)
//     return state
//   }

//   return state
// }
const store = createStore(reducer)

console.log(store.getState())

// dispatch => send action to reducer
store.dispatch(action1)
store.dispatch(action2)

console.log(store.getState())
