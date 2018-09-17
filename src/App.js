import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  state = {
    message: "Let the Game Begin!",
    topScore: 0,
    currentScore: 0,
    characters: characters,
    unselectedCharacters: characters
  };

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  selectCharacter = name => {
    const findCharacter = this.state.unselectedCharacters.find(
      item => item.name === name
    );

    if (findCharacter === undefined) {
      // failure to select a new dog
      this.setState({
        message: "You guessed incorrectly!",
        topScore:
          this.state.curScore > this.state.topScore
            ? this.state.curScore
            : this.state.topScore,
        currentScore: 0,
        name: name,
        unselectedCharacters: name
      });
    } else {
      // success to select a new dog
      const newCharacters = this.state.unselectedCharacters.filter(
        item => item.name !== name
      );

      this.setState({
        message: "You guessed correctly!",
        currentScore: this.state.currentScore + 1,
        characters: characters,
        unselectedCharacters: newCharacters
      });
    }

    this.shuffleArray(characters);
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.characters.map(character => (
          <CharacterCard
            character={character.name}
            image={character.image}
            selectCharacter={this.selectCharacter}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
