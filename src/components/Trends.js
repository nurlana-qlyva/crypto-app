import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";


class Trend extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( <>
            <div className='crypto'>
                <div className='container'>
                    <div className='div'>It is Trends page</div>    
                </div>
            </div>
        </> );
    }
}
 
export default Trend;