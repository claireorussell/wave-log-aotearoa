const initialState = {}

function raglan(state = initialState, action) {
    switch(action.type) {
        case 'GOT_RAGLAN':
            return action.raglanMagic
            default: 
            return state
    }
}

export default raglan