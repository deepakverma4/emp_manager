import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';

import Router from './Router'

class App extends Component {

componentWillMount(){
const config =	{
    apiKey: 'AIzaSyB4pbvxfZDzLngXzMMM95Dit2vrKYApOW4',
    authDomain: 'manager-67cd7.firebaseapp.com',
    databaseURL: 'https://manager-67cd7.firebaseio.com',
    projectId: 'manager-67cd7',
    storageBucket: 'manager-67cd7.appspot.com',
    messagingSenderId: '392653509846'
  };
  firebase.initializeApp(config);
}


	render(){
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
	
				<Router />
			</Provider>
			);
	}
}

export default App;