import React, { Component } from 'react'

function onSend ({ target }) {
  const { text } = this.refs

  this.props.onSend(text.value)

  text.value = ''
  text.focus()
}

class MessageInput extends Component {
  constructor(props) {
    super(props)

    this.onSend = onSend.bind(this)
  }

	render () {
		return (
	      <div class="message-input">
	        <input type="text" ref="text" />
	        <button type="button" onClick={this.onSend}>Enviar</button>
	      </div>
		)		
	}
}

export default MessageInput;