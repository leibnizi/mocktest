import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Mock from 'mockjs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  // mockRandom = () => {
  //
  // }

  render() {

    const {data} = this.state

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <button onClick={() => {
          this.setState({data: Mock.mock({
              'list|1-10': [
                {
                  'id|+1': 1
                }
              ]
            })})
        }}>mock</button>
      {data && data.list.map((item, index) => <p key={index}>{item.id}</p>)}
    </div>);
  }
}

export default App;
