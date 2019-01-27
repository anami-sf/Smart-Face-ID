import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
