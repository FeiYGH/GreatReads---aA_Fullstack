import React from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';

class NavBarHome extends React.Component{
    constructor(props){
        super(props);

        this.state={
            searchBookTitle:""
        }

        this.updateForm = this.updateForm.bind(this);
        this.goToBook = this.goToBook.bind(this);
    }

//////////////////////////////////////////////////////////////////////////////////////
    goToBook(bookId){
        // debugger;
        
        (this.props.fetchBook(bookId))
            .then(this.props.history.push(`/books/${bookId}`))
            .then(this.setState({searchBookTitle:""}));
    }

    updateForm(field){
        // debugger;
        //this.grabBookwithThisString() => action should put it in state - books
        return (e) => this.setState({[field]: e.target.value});
    }

    componentDidMount(){
        this.props.fetchBooks();
        //this.props.fetchSearchBarBooks(str)
        // debugger;
    }
///////////////////////////////////////////////////////////////////////////////



    render(){
        //////////////////////////////////////////
        let searchBarBooks;
        let partialWd = this.state.searchBookTitle;

        if(this.props.books && partialWd !== ""){
            searchBarBooks=Object.values(this.props.books).map(book => {
             //    debugger;             
                if(book.title.toLowerCase().startsWith(partialWd.toLowerCase())){
                 //    debugger;
                    return(
                     //    <Link to={`/books/${book.id}`}>
                         <li className="searchBookLI" onClick={()=>this.goToBook(book.id)}>
                            <div className="row searchBookRow" >
                                 <div className="col-2 searchBookPhoto">
                                     <img src={book.photoUrl} alt={book.title}></img>                             
                                 </div>
                                 <div className="col-8 searchBookTitleLi">
                                     <span>{book.title}</span>
                                 </div>
                            </div>
                        </li>
                     //    </Link>
                        
                    )
                }else{
                    return(<div></div>)
                 }
            })
         };
        ////////////////////////////////////////////
        
        const {currentUser, sessionId} = this.props;




 
        if (!sessionId){
            return(
                <div>
                </div>
            )
        }else if(currentUser){
            return(
                <div className="genNavBarLoggedIn">
                    <h1 className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                    <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                    <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1> 
                    <div className="searchBar">
                        <input className="col-4 searchBookInput" type="text" placeholder="Search books" onChange={this.updateForm("searchBookTitle")} /> 
                        
                        <ul className="searchBarUL">
                            {searchBarBooks}
                        </ul>
                    </div>      
                    {/* <input className="col-4 searchBookInput" type="text" placeholder='Search books'/>   */}
                    
                    <h1 className="col-3 navLinks"><Link onClick={this.props.logout}>Log out</Link></h1>                
            {/* <h1 className="col-3 navLinks"><Link >{`Welcome, ${currentUser.username}`}</Link></h1>                 */}
                    
                </div>
            )
        }else{
            return(
                <div>
                </div>
            )
        }
        
    }

};

export default NavBarHome;