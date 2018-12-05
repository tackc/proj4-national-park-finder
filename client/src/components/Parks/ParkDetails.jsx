import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ParkDetails.css';
import axios from 'axios';

class ParkDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPark: null
        }
        this.park = null;
        this.getCurrentParkDetails = this.getCurrentParkDetails.bind(this)
        this.addToFavorites = this.addToFavorites.bind(this)
    }

    
    getCurrentParkDetails() {
        var id = this.props.match.id
        let thePark = this.props.parks.find(park => {
            return park.id === id
        })
        return thePark;
        // console.log(props.parks);
    }
    
    addToFavorites() {
        let parkToAdd = this.park.id
        let currentUser = this.props.user._id
        let obj = {parkToAdd, currentUser}
        axios.post('/api/favoriteparks', obj)
        // hit back end post route to add favorite park
        // send park data which is stored in this.park (as JSON)
        // this.props.user.id
    }
    
    render() {
        this.park = this.getCurrentParkDetails()
        return (
            <div className="ParkDetails">
                <div key={this.park.id} className="OneParkDetails"> 
                    <span><Link to='/parks'> <button>Back</button> </Link></span>
                    <span><button onClick={this.addToFavorites}>Add to Favorites</button></span>
                    <div className="ParkImage">
                        {this.park.images.length ? <img key={this.park.images[0].id} src={this.park.images[0].url} alt=""/> : ""}
                    </div>
    
                    <div>
                        <h3>{this.park.fullName}</h3>
                        <h4>Designation: {this.park.designation}</h4>
                        <br/>
                        <hr/>
                        <h4>Description:</h4>
                        <p>{this.park.description}</p>
                        <hr/>
                        {this.park.directionsInfo ? <div><h4>Directions:</h4><p>{this.park.directionsInfo}</p><hr/></div> : ""}
                        {this.park.weatherInfo ? <div><h4>Weather:</h4><p>{this.park.weatherInfo}</p><hr/></div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default ParkDetails;
