import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'
import Clarifai from 'clarifai';
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register.js';


const app = new Clarifai.App({
  apiKey: '3e380c5c8f9a4f1ebb28ac1a52aff966'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false,
    }
  }

  onRouteChange = (route) => {
    route === 'home' ?
      this.setState({isSignedIn: true})
      :this.setState({isSignedIn: false})

    this.setState({route: route})
  }

  calculateFaceLocation = (data) => {
    const inputImg = document.getElementById('inputImg');
    const width = inputImg.width;
    const height = inputImg.height;
    const box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const top_border = height * box.top_row;
    const bottom_border = height * (1 - box.bottom_row);
    const left_border = width * box.left_col;
    const right_border = width * (1 - box.right_col);
    const location = {
      top_border: top_border,
      right_border: right_border,
      bottom_border: bottom_border,
      left_border: left_border,
    }
    this.boundingBox(location)
  }

  boundingBox = (location) => {
    this.setState({box: location})
  }
  
  onInput = (event) => {
    this.setState({input: event.target.value});
  }
  
  onDetect = () => {
    this.setState({imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      this.calculateFaceLocation(response);
    })
    .catch(err => console.log(err)
    );
  }

//.outputs[0].data.regions[0].region_info.bounding_box)
  
  
  render() {
    const { imageUrl, box, isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange}/>
        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          {route === 'signIn' ?
            <SignIn onRouteChange = {this.onRouteChange}/>
            : route === 'home' ?
            <div>
              <Rank />
              <ImageLinkForm onInput = {this.onInput} onDetect = {this.onDetect} />
              <FaceRecognition imageUrl = {imageUrl} box = {box} />           
            </div>
            : <Register onRouteChange = {this.onRouteChange} />
          }
        </div>
      </div>
      );
    }
  }
  
  export default App;
  
  //style = {{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'middle', justifyContent: 'center'}}
  //