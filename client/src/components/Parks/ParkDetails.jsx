import React from 'react';
import './ParkDetails.css';

const ParkDetails = (props) => {
    
    console.log(props.match.params.id)
    let park;
    props.parks.forEach(current => {
        if (current.id === props.match.params.id) {
            park = current
        }
    }) 
    console.log(props.parks);

    // handleFavoriteClick(park) {
    //     this.props.addToFavorites(this.props.park)
    // }

    return (
        <div className="ParkDetails">
            <div key={park.id} className="OneParkDetails"> 
                <div className="ParkImage">
                    {/* <span><button onClick={this.handleFavoriteClick}>♡</button></span> */}
                    <span><button>Add to Favorites</button></span>
                    <img key={park.images[0].id} src={park.images[0].url} alt=""/>
                </div>
                <div>
                    <h3>{park.fullName}</h3>
                    <h5>Designation: {park.designation}</h5>
                    <p>Description: {park.description}</p>
                    <p>Weather: {park.weatherInfo}</p>
                </div>
            </div>
        </div>
    );
}

export default ParkDetails;
