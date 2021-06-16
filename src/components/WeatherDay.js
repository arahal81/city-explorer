
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/';
export class WeatherDay extends React.Component {
    render() {
        return (

            <Card style={{ width: '20rem' }} key={this.props.key}>
                <Card.Body>
                    <Card.Title className='grey darken-4'>{this.props.date}</Card.Title>

                    <Card.Text>
                            Description: {this.props.description}
            </Card.Text>

                </Card.Body>
            </Card>

        )
    }
}
export default WeatherDay;