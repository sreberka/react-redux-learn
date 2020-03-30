import React from 'react';
import './Form.css'
import {bindActionCreators} from "redux";
import {addNewItem, showAlert} from "../../store/actions";
import {connect} from "react-redux";
import Alert from '../Alert/Alert'

class Form extends React.Component {
    render() {
        const {addNewItem, alert, showAlert} = this.props;
        let name = '';
        let text = '';
        return (
          <form onSubmit={(e)=>{
              e.preventDefault();
              if(name.value.length > 0 && text.value.length > 0) {
                  addNewItem({name: name.value,text: text.value})
                  name.value = '';
                  text.value = ''
              }
              else {
                  showAlert('Cannot be empty')
              }

          }}>
              {alert && <Alert text={alert} />}
              <input type="text" placeholder="Name" ref={node => name = node} />
              <textarea placeholder="Text" ref={node => text = node} rows="6" />
              <button type="submit">Add</button>
          </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.item.alert
    }
}

const putActionsToProps = (dispatch) => {
    return {
        addNewItem: bindActionCreators(addNewItem, dispatch),
        showAlert: bindActionCreators(showAlert, dispatch)
    }
}

export default connect(mapStateToProps, putActionsToProps)(Form);

