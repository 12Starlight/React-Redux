import React from 'react';


class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null 
    }

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      // console.log(location); 
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
            weather: JSON.parse(resp)
          })
        } else {
          console.log('We reached our target server, but it returned an error');
        }
      };

      request.onerror = () => {
        console.log('There was a connection error of some sort');
      }

      request.send(); 
    }); 
  }
  
  
  render() {
    if (!this.state.weather) return null 
    // console.log(this.state.weather); 
    const { name, main: { temp: temperature } } = this.state.weather; 

    const fahrenheit = ((temperature - 273.15) * 1.8) + 32; 

    return(
      <section className="weather_wrapper">
        <div className="weather_container">
          <div><span>City: </span></div>
          <div><span>{ name }</span></div>
        </div>
        <div className="weather_container">
          <div><span>Temperature: </span></div>
          <div><span>{fahrenheit.toFixed(2) + ' °Fahrenheit' }</span></div>
        </div>   
      </section>
    )
  }
}


export default Weather; 