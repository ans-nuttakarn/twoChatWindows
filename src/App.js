import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import ChatWindow from './ChatWindow';

const users = [
  { username: "Amy" },
  { username: "John" }
];

class App extends Component {
  /*const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];*/
  state = {
    messages: []
  };

  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">

        <div className="container">

          {users.map((user) => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={this.state.messages}
            />
          ))}

          {/*--------------------------- Amy window ------------------------*/}
          <div className="chat-window">


            {/*--------------------------- message box ------------------------*/}

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


            {/*--------------------------- message box ------------------------*/}

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