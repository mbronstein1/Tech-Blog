# Tech Blog

## Description
This is the fourteenth challenge in the Northwestern Coding Bootcamp (Module 14). We were expected to use everything we have learned so far to create a full-stack application from scratch, in the form of a tech blog. We used many npm packages including bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, and sequelize. The project was a huge undertaking, and, while I was not able to complete all of the acceptance criteria, I was able to check off a great deal of the LONG criteria, all by myself from scratch. Other students were given some starter code from the instructors, but I did not use that resource. I will continue to work on it as time goes on and will be able to reference it often for future projects.

We were also expected to successfully deploy our application using Heroku (see live link below). Dummy login data is below:

USERNAME: test1

PASSWORD: 12345678

## Link to live page
[Live Link](https://agile-everglades-71744.herokuapp.com/)

## Screenshot
![Webpage Screenshot](./assets/Screen%20Shot%202022-10-11%20at%2011.40.32%20PM.png)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
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
```