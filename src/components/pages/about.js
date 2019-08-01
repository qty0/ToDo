import React, {Component} from 'react';

export class about extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={titleStyle}>About Me</h1>
            <p>hi there</p>
            </React.Fragment>
        )
    }
}
const titleStyle = {
    float: 'top',
    textDecoration:'none',
    fontSize: "25px",
    color: "black"
}
const contentStyle = {
    background: "#a3a0bc",
    float: 'left',
    textDecoration: 'none',
    textAlign: 'left',
    fontSize: "20px",
}



export default about

