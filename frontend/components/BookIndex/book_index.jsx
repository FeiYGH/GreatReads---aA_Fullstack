import React from 'react';
import {Link} from 'react-router-dom'; 

class BookIndex extends React.Component{
    constructor(props){
        super(props);
        //initially setting the state the books
        // this.state = this.props.books;
        // this.state = this.props.fetchBooks(); 
    }

    componentDidMount(){
        this.props.fetchBooks();
        debugger;
    }

    render(){
        debugger;
        const {books} = this.props;
        const booksArr = Object.values(books);
        debugger;

        const bookItems = booksArr.map(book => {
            return(
                <div>
                    {/* <h2>{book.title}</h2> */}
                    <Link to={`/books/${book.id}`}>
                        <img className="bookIndexImg" src={book.photoUrl} alt ="book cover photo"/>
                    </Link>
                </div>
            );
        });

        if(!books){
            return null;
        }else{
            return(
                <div>
                    <h1 className="booksIndexH1">
                        All Books
                    </h1>
                    <div className="flexBooks">
                        {bookItems}
                    </div>
                </div>
                
            );
        };
    }
}

export default BookIndex;