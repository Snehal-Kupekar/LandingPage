import { Box, Container } from '@mui/material';
import React from 'react'
import Nav from '../components/nav'
const HomePage = () =>{
  return (
    <>
    <Container >
        <Nav/>
        <Box sx={{ 
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
            This is box
        </Box>
    </Container>
    </>
    
  )
}


export default HomePage;