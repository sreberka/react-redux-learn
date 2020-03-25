import React from 'react';
import {connect} from "react-redux";
import BlogItem from '../BlogItem/BlogItem';
import Form from '../Form/Form';
import Filter from '../Filter/Filter'
import './Blog.css';

class Blog extends React.Component {
    render() {
        const authorName = this.props.authorName;
        const blogItemsToShow = this.props.items.filter(item => item.name.match(authorName));
        return (
            <div className="blog">
                <Filter />
                {blogItemsToShow.map((index, i) => (
                     <BlogItem key={i} id={i} name={index.name} text={index.text}/>
                ))}
                <Form />
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

export default connect(putStateToProps, null)(Blog);
