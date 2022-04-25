import React, { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Heading.js';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
