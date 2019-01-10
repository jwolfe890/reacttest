import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';
import reduxThunk from 'redux-thunk';  

export default function configureStore() {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware, reduxThunk)
    );

    sagaMiddleware.run(rootSaga);

    return store

}
