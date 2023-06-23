// import {createStore} from 'redux'

import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga'
// import contactSaga from "./contactSaga";







// const store= createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer:rootReducer,
        middleware:()=>[sagaMiddleware]
    }
    )



sagaMiddleware.run(productSaga);
// sagaMiddleware.run(contactSaga);
export default store;