import Axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx';

import './App.css';

function App() {
  // Create storage for gallery list

  // On page load, get gallery list

  // Get gallery list via axios
  const getGalleryList = () => {
      axios.get('/gallery')
        .then((response) => {
          console.log(response.data);
          //setGalleryList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }


    return (
      <div className="App">
        <Header />
        
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/sam.jpeg" width="300"/>
        <img src="images/Zion.jpg" width="300"/>
      </div>
    );
}

export default App;
