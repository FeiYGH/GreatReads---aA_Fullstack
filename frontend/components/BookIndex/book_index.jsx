import React from 'react';
import {Link} from 'react-router-dom'; 

class BookIndex extends React.Component{
    constructor(props){
        super(props);
        //initially setting the state the books
        // this.state = this.props.books;
        // this.state = this.props.fetchBooks(); 
        this.toTop = this.toTop.bind(this);
    }

    toTop(){
        $('html,body').scrollTop(0);
    }

    componentDidMount(){
        this.props.fetchBooks();
        // debugger;
    }

    render(){
        // debugger;
        const {books} = this.props;
        const booksArr = Object.values(books);
        // debugger;

        const bookItems = booksArr.map(book => {
            return(
                <div className="bookCovDiv">
                    {/* <h2>{book.title}</h2> */}
                   
                    <Link to={`/books/${book.id}`}>
                        <img onClick={()=>this.toTop()} className="bookIndexImg" src={book.photoUrl} alt ="book cover photo"/>
                    </Link>
                    <p className="spaceBetween"></p>
                    <Link to={`/books/${book.id}`}>
                        {book.title}
                    </Link>
                </div>
            );
        });

        if(!books){
            return null;
        }else{
            return(
                <div className="allTheBooks">
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