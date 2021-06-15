
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap/';
import WeatherCards from './WeatherCards';
export class Weather extends React.Component {
    render() {
        return (
           
                    <>
                        <div className="gap"></div>
                        <h1>Weather for 16 days</h1>
                        <Row className="justify-content-md-center">
                        {this.props.weatherInfo.map((data,i) => (
                            <Col md="auto">
                            <WeatherCards
                              key={i}
                              date={data.date}
                              description={data.description}
                            />
                          </Col>
                        ))}
                      </Row>
                      <div className="gap"></div>
                    </>
                  )
                }
              }
              
export default Weather;