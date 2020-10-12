import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Membre from './components/Membre';

const famille = {
  membre1: {
    nom: 'Antoine',
    age: 56,
    description: 'homme'
  },
  membre2: {
    nom: 'Karine',
    age: 53,
    description: 'femme'
  },
  membre3: {
    nom: 'Laïka',
    age: 2,
    description: 'chienne'
  },
  membre4: {
    nom: 'Yoko',
    age: 4,
  },
}
class App extends Component {
  state = { famille }

  handleClick = (membre) => {
    // on utilise l'opérateur spread pour faire une copie  : 
    const famille = { ...this.state.famille }
   
    famille[membre].age += 1
    this.setState({ famille })
  }

  handleChange = (event, membre) => {
    const famille = { ...this.state.famille }
    famille[membre].nom = event.target.value
    this.setState({ famille })
  }

  render() {
    const { titre } = this.props;

    const liste = Object.keys(famille).map(membre => (
      <Membre
      key={membre} // key est une prop technique qui doit être unique
        nom={famille[membre].nom}
        age={famille[membre].age}
        makeOlder={() => this.handleClick(membre)}
        // on passe à la fois un event et un autre paramètre
        changeName={(event) => this.handleChange(event, membre)}>
          {famille[membre].description}
          
      </Membre>
    ))
    return (
      <div className="App">
        <h1>Titre {titre}</h1>
        {liste}
      </div>
    );
  }
}


export default App;
