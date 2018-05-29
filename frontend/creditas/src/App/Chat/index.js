import React, { Component } from 'react';

function Message ({ id, text }) {
  return (
    <li key={id}>
      {text}
    </li>
  );
}

function Chat ({ messages }) {
	return (
		<ul class="message-list">
		  {messages.map(Message)}
		</ul>
	)
}

export default Chat;