import React, { Component } from 'react';
import Table from '../tasks/tasks';
import Form from '../form/form';

class App extends Component {
    state = {
        characters: []
    };

    doneCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                if (i !== index) {
                    return true
                }
                if (i === index) {
                    var utc = new Date().toLocaleString();
                    character.end = utc;
                    character.done='hidden';
                    console.log(character.done);
                    return true
                }
            })
        })
    }
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });

    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <h1>Tasks list</h1>

                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    doneCharacter={this.doneCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;