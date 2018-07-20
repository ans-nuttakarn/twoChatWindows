import React, { Component } from 'react';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';

class ChatWindow extends Component {
	render() {
		const user = this.props.user;
		const messages = this.props.messages;

		return (
			<div className="chat-window">
				<h2>Super Awesome Chat</h2>
				<div className="name sender">{user.username}</div>
				<MessageHistory messages={messages} user={user} />
				<AddMessage />
			</div>
		);
	}
}

export default ChatWindow;