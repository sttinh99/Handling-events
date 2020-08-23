import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal'

class App extends Component {
  constructor(){
    super();
    this.state={
      isOpen: false
    }
    this.clickOpen=this.clickOpen.bind(this)
  }
  clickOpen(){
    console.log(this.state.isOpen)
    const {isOpen}=this.state;
    this.setState({
      isOpen:!isOpen
    })
  }
  render() {
    const {isOpen} = this.state;
    let className = 'App-header'
    if(isOpen){
      className += ' display';
    }
    return (
      <div className="App">
        <Modal isOpen={this.state.isOpen} onclick={this.clickOpen} />
        <header className={className}>
          <p>
            <button onClick={this.clickOpen}>Open modal</button>
          </p>
        </header>      
      </div>
    );
  }
}

export default App;
