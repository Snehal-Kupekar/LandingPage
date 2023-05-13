import React from 'react';
import Nav from './components/nav.js'
import { Container } from '@mui/material';
import HomePage from './components/HomePage.js';




// here we write function for updatePost button because this is the only component 
// where both state is present POST as well as FORM which is required 

const App = () => {
  

    return (
          <HomePage/>
    );
}

export default App;