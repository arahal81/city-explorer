import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MovieDetails from './MovieDetails'

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData && (
          <>
            <div className="gap"></div>
            <h1>Movies</h1>
            <Row className="justify-content-md-center">
              {this.props.movieData.map((movie, index) => (
                <Col md="auto">
                  <MovieDetails index={index} title={movie.title} vote_average={movie.vote_average} poster_img={movie.poster_img} overview={movie.overview}/>
                </Col>
              ))}
            </Row>
          </>
        )}
      </>
    )
  
}}
export default Movies;