import React from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';

class NavBarHome extends React.Component{
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
///////////////////////////////////////////////////////////////////////////////



    render(){
        //////////////////////////////////////////
        let searchBarBooks;
        let partialWd = this.state.searchBookTitle;


        if(this.props.books && partialWd !== ""){
            searchBarBooks=Object.values(this.props.books).map(book => {   
                let bookWordsArr = book.title.split(" ");
                let bookFoundLi;
             //    debugger;
                for(let i = 0; i < bookWordsArr.length; i++){
                     if(bookWordsArr[i].toLowerCase().startsWith(partialWd.toLowerCase())){
                         // debugger;
                         bookFoundLi = 
                             (<li className="searchBookLI" onClick={()=>this.goToBook(book.id)}>
                             <div className="row searchBookRow" >
                                     <div className="col-2 searchBookPhoto">
                                         <img src={book.photoUrl} alt={book.title}></img>                             
                                     </div>
                                     <div className="col-8 searchBookTitleLi">
                                         <span>{book.title}</span>
                                     </div>
                             </div>
                         </li>)
                         //</Link>
                         break;
                    }   
                 }
                 if(bookFoundLi){
                     return bookFoundLi;
                 }else{
                     return(<div></div>)
                 }
                    
                })
             }    

        // if(this.props.books && partialWd !== ""){
        //     searchBarBooks=Object.values(this.props.books).map(book => {
        //      //    debugger;             
        //         if(book.title.toLowerCase().startsWith(partialWd.toLowerCase())){
        //          //    debugger;
        //             return(
        //              //    <Link to={`/books/${book.id}`}>
        //                  <li className="searchBookLI" onClick={()=>this.goToBook(book.id)}>
        //                     <div className="row searchBookRow" >
        //                          <div className="col-2 searchBookPhoto">
        //                              <img src={book.photoUrl} alt={book.title}></img>                             
        //                          </div>
        //                          <div className="col-8 searchBookTitleLi">
        //                              <span>{book.title}</span>
        //                          </div>
        //                     </div>
        //                 </li>
        //              //    </Link>
                        
        //             )
        //         }else{
        //             return(<div></div>)
        //          }
        //     })
        //  };
        ////////////////////////////////////////////
        let profileDropDown;
        if(this.props.currentUser){
            if(this.state.profileDropDown===true){
                profileDropDown=(
                    <ul className="profileDropDownUL">
                        <li id="navbarProfileUsername">{this.props.currentUser.username.toUpperCase()}</li>
                        <li><Link id="navbarProfileLink"  to='/profile'>Profile</Link></li>
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
       
        if(this.state.profileDropDown===true){
            profileIconLinkSpan =  
            (<span onClick={()=>this.toggleProfileDropDown()} className="profileIconLinkSpanDark"><h1><img className="profileIconLink" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" /></h1><span className="profileDropDown">{profileDropDown}</span></span>)  
        }else{
            profileIconLinkSpan =  
            (<span onClick={()=>this.toggleProfileDropDown()} className="profileIconLinkSpan"><h1><img className="profileIconLink" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" /></h1><span className="profileDropDown">{profileDropDown}</span></span>)  
        }
        
        
        
        const {currentUser, sessionId} = this.props;
 
        if (!sessionId){
            return(
                <div>
                </div>
            )
        }else if(currentUser){
            return(
                <div className="genNavBarLoggedIn"  >
                    <div className="navBarHalvesHome" id="half1LoggedInHome" >
                        <h1 className="col-setSpace navLinks"></h1>

                        <h1 id="logoLinkGenNavBarHome" className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                        <h1 className="col-setSpace navLinks"></h1>
                        <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                        <h1 className="col-3 navLinks"><Link to="/myBooks">My Books</Link></h1>                
                        <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1> 
                    </div>
                    <div className="navBarHalvesHome2" id="half2LoggedInHome">
                        <div className="searchBar">
                            <input className="col-4 searchBookInput" type="text" placeholder="Search books" onChange={this.updateForm("searchBookTitle")} /> 
                            
                            <ul className="searchBarUL">
                                {searchBarBooks}
                            </ul>
                        </div>      
                       
                        
                        <h1 className="col-3 navLinks" id="genNavBarHomeLogOutH1"><Link onClick={this.props.logout}>Log out</Link></h1>    
                        
                        {profileIconLinkSpan}
                        
                         
                    </div>
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