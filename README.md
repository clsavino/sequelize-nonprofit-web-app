#Full Stack Nonprofit Website Proposal
Redesign of an outdated website for a local nonprofit - http://ocimnc.org.
Completely revamped the website and added a backend database for the administrator to manage the Meals on Wheels schedule, Donor events, and Volunteer information via new user authenticated admin pages.
Redesigned website using Agile 2-week Sprint Methodologies.
The team's workflow was managed using the MVP strategy and small user stories to create a Trello board. A Balsamiq Wireframe Mockup was used to design the 10 pages.
The MVC file system was used with MySQL database models, Handlebars views, and sequelize in the controller routes.
Deployed on Heroku - https://nonprofit-web-app.herokuapp.com/

# Screenshots
### Proposed Home Page for the nonprofit

![Alt text](public/assets/img/homeOcim.PNG?raw=true "Proposed Home Page using their photos")

#
### Previous webpage for OCIMNC.org

![Alt text](public/assets/img/prevOcim.PNG?raw=true "Original webpage for OCIMNC.org")

#
### Mobile Responsive Layout

![Alt text](public/assets/img/mobileResp.PNG?raw=true "mobile responsive design image")

#
### Administrator authorization using basic-auth npm package
![Alt text](public/assets/img/authOcim.PNG?raw=true "administrator authorization image")

#
### Administrator page to enter volunteer information into database
![Alt text](public/assets/img/adminOcim.PNG?raw=true "administrator page to enter volunteer info image")

#
### MVC file structure

![Alt text](public/assets/img/files1.PNG?raw=true "MVC file structure used")

#
### 10 pages rendered using Handlebars for templating and code minimization. Handlebars expressions and blocks used to determine Page title, active link, and navigation bar choice

![Alt text](public/assets/img/files2.PNG?raw=true "Handlebars pages")

![Alt text](public/assets/img/active.PNG?raw=true "active link class")
![Alt text](public/assets/img/files5.PNG?raw=true "handlebars blocks for navbar choice")
![Alt text](public/assets/img/router.PNG?raw=true "handlebars variables passed in router")

# Technologies Used
#### The following technologies and tools were used in the development of this app.
* **HTML5**
* **CSS3**
* **JavaScript**
* **jQuery**
* **Bootstrap**
* **MySQL**
* **Node.js**
* **NPM Packages**
      *express
*   **express-handlebars**
*   **body-parser**
*   **sequelize**
*   **basic-auth**
*   **mysql**
*   **cvsdata**
*   **node-exec-promise**

# Built With
* **Sublime Text**
* **[Trello Board](https://trello.com/b/HSVFzknl/nonprofit-web-app)**
* **Balsamiq Mockup**

![Alt text](public/assets/img/trellOcim.PNG?raw=true "handlebars blocks for navbar choice")
![Alt text](public/assets/img/balsamiqOcim.PNG?raw=true "handlebars variables passed in router")

# Getting Started
#### The Heroku link to run is:
#### [nonprofit-web-app.herokuapp.com](https://nonprofit-web-app.herokuapp.com/index)

#### This non-profit website project will remain open source

# Authors
* **Christi Savino - Project manager and lead developer responsible for website architecture, front end design, templating, and server routes.**
* **Suzanna Gaddy - liaison to non-profit organization, content retrieval**
* **Lalit Solanki - database setup, csvdata, migrations**
