import React from 'react';
import {connect} from "react-redux";
import BlogItem from '../BlogItem/BlogItem';
import Form from '../Form/Form';
import Filter from '../Filter/Filter'
import './Blog.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Data from '../Data/Data'

class Blog extends React.Component {
    render() {
        const authorName = this.props.authorName;
        const blogItemsToShow = this.props.items.filter(item => item.name.match(authorName));
        return (
            <div className="blog">
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <a href='/data'>Go to data page</a>
                            <Filter />
                            {blogItemsToShow.map((index, i) => (
                                <BlogItem key={i} id={i} name={index.name} text={index.text}/>
                            ))}
                            <Form />
                        </Route>
                        <Route exact path='/data' component={Data} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const putStateToProps = (state) => {
    return {
        items: state.item.items,
        authorName: state.item.authorName
    }
}

export default connect(putStateToProps, null)(Blog);
