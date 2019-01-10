import * as actionTypes from '../constants/actionTypes'
import axios from 'axios';

export function successFinder() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}