import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""})
        console.log("Submitted");
        
    }
  
    onChange = (e) => {
        this.setState({title: e.target.value})
        console.log("onChange works");
            
    };
    
    render() { 
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input type="text"
                title="title"
                placeholder="Add Todo ..."
                style={{flex: "10", padding: "5px", fontSize:"20px"}}
                value={this.state.title}
                onChange={this.onChange}
                ></input>
                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex:"1", fontSize:"20px", background: "#17252A"}}
                />
            </form>
        )
    }
}

export default AddTodo
