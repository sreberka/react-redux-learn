import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import './Data.css';
import {fetchData} from '../../store/actions';
import Spinner from '../Spinner/Spinner'
import DataItem from "../DataItem/DataItem";
import Alert from '../Alert/Alert'

class Data extends React.Component {
    render() {
        const data = this.props.data;
        const fetchData = this.props.fetchData;
        const dataLoading = this.props.dataLoading;
        const alert = this.props.alert;
        return (
            <div className="data">
                <a href='/'>Go to home page</a>
                <div>
                    <button onClick={fetchData}>Get the Data</button>
                </div>
                {alert && <Alert text={alert} />}
                {data.length ?
                    data.map((item,i) => (
                        <DataItem item={item} key={i} />
                    )) : dataLoading && <Spinner />
                }
            </div>
        );
    }
}

const putStateToProps = (state) => {
    return {
        data: state.data.data,
        dataLoading: state.data.dataLoading,
        alert: state.data.alert
    }
}

const putActionsToProps = (dispatch) => {
    return {
        fetchData: bindActionCreators(fetchData, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Data);
