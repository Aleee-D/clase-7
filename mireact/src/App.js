import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



/*function HelloWorld(props){
    return <h1>Hello World! Aleee</h1>
}*/
class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = { seconds: 0, color: 'color: #FF0000' };
  }

  tick(){
    this.setState( state => ({
      seconds: state.seconds + 1,
      color : 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
    }));
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    return (
      <p style={{ color: this.state.color }} >
        Hola Mundo! {this.props.name} en {this.state.seconds}
      </p>
    )
  }
}



ReactDOM.render(<HelloWorld name="Aleee" />, document.getElementById("root"));