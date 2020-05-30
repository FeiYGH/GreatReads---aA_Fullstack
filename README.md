# GreatReads---aA_Fullstack ReadMe
## Full Stack Project at App Academy -- GreatReads, clone of GoodReads
## Dec 2019 App Academy Cohort

[Live Site](https://greatreads2020.herokuapp.com/#/)

GreatReads is a clone of GoodReads, where users can view different books, read reviews, write and edit their own reviews, and make comments on the reviews. 
When signed up and logged in, users can also review the books and comment on the reviews. It is not finished yet. 

![GreatReads Home Page](https://github.com/FeiYGH/GreatReads---aA_Fullstack/blob/master/GreatReads_ReadMe_Images/Screen%20Shot%202020-03-16%20at%2010.49.00%20PM.png)

## Background info:
* Ruby version: ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin18], this project uses React/Redux for frontend
* System dependencies: using AWS for most picture storage
* Configuration:
* Database creation: db and backend using Ruby on Rails 
* Database initialization: 
* How to run the test suite: When downloading, in terminal
    * "npm install" to install dependencies
    * "bundle install" to install libraries
    * "rails db:seed" to seed the database
    * "npm start" to start webpack
    * "rails server" to start running server on localhost:3000
    *  if no errors, can see the test version on http://localhost:3000

## Built With
* Javascript
* React
* Redux
* Ruby on Rails

## Features
* User accounts
* All books page (index page)
* Book show page
* Book search function
* Book ratings
* Book reviews
* Book comments
* User profile page 
* AWS image hosting
* Mediaqueries 

### User Authorization
* User can create and sign up on the app
* Error handling and validations with log in and sign up 
* Users who are logged in can 
   1. rate and review books
   2. make coments on reviews
   3. choose status for books.
   4. update their profile information, including uploading profile picture
   5. view their mybooks page, which shows all books that user has selected a status for
   
![Login Signup Gif](https://github.com/FeiYGH/GreatReads---aA_Fullstack/blob/master/GreatReads_ReadMe_Images/Login_Screen_Recording.mov)
