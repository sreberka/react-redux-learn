import React from 'react';
import './DataItem.css';

class DataItem extends React.Component {
    constructor(item) {
        super(item);
        this.item = item.item
    }

    render() {
        return (
            <div className={this.item.completed ? 'complited' : ''}>
                <span>{this.item.id}, </span>
                <span>{this.item.title}, </span>
                <span>{this.item.completed ? 'Complited' : 'Active'}</span>
            </div>
        );
    }
}


export default DataItem;
