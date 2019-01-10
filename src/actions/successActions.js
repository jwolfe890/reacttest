import * as actionTypes from '../constants/actionTypes'
import axios from 'axios';

export function successIndicator() {
    return { 
        type: actionTypes.SUCCESSINDICATOR, 
    }
}

export function successComplete(response) {
    return { 
        type: actionTypes.SUCCESSCOMPLETE,
        payload: response
    }
}



