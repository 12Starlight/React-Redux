import React from 'react';


class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: ""
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location); 
      let lattitude = location.coords.latitude;
      let longitude = location.coords.longitude; 
      let api = 'APPID=4d51480b8ea6df785981affcb63ac815';
      
      let request = new XMLHttpRequest();
      request.open(
        "GET",
        "http://api.openweathermap.org/data/2.5/weather?" + 
        `lat=${lattitude}&`  + 
        `lon=${longitude}&` +
        api, 
        true
      );

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          let resp = request.response;
          this.setState({
            weather: resp 
          })
        } else {
          // We reached our target server, but it returned an error
        }
      };

      request.onerror = () => {
        // There was a connection error of some sort
      }

      request.send(); 
    }); 
  }
  
  
  render() {
    console.log(this.state.weather);

    return(
      <div>{ this.state.weather }</div>
    )
  }
}


export default Weather; 