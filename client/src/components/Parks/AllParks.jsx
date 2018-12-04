import React from 'react';
import './AllParks.css';
import {Link} from 'react-router-dom';

const AllParks = (props) => {
    
    return (
        <div className="Parks">
            {/* <h2>Parks in {props.state.stateCode}</h2> */}
            {props.parks.map((park, i) => 
                <Link to={`/parks/${park.id}`}>
                    <div key={park.id} className="OnePark"> 
                        <div className="ParkImage">
                            {park.images.length ? <img key={park.images[0].id} src={park.images[0].url} alt=""/> : ""}
                        </div>
                        <div>
                            <h3>{park.name}</h3>
                            <h5>{park.designation}</h5>
                        </div>
                    </div> 
                </Link>
            )}
        </div>
    );
}

export default AllParks;
