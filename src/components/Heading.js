import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../App.css'
import Home from './Home.js';
import Crypto from './Crypto';
import Trend from './Trends';



class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <>

                <div className='crypto'>
                    <div className='container'>
                        <div className='flex'>
                            <div>Crypto Hunter</div>
                            <nav id='link'>
                                <Link to="/">Home</Link>
                                <Link to="/crypto">Crypto</Link>
                                <Link to="/trends">Trends</Link>
                            </nav>
                        </div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="crypto" element={<Crypto />} />
                            <Route path="trends" element={<Trend />} />
                        </Routes>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Header;