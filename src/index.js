import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';

const config = {
	apiKey: 'AIzaSyATphOSzKr9848kQ24epRhYP3mMoUy8z6A',
	authDomain: 'netflix-onja-loic.firebaseapp.com',
	projectId: 'netflix-onja-loic',
	storageBucket: 'netflix-onja-loic.appspot.com',
	messagingSenderId: '396259060342',
	appId: '1:396259060342:web:2ec8f7b64a83ea0bc48d57',
};

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
