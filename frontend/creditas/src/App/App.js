import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MessageInput from './MessageInput'

function Message ({ id, text }) {
  return (
    <div key={id}>
      {text}
    </div>
  );
}

class App extends Component {
  render() {
    const { messages, onSend } = this.props

    return (
      <React.Fragment>
        <h1>Chat</h1>
        <div class="messages">
          <ul class="message-list">
            {messages.map(Message)}
          </ul>
          <MessageInput onSend={onSend} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
