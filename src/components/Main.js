import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      show: false,
      errMsg: 'Please make sure you enter the city name correctly',
      map: false
    };
  }

  getCity = async (event) => {

    try {
      let C_Name = event.target.City_Name.value
      event.preventDefault();
      console.log(process.env.REACT_APP_LOCATION_IQ_KEY);
      const url = `${process.env.REACT_APP_LOCATION_IQ_URL}?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${C_Name}&format=json`;
      const req = await axios.get(url);

      this.setState({
        data: req.data[0],
        map: true,
        show: false,

      });

    } catch (error) {
      this.setState({
        show: true,
        map: false

      });
    }
  }

  updateCityName = async (event) => {
    event.preventDefault();
    this.setState({ cityName: event.target.value });
  }


  render() {
    return (
      <div >
     
    
        <h1>City Explorer</h1>
        <Form onSubmit={this.getCity}>
          <Form.Group  >
            <Form.Control type="search" placeholder="Enter City Name" name='City_Name' />
          </Form.Group>
          <Button type="submit">
            Search
              </Button>

        </Form>
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
        }

      </div>
    )
  }
}
export default Main;