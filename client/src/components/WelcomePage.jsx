import React from 'react';
import './WelcomePage.css';

const WelcomePage = (props) => (
        <div className="WelcomePage">
            <h3>Welcome to the <br/> National Parks Finder</h3>
            <p>Founded in 1916, the National Parks Service (NPS) has over 450 protected natural, historical, recreational, and cultural areas. The purpose of the NPS "is to conserve the scenery and the natural and historic objects and wild life therein and to provide for the enjoyment of the same in such manner and by such means as will leave them unimpaired for the enjoyment of future generations."<br/> This app allows you to search for parks by state. You can save parks you’ve already visited and create a wishlist of parks you’d like to visit!</p>
            <div className="AuthButtons">
                <button>SIGN UP</button>
                <button>LOG IN</button>
            </div>
        </div>
    )

export default WelcomePage;
