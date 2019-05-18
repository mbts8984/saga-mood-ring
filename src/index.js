import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


//SAGAS



function* fetchImages(action) {
    //triggers our GET and then sending to image reducer and redux
    console.log('in fetchImages');
    try{
        let imageResponse = yield axios.get('/api/images');
        yield put ({type: 'SET_IMAGES', payload: imageResponse.data})
    } catch(error) {
        console.log('error in get images: ', error)
    }
}

function* fetchTagSaga() {
    const allTheTags = yield axios.get('/api/tags')
    yield put({
        type: 'SET_TAGS',
        payload: allTheTags.data
    })
}; //end fetchTags

function* addTagSaga(action) {
    //triggers our POST to DB
    console.log('in addTagSaga with data LOOK HERE YO:', action.payload);
    try{
        yield axios.post('/api/images/addtag', action.payload)
        yield put({ type: 'SET_TAG_FOR_DISPLAY'})
    }catch(error){
        console.log('error in post: ', error)
    }
}

function* displayTagSaga(action) {
    const displaysToRender = axios.get('/api/imagetag')
    yield put({type: 'DISPLAY_TAG',
               payload: displaysToRender.data
            })  
    console.log('in displayTagSage with tag and imageid: ', displaysToRender.data);
}


// REDUCERS
const displayTagReducer = (state = [], action) => {
    switch (action.type) {
        case 'DISPLAY_TAG':
            return action.payload;
        default:
            return state;
    }
}

// GET IMAGES REDUCER
// Used to store images returned from the server
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

//TAGS REDUCER
// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
        displayTagReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages);
    yield takeEvery('ADD_TAG', addTagSaga);
    yield takeEvery('FETCH_TAGS', fetchTagSaga);
    yield takeEvery('SET_TAG_FOR_DISPLAY', displayTagSaga)
}

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
