import React from 'react';
import './WelcomePage.css';
import RandomPark from './Parks/RandomPark';
import {Link} from 'react-router-dom';
import SearchForParks from './Parks/SearchForParks';

const WelcomePage = (props) => {
    var content;
    console.log("props of welcome:", props)
    if (props.user) {
        content = <p>Hello {props.user.name}</p>
    } else {
        content = (
            <div>
                <Link to="/signup"><button>SIGN UP</button></Link>
                <Link to="/login"><button>LOG IN</button></Link>
            </div>
        )
    }

    return (
        <div className="WelcomePage">
            <h3>Welcome to the <br/> National Parks Finder</h3>
            <p>Founded in 1916, the National Parks Service (NPS) has over 450 protected natural, historical, recreational, and cultural areas. The purpose of the NPS "is to conserve the scenery and the natural and historic objects and wild life therein and to provide for the enjoyment of the same in such manner and by such means as will leave them unimpaired for the enjoyment of future generations."<br/> This app allows you to search for parks by state. You can save parks you’ve already visited and create a wishlist of parks you’d like to visit!</p>
            <div className="AuthButtons">
                {content}
            </div>
            <SearchForParks liftStateCodeToState={props.liftStateCodeToState}/>
            <RandomPark />
        </div>
    )
}

export default WelcomePage;
