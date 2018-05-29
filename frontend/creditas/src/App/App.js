import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MessageInput from './MessageInput'
import Chat from './Chat'

class App extends Component {
  render() {
    const { messages, onSend } = this.props

    return (
      <React.Fragment>
        <h1>Chat</h1>
        <div class="messages">
          <Chat messages={messages} />
          <MessageInput onSend={onSend} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
