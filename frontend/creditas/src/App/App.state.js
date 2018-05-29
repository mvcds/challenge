import React, { Component } from 'react';

import App from './App.js';

function onSend (text) {
  const { messages } = this.state

  const newMessage = {
    id: new Date(),
    text
  }

  this.setState({ messages: [ ...messages, newMessage ] })
}

class AppState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }

    this.methods = {
      onSend: onSend.bind(this)
    }

    this.onReceiveMessage = this.onReceiveMessage.bind(this)
  }

  componentWillMount () {
    this.props.onStatPolling(this.onReceiveMessage)
  }

  onReceiveMessage (text = 'bla') {
    const { messages } = this.state

    const newMessage = {
      id: new Date(),
      text
    }

    this.setState({ messages: [ ...messages, newMessage ] })
  }

  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    );
  }
}

export default AppState;
