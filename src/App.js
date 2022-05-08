import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '194d225811c04278b0d6377bc90c9380'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'home',
      detect: '',
      }
    }
  
    determineFood = (data) => {
      return  data.outputs[0].data.concepts[0];
     
    }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value})
    console.log(event.target.value)
  }
  onDetectChange = (detect) => {
    this.setState({ detect: detect})
    console.log(detect)
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    console.log(route)
  }

  onButtonSubmit = () => {
    const { input } = this.state;
    const { detect} = this.state;
    this.setState({ imageUrl: input})
    // predict the contents of an image by passing in a url
    detect==="face" ?
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => this.displayBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error))
    :(detect==="food"?
    app.models.predict(Clarifai.FOOD_MODEL, input)
      .then(response => displayBox(this.determineFood(response)))
      .catch(error => console.log(error))
      :console.log("choose one")
    )
  }
 
  render() {
    const { route,  box, imageUrl, detect } = this.state;
    return (
      <div className="App">
       <Particles className="particles"params={particlesOptions}/>
        <div className="content">
          <Navigation  onRouteChange={this.onRouteChange}/>
            {route==="home"
              ?
              <Home detect={detect} onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange} onDetectChange={this.onDetectChange} box={box} imageUrl={imageUrl} />
            :
            <About/>
            }
            <Footer/>
        </div>
    </div>        
    );
  }
}



export default App;
