// reducer holding state of beaches
const initialState = []

function beaches (state= initialState, action) {
  switch(action.type) {
    case 'GOT_BEACHES':
      return action.beaches

    default:
      return state
  }
}

export default beaches