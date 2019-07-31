import './App.css';
import Todos from './components/Todo_list';
import AddTodo from './components/AddTodo';
import React, {Component} from 'react';
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import about from './components/pages/about';
import axios from 'axios';

class App extends Component {
  
    state = {
      todo_listarr: []
    };

    //Requesting todos from random site i found
    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=6").then(res => 
      this.setState({todo_listarr: res.data},
        ));
    };
   

    //Toggling the checkbox, !completed
    changed = (id) =>{
      this.setState({
        todo_listarr: this.state.todo_listarr.map( todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
        })
      }); 
    }

    //Deleting from todoarr
    delT = (id) =>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,).then( res =>
      this.setState({
        todo_listarr: [...this.state.todo_listarr.filter(
         todo =>( todo.id !== id)
        )]
      })
      )
    }
    
    
    //Adding to todoarr
    addT = (title) => {
      axios.post("https://jsonplaceholder.typicode.com/todos",{
      title,
      completed: false}).then(
        res => this.setState({
          todo_listarr: [...this.state.todo_listarr, res.data]
        })
      ).catch(console.error(this.state.todo_listarr)
      )};
      
    render() {

    return (
  <Router>
<div className="App">
      <div className="container">
        <Header/>
          <Route exact path="/" render={ props => (
            <React.Fragment>
            <AddTodo  addTodo={this.addT}/>
            <Todos todosTag ={this.state.todo_listarr} changed={this.changed} delT={this.delT}/>
            </React.Fragment>
            )}>
          </Route>
        <Route path="/about" component={about}>
        </Route>
      </div>
    </div>
      
  </Router>
        );
    }
  }


export default App;
