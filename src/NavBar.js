import React from 'react'
import { Link } from 'react-router-dom';
import './style/nav-bar.css';


function NavBar() {
    return (
        <div className="navlist">
            <ul>
                <li>
                    <Link to="/">Data Table</Link>
                </li>
                <li>
                    <Link to="/Btc2rupiah">BTC to IDR</Link>
                </li>
                <li>
                    <Link to="/Rupiah2Btc">IDR to BTC</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
