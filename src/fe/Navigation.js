import React from "react";



const navLinkStyle = {color:"white"}
const Navigation = () => {
    return (
        <nav className="nav">
            <h3>Building Management</h3>

            <ul className='nav nav-link'>
                <li>
                    <a href="/Home" style={navLinkStyle}> Home</a>
                </li>

                <li>
                    <a href="/buildings" style={navLinkStyle}> Buidling</a>
                </li>
                <li>
                    <a href="/companies" style={navLinkStyle}>Company</a>
                </li>
                <li>
                    <a href="/employees" style={navLinkStyle}>Employee</a>
                </li>
                <li>
                    <a href="/contracts" style={navLinkStyle}>Contract</a>
                </li>
                <li>
                    <a href="/invoices" style={navLinkStyle}>Invoice</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation