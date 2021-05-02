import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import './App.css';

function App() {
  // Create storage for gallery list
  let [galleryList, setGalleryList] = useState([]);

  // On page load, get gallery list
  useEffect(() => {
    getGalleryList();
  }, [])

  // Get gallery list via axios
  const getGalleryList = () => {
      Axios.get('/gallery')
        .then((response) => {
          console.log(response.data);
          setGalleryList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  // Display to DOM using component props
    return (
      <div className="App">
        <Header />
        <GalleryList galleryList={galleryList}
                  getGalleryList={getGalleryList}/>
      </div>
    );
}

export default App;
