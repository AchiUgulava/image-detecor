import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Response from './routes/Response';
//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '194d225811c04278b0d6377bc90c9380'
});

const particlesOptions = {
    "particles": {
      "color":"#3ca9d1",
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.2,
            "color":"#3ca9d1",
            "width":"1.5"
        },
        "move": {
            "direction": "right",
            "speed": 0.05
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
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
      data:'',
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
  displayData = (data) =>{
  this.setState({data: data})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value})
  }
  onDetectChange = (detect) => {
    this.setState({ detect: detect})
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }
  onRestart = () => {
    this.setState({route:'home'});
    this.setState({data:''})
    this.setState({detect:''})
  }

  onButtonSubmit = () => {
    const { input } = this.state;
    const { detect} = this.state;
    this.setState({ imageUrl: input});
    this.setState({route: 'response'});
    // predict the contents of an image by passing in a url
    detect==="face" ? app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => this.displayBox(this.calculateFaceLocation(response)))
    .catch(error => console.log(error))
    
    :(detect==="food"?
    app.models.predict(Clarifai.FOOD_MODEL, input)
      .then(response => this.displayData(this.determineFood(response)))
      .catch(error => console.log(error))
      :console.log("choose one")
    )
  }
 
  render() {
    const { route,  box, imageUrl, detect,data } = this.state;
    return (
      <div className="App">
       <Particles className="particles"params={particlesOptions}/>
        <div className="content">
          <Navigation  onRouteChange={this.onRouteChange}/>
            {route==="about"
              ?
              <About onRouteChange={this.onRouteChange}/>
              :(route==="home"&&data==''
              ?
              <Home detect={detect} onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange} onDetectChange={this.onDetectChange}  onRouteChange={this.onRouteChange}/>
              :
              <Response box={box} imageUrl={imageUrl} data={data} detect={detect} onRestart={this.onRestart}/>
              )
            }
            <Footer/>
        </div>
    </div>        
    );
  }
}



export default App;
