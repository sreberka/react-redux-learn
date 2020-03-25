import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import './Filter.css';
import {filterItem} from "../../store/actions"

class Filter extends React.Component {
    render() {
        const {filterItem} = this.props;
        const authorName = this.props.authorName;
        const blogItems = this.props.items;
        return (
            <div className="filter">
                <select value={authorName} onChange={(event) => {
                    filterItem(event.target.value)
                }}>
                    <option value=''>Choose the author...</option>
                    {blogItems.map((index, i) => (
                        <option key={i}>{index.name}</option>
                    ))}
                </select>
                <button onClick={() => filterItem('')}>Show all</button>
            </div>
        );
    }
}

const putStateToProps = (state) => {
    return {
        items: state.items,
        authorName: state.authorName
    }
}

const putActionsToProps = (dispatch) => {
    return {
        filterItem: bindActionCreators(filterItem, dispatch),
    }
}

export default connect(putStateToProps, putActionsToProps)(Filter);
