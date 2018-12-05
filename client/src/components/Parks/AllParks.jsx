import React from 'react';
import './AllParks.css';
import {Link} from 'react-router-dom';

const AllParks = (props) => {
    console.log(props)
    return (
        <div className="Parks">
            <h1>National Parks in {props.stateCode}</h1>
            {/* <span><Link to={'/'}> <button>Home</button> </Link></span> */}
            {props.parks.map((park, i) => 
                <Link key={park.id} to={`/parks/${park.id}`}>
                    <div className="OnePark"> 
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
