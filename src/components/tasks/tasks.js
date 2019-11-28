import React, { Component } from 'react';
import './tasks.css';
import * as moment from 'moment';

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
                <td>{moment(row.startsAt).format('LLL')}</td>
                <td>{row.endsAt!=null?moment(row.endsAt).format('LLL'):''}</td>
                <td><button onClick={() => props.removetask(row.id)}>Delete</button></td>
                <td><button style={{visibility:row.endsAt ? 'hidden' : 'visible'}} onClick={() => props.donetask(row)}>Done</button></td>
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
