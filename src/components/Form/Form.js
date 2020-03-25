import React from 'react';
import './Form.css'
import {bindActionCreators} from "redux";
import {addNewItem} from "../../store/actions";
import {connect} from "react-redux";

class Form extends React.Component {
    render() {
        const {addNewItem} = this.props;
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

          }}>
              <input type="text" placeholder="Name" ref={node => name = node} />
              <textarea placeholder="Text" ref={node => text = node} rows="6" />
              <button type="submit">Add</button>
          </form>
        );
    }
}

const putActionsToProps = (dispatch) => {
    return {
        addNewItem: bindActionCreators(addNewItem, dispatch),
    }
}

export default connect(null, putActionsToProps)(Form);

