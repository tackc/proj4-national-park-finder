# About National Parks Finder
I created the National Parks Finder App to help users find parks to visit in the destination of their choosing. Users can save their favorites as well as parks they have visited. The app was build with mobile-first in mind. Media queries were used to ensure the app is aesthetically pleasing on larger displays.

[View the app on Heroku!](https://nationalparksfinder.herokuapp.com/)

---

### Technologies Used
* Express
* React
* React Router
* Javascript
* CSS

---

### Project Status
[View the Trello Board](https://trello.com/b/GMDSY876) <br/>
<img src="https://i.imgur.com/4ST0FfZ.png" alt="screen shot of the project trello board"
	title="Trello Board" width="750" />

---

### User Stories
As a user, I would like to:
* Search for national parks by location
  * View details for parks
    * Park Name
    * Operating Hours
    * Contact Information
    * Visitors Centers
    * Addresses
    * Designation
    * Description
    * Entrance Fees
    * Images

* Add parks to "favoriteparks" list 

---

### ERD
<img src="https://i.imgur.com/MX9niak.png" alt="screen shot entity relation diagram"
	title="Entity Relation Diagram" width="750" />

---

### Wireframe
<img src="https://i.imgur.com/3daV702.png" alt="screen shot of home page"
	title="Home Page" width="250" />
<img src="https://i.imgur.com/I8y7enI.png" alt="screen shot of parks for selected state page"
	title="Parks Page" width="250" />
<img src="https://i.imgur.com/dy0iYnJ.png" alt="screen shot of park details page"
	title="Park Details" width="250" />

---

### Unsolved Problems
* You can add a park to "favoriteparks" multiple times
* There is not currently a way to view favorite parks
* Removing item from favorites not currently possible

---

### Future Enhancements
* Save parks I've visited (Model - related to User (many to many))
* Remove Parks from visited list
* Save a list of parks I'd like to visit (Model - related to User)
* Add / update comments for a park (Model - many to many) 