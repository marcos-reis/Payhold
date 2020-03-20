import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from "./reducers"
import {saveUser} from"./sagas"

const persistConfig ={
	key:'root',
	storage
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)





export const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saveUser)
export const persistor = persistStore(store)


