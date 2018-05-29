import React, { Component } from 'react';

import App from './App.state.js';

function createRandomText () {
	return new Date().toString()
}

function poll (fn) {
	return () => {
		const text = createRandomText()
		fn(text)
	}
}
 
function onStatPolling (fn) {
	setInterval(poll(fn), 1000);
}

function AppPolling () {
	return (
		<App onStatPolling={onStatPolling} />
	)
}

export default AppPolling;