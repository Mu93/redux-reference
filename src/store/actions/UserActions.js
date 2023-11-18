const SET_USER = 'SET_USER'

// Actions
const setUser = (user) => {
  return { type: SET_USER, payload: user }
}

export { setUser }
