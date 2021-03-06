
import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class FormSearch extends Component {
  render() {
    return (
      <>
        <div className="gap"></div>
        <Form onSubmit={(e) => {
          this.props.getCity(e);
          this.props.searchMovie(e);
          this.props.searchWeather(e);}} >
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Control className="mb-2" placeholder="Enter City Name" name='City_Name'/>
            </Col>
            <Col xs="auto">
              <Button  type="submit" variant="dark">Search</Button>
            </Col>
          </Form.Row>
        </Form>
        <div className="gap"></div>
      </>
    )
  }
}
export default FormSearch;