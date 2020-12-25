import './App.css';
import { SplashScreen } from "./components/SplashScreen";
import { MainScreen } from "./components/MainScreen";
import { useState } from 'react';

function App() {
  const[ visible, setVisible ] = useState(false)

  setTimeout(()=> {
    setVisible(true)
  }, 2000)

  return (
    <div className="App">
      {
        visible === false? <SplashScreen /> : <MainScreen />
      }
    </div>
  );
}

export default App;
