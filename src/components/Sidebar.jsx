import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Sidebar() {
    const sidebar = {
        sideStyle: {
            padding: "1rem",
            backgroundColor: "#111",
            width: "250px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex:"1000"
        },

        ulStyle: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
        },

        liStyle: {
            fontSize: "1.2rem",
        },

        linkStyle: {
            textDecoration: "none",
            color: "white",
            padding: "0.5rem 0",
            display: "block",
        }
    };

    return (
        <nav id="sidebar" style={sidebar.sideStyle}>
            <ul style={sidebar.ulStyle}>
                <li style={sidebar.liStyle}>
                    <Link style={sidebar.linkStyle} to="/">Home</Link>
                </li>

                <li style={sidebar.liStyle}>
                    <Link style={sidebar.linkStyle} to="/services">Services</Link>
                </li>

                <li style={sidebar.liStyle}>
                    <Link style={sidebar.linkStyle} to="/About">About</Link>
                </li>

                <li style={sidebar.liStyle}>
                    <Link style={sidebar.linkStyle} to="/contact">Contact</Link>
                </li>
                <li style={sidebar.liStyle}>
                    <Link style={sidebar.linkStyle} to="/product">Products</Link>
                </li>
                <li style={sidebar.liStyle}>
                    <Link style={sidebar.linkStyle} to="/feature">Feature</Link>
                </li>

                <li style={sidebar.liStyle}>
                    <Button text="Sign up" />
                    <Button text="Log in" />
                </li>
            </ul>
        </nav>

    )
}

export default Sidebar