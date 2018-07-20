import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import ChatWindow from './ChatWindow';

const users = [
  { username: "Amy"},
  { username: "John"}
];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">

        <div className="container">

          {users.map( (user) => ( 
            <ChatWindow 
            key={user.username}
            user={user}
            />
          ))}

          {/*--------------------------- Amy window ------------------------*/}
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

          {/*--------------------------- message box ------------------------*/}
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

          {/*--------------------------- input's amy ------------------------*/}
            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/*--------------------------- John window ------------------------*/}
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>

          {/*--------------------------- message box ------------------------*/}
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

          {/*--------------------------- input's john ------------------------*/}
            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;