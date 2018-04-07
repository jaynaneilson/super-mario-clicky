import React, { Component } from "react";
import ClickCard from "./components/ClickCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    cards: cards
  };

  randomImage = id => {
    this.state.cards.forEach((image) => {
      if (image.id === id) {
        if (image.clicked) {

          alert("YOU LOST!! This image was previously selected.");
          this.setState({})
          this.resetGame();
          return false;
        }
        else {
          this.updateScore();
          image.clicked = true;
        }
        if (this.state.score >= this.state.highScore) {
          this.newHighScore();
        }
      }
    });
  }

  randomShuffle = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ cards: copy });
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.won())
  }

  newHighScore = () => {
    this.setState((newState) => ({
      highScore: newState.score
    }))
  }

  won = () => {
    if (this.state.score === this.state.cards.length) {
      alert("YOU WIN!!!")
      this.setState({});
      this.resetGame();
    }
    else {
      setTimeout(() => {
        this.randomShuffle(this.state.cards)
      }, 500);
    }
  }

  resetGame = () => {
    this.state.cards.forEach((image) => {
      image.clicked = false;
    })
    this.setState({ score: 0 })
  }

  render() {
    return (
      <Wrapper>
        <Nav/>
        <h3> score = {this.state.score} highScore = {this.state.highScore} </h3>
          <Header/>
          {this.state.cards.map(cards => {


          return <ClickCard
            {...cards}
            key={cards.id}
            randomImage={this.randomImage}
            randomShuffle={() => this.randomShuffle(this.state.cards)}
          />;
        })}
      </Wrapper>
  )};
}

export default App;
