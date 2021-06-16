
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class LocationIQ extends Component {
    render() {
        return (
            <>
                {this.props.map &&
                    <div>
                        <p>
                            {this.props.display_name}
                        </p>
                        <br />
                        <p>
                            {this.props.lat},{this.props.lon}
                        </p>
                    </div>
                }
                {this.props.show &&
                    <div class="alert alert-danger" role="alert">
                        <strong>EError!</strong> {this.props.errMsg}.
                    </div>

                }
                <br />
                {this.props.map &&
                    <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=13`} alt='' />
                }<div className="gap"></div>
                {this.props.weatherAlert &&
                    <div class="alert alert-danger" role="alert">
                        <strong>EError!</strong> ther is no weather inof for this city.
                    </div>

                }
            </>
        )
    }
}
export default LocationIQ;