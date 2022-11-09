import React, { Component } from 'react';
import './App.css';
import Circle from './Circle.jsx'

class App extends Component {
  state = {
    circles: [
      {id: 1, content: 'circle1'},
      {id: 2, content: 'circle2'},
      {id: 3, content: 'circle3'},
      {id: 4, content: 'circle4'},
    ],
    score: 0,
  };
/*   clickHandler = (id) => {
    this.setState(circle => {
        if (circles.id === id) {
          console.log('circle clicked', {id});
          return {...circles, score: this.state.score + 1}
        } else { return circles};
    })
  } */
  clickHandler = (id) => {
    this.setState({score: this.state.score + 1
    })
    console.log('circle clicked', {id});
  }

  render() {
  const showCircles = this.state.circles.map(circle => {
    return (
      <Circle 
      key= {circle.id}
      content= {circle.content}
      click= {() => this.clickHandler(circle.id)}
      />
    )
  });
    return (
      <div className='App'>
        <h1>Speed Game</h1>
        <h4>Your score is: {this.state.score}</h4>
        <div className="circles">
        {showCircles}
        </div>
        <button>Start</button>
        <button type="reset">End</button>
      </div>
    );
  }
}

export default App;
