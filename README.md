# MVC-tech-blog


## Description
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions. This was made in Javascript 


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Questions](#Questions)



## Installation
First clone the repository then run the following commands to install dependency packages:

npm i
npm install express-handlebars
npm i sequelize
npm i dotenv
npm i bcrypt
npm i express-session
npm i connect-session-sequelize

Run the following command to begin the app:

node server.js



## Usage

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

First clone the repository then run the following commands to install dependency packages:
"dependencies": 
    "bcrypt": "^5.1.0",
    "connect-session-sequelize": "^7.1.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "mysql2": "^2.3.3",
    "sequelize": "^6.28.0"
 Run the following command to begin the app:

node server.js
 To see the project  you can view it on heroku deplored site : https://dashboard.heroku.com/apps/thawing-gorge-64914



## License
There is no license on this project  


## Contribute
If  you would like to contribute to this project, please go to my GitHub at : https://github.com/Sydneychick2748/MVC-tech-blog


## Questions
If you have any questions about this project, please contact me at anabennett77@gmail.com 


