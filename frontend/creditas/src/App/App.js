import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Message ({ id, text }) {
  return (
    <div key={id}>
      {text}
    </div>
  );
}

function onSend ({ target }) {
  const { text } = this.refs

  const { messages } = this.state

  const newMessage = {
    id: new Date(),
    text: text.value
  }

  this.setState({ messages: [ ...messages, newMessage ] })
  text.value = ''
  text.focus()
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }

    this.onSend = onSend.bind(this)
  }

  render() {
    const { messages } = this.state

    return (
      <React.Fragment>
        <h1>Chat</h1>
        <div class="messages">
          <ul class="message-list">
            {messages.map(Message)}
          </ul>
          <div class="message-input">
            <input type="text" ref="text" />
            <button type="button" onClick={this.onSend}>Enviar</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
