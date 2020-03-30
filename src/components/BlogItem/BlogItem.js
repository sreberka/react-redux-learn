import React from 'react';
import './BlogItem.css'
import {bindActionCreators} from "redux";
import {deleteItem} from "../../store/actions";
import {connect} from "react-redux";

class BlogItem extends React.Component {
    render() {
        const {deleteItem} = this.props;
        return (
            <div className="item" id={this.props.id}>
                <p className="author">{this.props.name}</p>
                <p className="author-text">{this.props.text}</p>
                <button onClick={() => deleteItem(this.props.id)}>x</button>
            </div>
        );
    }
}

const putActionsToProps = (dispatch) => {
    return {
        deleteItem: bindActionCreators(deleteItem, dispatch),
    }
}

export default connect(null, putActionsToProps)(BlogItem);
