import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersToDisplay: [],
      filmsToDisplay: []
    }
  this.getCharacters = this.getCharacters.bind(this);
  this.getFilms = this.getFilms.bind(this);
  }

  getCharacters() {
    axios.get('https://swapi.co/api/people')
      .then(response => {
        this.setState({
          charactersToDisplay: response.data.results
        })
      })
      .catch(error => {
        console.log(222, error)
      })
  }

  getFilms() {
    axios.get('https://swapi.co/api/films')
      .then(response => {
        this.setState({
          filmsToDisplay: response.data.results
        })
      })
      .catch(error => {
        console.log(222, error)
      })
  }

  render() {
  //console.log(this.state.charactersToDisplay)
    const people = this.state.charactersToDisplay.map ( c => {
      return (
        <div>
            <p>name: { c.name }</p>
            <p>height: { c.height }</p>
            <p>mass: { c.mass }</p>
            <p>skin_color: { c.skin_color }</p>
            <p>eye_color: { c.eye_color }</p>
            <p>birth_year: { c.birth_year }</p>
            <hr className='hr' />
        </div>
      )
    })

    const films = this.state.filmsToDisplay.map ( f => {
      return (
        <div>
            <p>title: { f.title }</p>
            <p>episode_id: { f.episode_id }</p>
            <p>director: { f.director }</p>
            <p>release_date: { f.release_date }</p>
            <p>characters: { f.eye_color }</p>
            <hr className='hr' />
        </div>
      )
    })

    return (
      <div>
          <header>
            <div id='title'>
              Star Wars
            </div>
          </header>

          <section id='blocks'>

            <div className='btn-container'>
              <button
                className='btn-sp btn'
                onClick={ this.getCharacters }
                >Characters</button>
              <button
                className='btn-sp btn'
                onClick={ this.getFilms }
                >Films</button>
            </div>

            <div className='main'>
              <h2>Characters</h2>

                <p>{ people }</p>

            </div>

            <div className='main'>
              <h2>Films</h2>

                <p>{ films }</p>

            </div>

          </section>

      </div>
    );
  }
}

export default App;
