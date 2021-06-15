import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class MovieDetails extends Component {
  render() {
    return (
      <>
        <Card style={{borderColor:'black ',padding:'0.1rem'}} key={this.props.index}>
          <Card.Body>
            {this.props.poster_img &&
              <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${this.props.poster_img}`} style={{ width: '22rem' ,height:'25rem'}}alt={this.props.title}
              />
            }
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
                Vote Average: {this.props.vote_average}
            </Card.Text>
            {this.props.overview &&
              <Card.Text className="cardDescription">
                Overview: {this.props.overview}
              </Card.Text>
            }
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default MovieDetails;