import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {
    const navbar = {
        navStyle: {
            background: "black",
            color: "white",
            with: "100vw",
            padding: ".5rem 3rem",

        },
        ulStyle: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            listStyle: "none",
            gap: "1rem"
        },
        liStyle: {
            height: "100%",

        },
        LinkStyle: {
            color: "white",
            textDecoration: "none"
        },
        manuBtn: { 
            fontSize: "30px",
            color: "#fff",
            background: "none",
            border: "none",

         }
    }
    return (
        <>
            <nav id="navbar" style={navbar.navStyle}>
                <ul style={navbar.ulStyle}>
                    <li style={{ marginRight: "auto" }}>
                        <h2>Logo</h2>
                    </li>
                    <li style={navbar.liStyle}>
                        <Link style={navbar.LinkStyle} to="/">Home</Link>
                    </li>
                    <li style={navbar.liStyle}>
                        <Link style={navbar.LinkStyle} to="/services">Services</Link>
                    </li>
                    <li style={navbar.liStyle}>
                        <Link style={navbar.LinkStyle} to="/About">About</Link>
                    </li>
                    <li style={navbar.liStyle}>
                        <Link style={navbar.LinkStyle} to="/contact">Contact</Link>
                    </li>
                    <li style={navbar.liStyle}>
                        <Link style={navbar.LinkStyle} to="/product">Products</Link>
                    </li>
                    <li style={navbar.liStyle}>
                        <Link style={navbar.LinkStyle} to="/feature">Feature</Link>
                    </li>

                    <li style={navbar.liStyle}>
                        <Button text="Sign up" />
                    </li>
                    <li>
                        <Button text="Log in" />
                    </li>
                    <li>
                        <button style={navbar.manuBtn} id='manuBtn' 
                        onClick={() => {
                            document.getElementById('sidebar').classList.toggle('active')
                        }}>≡</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar