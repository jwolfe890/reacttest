// import React from 'react';
// import ReactDOM from 'react-dom';
// import Enzyme from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount } from 'enzyme';
import { call, put, takeEvery } from 'redux-saga/effects';
import { successIndicator } from '../../actions/successActions';
import { testSaga } from '../../sagas/successSagas';
import * as api from '../../api/axiosCalls'
import * as actions from '../../actions/successActions'
import * as actionTypes from '../../constants/actionTypes';


it('properly investigates next and value', () => {
    const success = testSaga(); 
    expect(success.next().value).toEqual(call(api.successFinder));
});

it('properly figures out what the fuck next data does', () => {
    const success = testSaga(); 
    let response = { data: { userId: 1 }}
    success.next()

    expect(success.next(response).value).toEqual(put(actions.successComplete(response)))

    console.log(success.next(response).value)    
})
