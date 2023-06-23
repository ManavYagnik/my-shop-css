// import {takeEvery,put} from 'redux-saga/effects'
// import {  ADD_CONTACT, SEARCH_CONTACT, SEARCH_PRODUCT, CONTACT_LIST,SET_CONTACT_LIST } from './constant';


// function* getContacts(){
//      let data = yield fetch(`https://my-json-db.onrender.com/contacts`);
    
//     data = yield data.json();
//     // data = data.record.product;
//     console.log("Data from bin",data);

    
//     yield put({type:SET_CONTACT_LIST,data:data})
// }

// function* searchContacts(data){
//     let result = yield fetch(`https://my-json-db.onrender.com/contacts?q=${data.query}`);
//     result = yield result.json();
//     console.log("action is called", data)
//     yield put({type: SET_CONTACT_LIST, data:result})

// }

// function* contactSaga()
// {
//  yield takeEvery(SET_CONTACT_LIST, getContacts)
//  yield takeEvery(SEARCH_CONTACT, searchContacts)

// }


// export default contactSaga;