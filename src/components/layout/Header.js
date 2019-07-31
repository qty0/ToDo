import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Szabó-Tóth Péter</h1>
            <Link to="/" style={linkStyle}> TodoList </Link> |
            <Link to="/about" style={linkStyle} > About Me</Link>
        </header>
    )

}

const linkStyle = {
    color: '#FEFFFF',
    textDecoration: "none",
    alignText: "center",
    fontSize: "20px"
}

const headerStyle = {
    background: "#030126",
    textAlign: "center",
    color: "#fff",
    padding: "10px",
    fontSize: "25px "
};
