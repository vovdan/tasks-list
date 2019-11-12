import React, { Component } from 'react';
import './tasks.css';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Starts</th>
                <th>Ends</th>
                <th>Delete</th>
                <th>Done</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.taskData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.start}</td>
                <td>{row.end}</td>
                <td><button onClick={() => props.removetask(index)}>Delete</button></td>
                <td><button style={{visibility:row.done}} onClick={() => props.donetask(index)}>Done</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { taskData, removetask, donetask } = this.props;

        return (
            <table className='fixed'>
                <TableHeader />
                <TableBody taskData={taskData} removetask={removetask} donetask={donetask} />
            </table>
        );
    }
}

export default Table;
