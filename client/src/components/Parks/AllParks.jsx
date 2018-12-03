import React from 'react';
import './AllParks.css';

const AllParks = (props) => {
    return (
        <div className="Parks">
            {/* <h2>Parks in {props.state.stateCode}</h2> */}
            {props.parks.map((park) => 
                <div key={park.id} className="OnePark"> 
                    <div className="ParkImage">{/*park.images[0]*/}</div>
                    <div>
                        <h3>{park.fullName}</h3>
                        <h5>{park.designation}</h5>
                    </div>
                </div> )}
        </div>
    );
}

export default AllParks;
