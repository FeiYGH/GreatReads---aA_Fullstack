import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { render } from 'react-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchBookTitle:"",
            profileDropDown: false
        }

        this.updateForm = this.updateForm.bind(this);
        this.goToBook = this.goToBook.bind(this);
        this.toggleProfileDropDown = this.toggleProfileDropDown.bind(this);

    }

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

    toggleProfileDropDown(){
        if(this.state.profileDropDown===false){
            this.setState({profileDropDown:true})
        }else{
            this.setState({profileDropDown:false})

        }
    }

    componentDidMount(){
        this.props.fetchBooks();
        //this.props.fetchSearchBarBooks(str)
        // debugger;
    }

    render(){
        let searchBarBooks;
        let partialWd = this.state.searchBookTitle;
        // debugger;

        if(this.props.books && partialWd !== ""){
           searchBarBooks=Object.values(this.props.books).map(book => {   
                if(book.title.toLowerCase().includes(partialWd.toLowerCase())){
                    return(
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
                    )
                }else{
                    return(<div></div>)
                }

            //FUNCTIONAL, THIS BREAKS THE TITLE INTO WORDS ARRAY and checks if any of the words starts
            //with the search bar word
            //    let bookWordsArr = book.title.split(" ");
            //    let bookFoundLi;
            //    for(let i = 0; i < bookWordsArr.length; i++){
            //         if(bookWordsArr[i].toLowerCase().startsWith(partialWd.toLowerCase())){
            //             bookFoundLi = 
            //                 (<li className="searchBookLI" onClick={()=>this.goToBook(book.id)}>
            //                 <div className="row searchBookRow" >
            //                         <div className="col-2 searchBookPhoto">
            //                             <img src={book.photoUrl} alt={book.title}></img>                             
            //                         </div>
            //                         <div className="col-8 searchBookTitleLi">
            //                             <span>{book.title}</span>
            //                         </div>
            //                 </div>
            //             </li>)
            //             //</Link>
            //             break;
            //        }   
            //     }
            //     if(bookFoundLi){
            //         return bookFoundLi;
            //     }else{
            //         return(<div></div>)
            //     }
                   
               })
            }    
           
            
        let profileDropDown;
        if(this.props.currentUser){
            if(this.state.profileDropDown===true){
                profileDropDown=(
                    <ul className="profileDropDownUL">
                        <li id="navbarProfileUsername">{this.props.currentUser.username}</li>
                        <li><Link id="navbarProfileLink" to='/profile'>Profile</Link></li>
                    </ul>
                )
            }else{
                profileDropDown=(
                    <div></div>
                )
            }
        }else{
            profileDropDown=(
                <div></div>
            )
        }

        let profileIconLinkSpan;
        if(this.props.sessionId){
            if(this.state.profileDropDown===true){
                profileIconLinkSpan =  
                (<span onClick={()=>this.toggleProfileDropDown()} className="profileIconLinkSpanDark"><h1><img className="profileIconLink" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" /></h1><span className="profileDropDown">{profileDropDown}</span></span>)  
            }else{
                profileIconLinkSpan =  
                (<span onClick={()=>this.toggleProfileDropDown()} className="profileIconLinkSpan"><h1><img className="profileIconLink" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" /></h1><span className="profileDropDown">{profileDropDown}</span></span>)  
            }
        }
        

        // debugger;
        if (!this.props.sessionId){
            return(
                <div className="genNavBar">
                    <div className="navBarHalves" id="half1" >
                        <h1 className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                        <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                        <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1>                
                    </div>
                    <div className="navBarHalves" id="half2">
                        <div className="searchBar">
                            <input className="col-4 searchBookInput" type="text" placeholder="Search books" onChange={this.updateForm("searchBookTitle")} />    
                            <ul className="searchBarUL">
                                {searchBarBooks}
                            </ul>
                        </div>
                        <h1 id="signInNavBarLink" className="col-3 navLinks"><Link to="/">Sign in</Link></h1>             
                        <h1 className="col-2 navLinks"><Link to="/">Join</Link></h1>  
                    </div>
                </div>
            )
        }else{
            return(
                <div className="genNavBarLoggedIn" id="genNavBarLoggedInNotHome">
                    <div className="navBarHalves" id="half1LoggedIn" >
                        <h1 className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                        <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                        <h1 className="col-3 navLinks"><Link to="/myBooks">My Books</Link></h1>                
                        <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1>                
                    </div>
                    <div className="navBarHalves" id="half2LoggedIn">
                        <div className="searchBar">
                            <input className="col-4 searchBookInput" type="text" placeholder="Search books" onChange={this.updateForm("searchBookTitle")} /> 
                            
                            <ul className="searchBarUL">
                                {searchBarBooks}
                            </ul>
                        </div>
                        {/* <input className="col-4 searchBookInput" type="text" placeholder="Search books" onChange={this.updateForm("searchBookTitle")}/>  
                        <ul>
                            {searchBarBooks}
                        </ul> */}
                        <h1 className="col-3 navLinks"><Link onClick={this.props.logout}>Log out</Link></h1>     
                        {profileIconLinkSpan}
                    </div>
                </div>
            )
        }
    }
};

export default withRouter(NavBar);