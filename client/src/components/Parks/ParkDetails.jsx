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



    return (
        <div className="ParkDetails">
            {/* <div key={park.id} className="OneParkDetails">  */}
                <span><button onClick={this.handleFavoriteClick}>Add to Favorites</button></span>
                <div className="ParkImage">
                    {park.images.length ? <img key={park.images[0].id} src={park.images[0].url} alt=""/> : ""}
                </div>

                <div>
                    <h3>{park.fullName}</h3>
                    <h4>Designation: {park.designation}</h4>
                    <br/>
                    <hr/>
                    <h4>Description:</h4>
                    <p>{park.description}</p>
                    <hr/>
                    {park.directionsInfo ? <div><h4>Directions:</h4><p>{park.directionsInfo}</p><hr/></div> : ""}
                    {park.weatherInfo ? <div><h4>Weather:</h4><p>{park.weatherInfo}</p><hr/></div> : ""}
                </div>
            {/* </div> */}
        </div>
    );
}

export default ParkDetails;
