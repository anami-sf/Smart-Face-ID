import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '3e380c5c8f9a4f1ebb28ac1a52aff966'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  
  onInput = (event) => {
    console.log(event.target.value);
  }
  
  onDetect = () => {
    console.log('Click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }
  
  
  render() {
    return (
      <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm 
      onInput = {this.onInput} 
      onDetect = {this.onDetect}
      />
      {/* <FaceRecognition /> */}
      </div>
      );
    }
  }
  
  export default App;
  