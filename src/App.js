import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

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
    movies : []
  }

  // async allows using the await
  async componentDidMount() {
    try {
      // API setup
      const res = await fetch( 'https://api.themoviedb.org/3/discover/movie?api_key=4ae9f623fe5e58b8ff17c7a60c779bd6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      // changing result to json format
      const movies = await res.json();
      // updating the state
      this.setState({
        movies : movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie=> <Movie key={movie.id} movie={movie} />)}
        {/* iterates over movies json object, maps it with movie.id, takes each movie element and returns a <Movie> component where that movie is passed in!  */}
      </div>
    );
  }
}


export default App;
