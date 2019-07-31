 import React, { Component } from 'react'
 import PropTypes from 'prop-types';

 export class TodoItems extends Component {
     getStyle = () => {
         return{
             background: "#a3a0bc",
             padding: "10px",
             fontSize: "20px",
             boarderBottom: "1px #ccc dotted",
             textDecoration: this.props.x.completed ?
            "line-through" : "none"
         }
     }
     
     changed = () =>{
        console.log(this.props.x.id, this.props.x.completed);
    }

     delT = (id) =>{
        
     }
    

     render() {    
         const {id, title} = this.props.x;
        return (
             <div style = {this.getStyle()}>    
             <p>
            <input type="checkbox" 
             onChange = {this.props.changed.bind(this, id)}/>
            {title}
            <button style={BtnStyle} onClick={this.props.delT.bind(this, id)}>x</button>
             </p>
             </div>
         )
     }
 }

//PropTypes
TodoItems.propTypes = {
    x: PropTypes.object.isRequired
}

const BtnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

export default TodoItems
 