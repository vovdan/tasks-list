import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            description: '',
            start:'',
            end:'',
            done:'visible'
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        var utc =  new Date().toLocaleString();
        this.setState({
            [name]: value,
            start: utc
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, description } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;