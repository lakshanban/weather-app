import React from 'react';
import { Container, CircularProgress } from '@material-ui/core'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export const SplashScreen = () => {

  return <div>
    <div style={{ backgroundColor: "#568EC9", width: '100%', height: '100vh', color: 'white' }}>
      <Container style={{ paddingTop: '30vh' }}>
        <div>
          <h1>Weather app</h1>
          <WbSunnyIcon fontSize="large" /> <br></br>
          <CircularProgress style={{color:'white', blockSize:'100px'}}/>
          <p style={{ fontSize: '10px', marginTop: '30px' }}>Powered by Open Weather Map</p>
        </div>
      </Container>
    </div>
  </div>
}