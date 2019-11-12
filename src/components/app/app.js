import React, { Component } from 'react';
import Table from '../tasks/tasks';
import Form from '../form/form';

class App extends Component {
    state = {
        tasks: []
    };

    donetask = index => {
        const { tasks } = this.state;
        this.setState({
            tasks: tasks.filter((task, i) => {
                if (i !== index) {
                    return true
                }
                if (i === index) {
                    var utc = new Date().toLocaleString();
                    task.end = utc;
                    task.done='hidden';
                    console.log(task.done);
                    return true
                }
            })
        })
    }
    removetask = index => {
        const { tasks } = this.state;

        this.setState({
            tasks: tasks.filter((task, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task] });

    }

    render() {
        const { tasks } = this.state;

        return (
            <div className="container">
                <h1 style={{textAlign: "center"}}>Tasks list</h1>

                <Table
                    taskData={tasks}
                    removetask={this.removetask}
                    donetask={this.donetask}
                />
                <h3 style={{marginLeft: "5%"}}>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;