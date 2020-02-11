import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Spider Cat'
  },
  {
    id: 3,
    title: '36th Chamber of Shaolin'
  },
  {
    id: 4,
    title: 'Slow and Furious III'
  }
];

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie=> <Movie key={movie.id} movie={movie} />)}
        {/* iterates over movies array, maps it, taking each movie element and returns a <Movie> component where that movie is passed in!  */}
      </div>
    );
  }
}


export default App;
