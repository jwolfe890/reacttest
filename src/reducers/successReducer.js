import * as actionTypes from '../constants/actionTypes'

export default function(state = [], action) {
    switch (action.type) {
        case actionTypes.SUCCESSCOMPLETE:
            return action.payload
        default:
            return state;
    }
}

