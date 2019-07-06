import React from 'react';
import './App.less';
import Home from './Home'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Home">
          <Home />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
