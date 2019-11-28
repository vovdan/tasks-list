import React, { Component } from 'react';
import './form.css';
import * as moment from 'moment';
class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            description: '',
            file: '',
            startsAt: '',
            endsAt: null,
            type: '',
            location: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        var utc = moment().format('YYYY-MM-DD HH:mm:ss');
        this.setState({
            [name]: value,
            startsAt:  utc,
            type: "notification",
            location: "saint p",
            file : "file",
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
            <form className='form' onSubmit={this.onFormSubmit}>
                <p>
                    <label style={{magrin: '2px'}}>Name</label><br />
                    <textarea
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange} />
                </p>
                <p>
                    <label style={{magrin: "20px"}}>Description</label><br />
                    <textarea style={{height: "100px"}}
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange} />
                </p>
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;