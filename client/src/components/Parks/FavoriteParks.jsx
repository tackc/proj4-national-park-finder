import React from 'react';
import './AllParks.css';
import {Link} from 'react-router-dom';

const FavoriteParks = (props) => {
    
    // getFavorites() {
    //     let parkToAdd = this.park.id
    //     let currentUser = this.props.user._id
    //     let obj = {parkToAdd, currentUser}
    //     axios.post('/api/favoriteparks', obj)
    
    return (
        <div className="Parks">
            <h2>Your Favorite Parks:</h2>
            
            {props.parks.map((park, i) => 
                <Link key={park.id} to={`/parks/${park.id}`}>
                    <div className="OnePark"> 
                        <div className="ParkImage">
                            {park.images.length ? <img key={park.images[1].id} src={park.images[1].url} alt=""/> : ""}
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

export default FavoriteParks;
