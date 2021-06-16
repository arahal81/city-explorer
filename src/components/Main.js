import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Weather  from './Weather';
import  FormS  from './FormS';
import Movies from './Movies';
class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      show: false,
      errMsg: 'Please make sure you enter the city name correctly',
      map: false,
      weatherData: [] ,
      movieData:'',
      showWeather:false,
      City_Name:'',
      weatherAlert:false,
      showMovie:false,
      movieAlert:false

    };
  }

  getCity = async (event) => {
    event.preventDefault();
    try {
      let C_Name = event.target.City_Name.value
      
    
      const url = `${process.env.REACT_APP_LOCATION_IQ_URL}?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${C_Name}&format=json`;
      const req = await axios.get(url);

           
      this.setState({
        cityName:C_Name,
        data: req.data[0],
        map: true,
        show: false,

      });
    
    } catch (error) {
      
      this.setState({
        show: true,
        map: false,
      });
    }
  }

  searchWeather = async (event) => {
    event.preventDefault();
    try {
    const myApi = await axios.get(`${process.env.REACT_APP_LOCATION_MY_API}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}&S_Q=${event.target.City_Name.value}`);
   
    this.setState({
      weatherData: myApi.data,
      showWeather:true ,
      weatherAlert:false
    });

  } catch (error) {

    this.setState({
      showWeather:false ,
      weatherData:'',
      weatherAlert:true

    });
  }
}
searchMovie = async (event) => {
  event.preventDefault();
  try {
  const myApi = await axios.get(`${process.env.REACT_APP_LOCATION_MY_API}/movie?S_Q=${event.target.City_Name.value}`);
 console.log(myApi);
  this.setState({
    movieData: myApi.data,
    showMovie:true ,
    movieAlert:false
  });

} catch (error) {

  this.setState({
    showMovie:false ,
    movieData:'',
    movieAlert:true

  });
}
}
  updateCityName = async (event) => {
    event.preventDefault();
    this.setState({ cityName: event.target.value });
  }


  render() {
    return (
      <main className='Contaner'>
      <div className="section">
     
    
        <h1>City Explorer</h1>
        <FormS getCity={this.getCity} searchMovie={this.searchMovie}searchWeather={this.searchWeather}/>
        {this.state.map &&
        <div>
        <p>
          {this.state.data.display_name}
        </p>
        <br />
        <p>
          {this.state.data.lat},{this.state.data.lon}
        </p>
        </div>
        }

        {this.state.show &&
            <div class="alert alert-danger" role="alert">
              <strong>EError!</strong> {this.state.errMsg}.
            </div>

        }
        <br />
        {this.state.map &&
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.data.lat},${this.state.data.lon}&zoom=13`} alt='' />
        }<div className="gap"></div>
                {this.state.weatherAlert &&
            <div class="alert alert-danger" role="alert">
              <strong>EError!</strong> ther is no weather inof for this city.
            </div>

        }
 
        {this.state.showWeather &&
      <Weather weatherInfo={this.state.weatherData}/>}

        {this.state.movieAlert &&
            <div class="alert alert-danger" role="alert">
              <strong>EError!</strong> ther is no movies releated with this city.
            </div>

        }
       {this.state.showMovie &&
      <Movies movieData={this.state.movieData}/>}
         </div>
        </main>
    )
  }
}
export default Main;