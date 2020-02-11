import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
/*
  constructor(props) {            //component constructor, often used for setting states but we are doing that via state object here
    super(props);
    console.log('constructor');
  }

  UNSAFE_componentWillMount() {   //componentWillMount is deprecated... should execute before render()
    console.log('will mount');
  }

  componentDidMount() {           //will be executed after render() of component and if the state of component has changed the whole component will re- render()
    console.log('mounted');
  }

  componentDidUpdate() {          //there is also shouldUpdate and many more
    console.log('did update');
  }

  state = {                       //state object
    toggle:true                   //default value of 'state' variable named 'toggle' is set to 'true' upon creation of this component
  }
  */

  state = {
    input : 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value.trim()
    })
  }

  submit = () => {                //arrow function allows us to use this eyword refering to component itself
    console.log(this.text.value);
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Welcome text="Welcome to React.js 16 course"/>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>{this.state.input}</h3>
          {/*updateInput accepts event itself as an argument */}
          <input type="text" onChange={this.updateInput} value={this.state.input}/>
          <input type="text" ref={(input) => this.text = input }/>
          {/* assigning a DOM element to a property on your component */}
          <button onClick={this.submit}>Show Value</button>
        </div>
      );
  }
}


class Welcome extends Component {
  render(){
      const { text } = this.props;
      return(
        <h2 className="App-title">{text}</h2>
    );
  }
}

export default App;
