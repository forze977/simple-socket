import React from 'react';
import socketIOClient from 'socket.io-client'
import './App.css';

const endpoint = 'http://localhost:3100'

class App extends React.PureComponent {
  constructor(){
    super()
    this.state = {
      data: ''
    }
    this.onPreload()
  }

  onPreload(){
    socketIOClient(endpoint)
  }

  render(){
    return (
      <div>
        <input value={this.state.data} onChange={(event) => this.setState({data: event.target.value})}/>
        <button onClick={() => {
          const socket = socketIOClient(endpoint)
          socket.emit('msg', this.state.data)
          this.setState({ data: '' })
        }}>send</button>
      </div>
    )
  }
}

export default App;
