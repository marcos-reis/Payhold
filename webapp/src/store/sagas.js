import {takeEvery,put} from 'redux-saga/effects'
import api from '../services/api'
import  {saveUserId} from '../services/user'



	function* dataUser(){
		const response = yield api.get('/sessions/0?owner=true')
		 yield put ({type:'SAVE_DATA_USER',data:response.data})
		 const id = response.data

		saveUserId(id)

	}



export function* saveUser(){
	yield takeEvery("PRE_SAVE_DATA_USER",dataUser)
}



