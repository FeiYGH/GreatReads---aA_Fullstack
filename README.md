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
* Database creation: db and backend using Ruby on Rails 
* Database initialization: 

## Run the test suite: 
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
* Since both login and signup are both on the same page, to keep errors from rendering twice, I passed in a key. Errors were passed in through a key of either login or signup. 
   
![Login Signup Gif](https://github.com/FeiYGH/GreatReads---aA_Fullstack/blob/master/GreatReads_ReadMe_Images/loginSignupBiggestSize.gif)

```javascript
   handleLogIn(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.login(this.state);
    }

    handleSignUp(e){
        e.preventDefault();
        e.stopPropagation(); //it prevents the bubbling up. 

        this.props.signup({
            username: this.state.username2,
            email: this.state.email2,
            password:this.state.password2
        });
    }
```

### Book show page
* Shows the book cover and information
* Shows the ratings statistics for the book, including average ratings, total ratings, and total reviews
* When logged in, shows user's activity for that book, including user's rating and review for that book
* Shows the reviews for the book
* Shows the comments for each book

![Book Show Page](https://github.com/FeiYGH/GreatReads---aA_Fullstack/blob/master/GreatReads_ReadMe_Images/BookShowPage.gif)

```javascript
<div className="bookDesc col-7">
                            <h1>{book.title}</h1>
                            <h2>by {book.author}</h2>
                            <div className="ratingsInfo">
                                <ReviewStatsContainer
                                    book={book}
                                    bookId={this.props.bookId}
                                    book={this.props.book}
                                />
                            </div>
                            <h3>{book.description}</h3>
                            
                            <h3>Number of Pages: {book.num_pages}</h3>
                            <h3>ISBN: {book.isbn}</h3>
                            <h3>Published {book.pub_date} by {book.publisher}</h3>
                            
                        </div>  
```



### Book search function
* User can type in the searchbar and books will populate based upon the first letter in title of the book
* Books are filtered through based upon letters that match in the title

## Book ratings
* Ratings are shown in three places on the book show page, on the create and edit review page
* Ratings component is a child component of the book class as well as the my_review class. In order to update, I pass a handler function from parent to different child classes, so that when rating was changed, it would trigger a re-render in the parent component

## Book reviews
* User can write a review or edit review. 
* I separated rating from review bc I felt user should be able to rate without reviewing
* However, when rating is created, a review is created at the same time 
* The reviews with no body are not displayed in the reviews section
* The resources for reviews are nested under books so that we could the book ID when creating the review

## Book comments
* User can write comments on reviews
* CreateComment route is nested under resources

## User profile page
* User can update their profile
* Changes from the form are stored in local state based upon eventlistener
* User can preview their profile picture as well as upload their profile picture using AWS



## 
