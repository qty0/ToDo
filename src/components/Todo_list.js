import React, {Component} from 'react';
import TodoItem from "./TodoItems"
import PropTypes from 'prop-types';

class Todos extends Component {


    render(){
   return this.props.todosTag.map((x) =>(
    <TodoItem key={x.id} x={x} changed={this.props.changed} delT={this.props.delT} addT={this.props.addT}/>
    ))
    
        
    }

}


//PropTypes
Todos.propTypes = {
    todosTag: PropTypes.array.isRequired
}

export default Todos;
