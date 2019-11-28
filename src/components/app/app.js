import React, { Component } from 'react';
import Table from '../tasks/tasks';
import Form from '../form/form';
import axios from 'axios';
import * as moment from 'moment';
import { AuthContext, useAuth } from "../../context/auth";

class App extends Component {
    state = {
        tasks: []
    };
    static contextType = AuthContext;
    token = localStorage.getItem('tokens');
    headers = {
        'auth': this.context.authTokens
    };
    
    logOut() {
        
    }

    componentWillMount() {
        this.getAll();
    }

    getAll = () => {
        console.log(this.context.authTokens);
        axios.get("http://localhost:8080/task",
            { headers: this.headers }).then(result => {
                console.log(this.context.authTokens);
                if (result.status === 200) {
                    console.log(2);
                    this.setState({ tasks: result.data });
                    console.log("Success");
                    return result.data
                } else {
                    console.log(3)

                    console.log(result);
                }
            }).catch(e => {
                console.log(4)

                console.log("Catch er");
            });
    }

    donetask = row => {
        const headers = {
            'Content-Type': 'application/json',
            'auth': this.context.authTokens
        }
        var utc = moment().format('YYYY-MM-DD HH:mm:ss');
        axios.patch("http://localhost:8080/task/" + row.id, {
            "name": row.name,
            "endsAt": utc
        },
            { headers: headers }).then(result => {
                if (result.status === 204) {
                    console.log(2);
                    this.getAll();
                    console.log("Success");
                } else {
                    console.log(3)

                    console.log(result);
                }
            }).catch(e => {
                console.log(4)

                console.log("Catch er");
            });
        return true
    }

    removetask = index => {
        axios.delete("http://localhost:8080/task/" + index,
            { headers: this.headers }).then(result => {
                if (result.status === 204) {
                    console.log(2);
                    this.getAll();
                    console.log("Success");
                } else {
                    console.log(3)

                    console.log(result);
                }
            }).catch(e => {
                console.log(4)

                console.log("Catch er");
            });
    }

    handleSubmit = task => {
        const headers = {
            'Content-Type': 'application/json',
            'auth': this.context.authTokens
        }
        axios.post("http://localhost:8080/task", task,
            { headers: headers }).then(result => {
                if (result.status === 201) {
                    console.log(2)
                    this.getAll();
                    console.log("Success");
                } else {
                    console.log(3)

                    console.log(result);
                }
            }).catch(e => {
                console.log(4)

                console.log("Catch er");
            });
    }


    render() {
        const { tasks } = this.state;

        return (
            <div className="container">
                <div style={{ textAlign: "end" }}>
                <button onClick={this.logOut}>Log out</button>
                </div>
                <h1 style={{ textAlign: "center" }}>Tasks list</h1>
                <Table
                    taskData={tasks}
                    removetask={this.removetask}
                    donetask={this.donetask}
                />
                <h3 style={{ marginLeft: "5%" }}>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;