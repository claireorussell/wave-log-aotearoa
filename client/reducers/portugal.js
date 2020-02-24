const initialState = {}

function portugal(state = initialState, action) {
    switch(action.type) {
        case 'GOT_PORTUGAL':
            return action.portugalMagic
        default:
            return state
    }
}

export default portugal