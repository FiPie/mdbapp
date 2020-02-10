import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

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

  toggle = () => {                //arrow function
    this.setState({               //a method on a react component that updates our state, it takes in an object and changes the value of a property within this object
      toggle: !this.state.toggle  //we're changing the toggle state to it's opposite value
    })
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Welcome text="Welcome to React.js 16 course for almost everyone by Scott Tolinsky" toggle={this.state.toggle}/>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.toggle}>Show / Hide</button>    //we're calling method this.toggle on click event
          {this.state.toggle &&                                 //inline conditional statement, if this.state.toggle is true
            <p>This should show and hide</p>
          }
        </div>
      );
  }
}


class Welcome extends Component {
  render(){
      const { text, toggle } = this.props;
      console.log(toggle);
      return(
        <h2 className="App-title">{text}</h2>
    );
  }
}

export default App;
