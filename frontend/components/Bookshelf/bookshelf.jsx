import React from 'react';
import {Link} from 'react-router-dom';


class Bookshelf extends React.Component{
    constructor(props){
        // debugger;
        super(props);

        this.state={
            select:false,
           
        }

        this.getDropDown = this.getDropDown.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.createBookshelf = this.createBookshelf.bind(this);
        this.editBookshelf = this.editBookshelf.bind(this);
    }


    toggleDropDown(){
        if(this.state.select===true){
            this.setState({select:false})
        }else{
            this.setState({select:true})
        }
    }

    componentDidMount(){
        // debugger;
        const {user} = this.props;
        let bookshelfId = -1;
        if(this.props.sessionId){
            this.props.getUser(this.props.sessionId);
        }
        // debugger;
        if(user){
            for(let i =0 ; i< user.bookshelves.length; i++ ){
                if(user.bookshelves[i].book_id === parseInt(this.props.bookId)){
                    // debugger;
                    bookshelfId = user.bookshelves[i].id;
                    break;
                }
            }
            // debugger;
            if (bookshelfId > -1){
                this.props.fetchBookshelf(bookshelfId);
            }
        }
    }

    createBookshelf(currStatus){
        const {sessionId, bookId} = this.props;

        this.props.createBookshelf({user_id:sessionId, book_id: parseInt(bookId), status:currStatus}).then(this.toggleDropDown());

    }

    editBookshelf(currStatus){
        const {bookshelf, sessionId, bookId} = this.props;

        this.props.editBookshelf(bookshelf.id, {user_id:sessionId, book_id: parseInt(bookId), status:currStatus});

    }

    getDropDown(){
        const {bookshelf, sessionId, bookId} = this.props;

        if(this.props.sessionId){
            if(this.state.select===true && !this.props.bookshelf){
                return(
                    <div>
                        <ul className="dropDownULStatusList">
                            <li onClick={()=>this.createBookshelf("Read")}> Read</li>
                            <li onClick={()=>this.createBookshelf("Currently Reading")}>Currently Reading</li>
                            <li onClick={()=>this.createBookshelf("Want to Read")}>Want to Read</li>
                        </ul> 
                    </div>
                   
                )
                
            }else if(this.state.select===true && this.props.bookshelf){
                return(
                    <div>
                        <ul className="dropDownULStatusList">
                            <li onClick={()=>this.editBookshelf("Read")}> Read</li>
                            <li onClick={()=>this.editBookshelf( "Currently Reading")}>Currently Reading</li>
                            <li onClick={()=>this.editBookshelf("Want to Read")}>Want to Read</li>
                        </ul> 
                    </div>
                    
                )
            }else{
                return(<div></div>)
            }
        }else{
            //not user logged in
            if(this.state.select===true){
                return(
                    <div >
                        <ul className="dropDownULStatusList">
                            <Link className="statusListLILink" to="/" ><li>Read</li></Link>
                            <Link className="statusListLILink" to="/" ><li>Currently Reading</li></Link>
                            <Link className="statusListLILink" to="/" ><li>Want to Read</li></Link>
{/* 
                            <li><Link className="statusListLILink" to="/" >Read</Link></li>
                            <li><Link className="statusListLILink" to="/" >Currently Reading</Link></li>
                            <li ><Link className="statusListLILink" to="/" >Want to Read</Link></li> */}
                        </ul> 
                    </div>
                )
            }else{
                return(<div></div>)
            }
        }
    }

    render(){
        let dropDown = this.getDropDown();
        

        if(this.props.book){
            if(this.props.sessionId){
                if (!this.props.bookshelf){
                    return(
                        <div>
                            <div className="row bookshelfOuterDiv">   
                                <div className="col-10 bookshelfStatus">
                                    <h3>Want to Read</h3>
                                </div>
                                <div className="col-2 arrowDownBookshelf">
                                    <h3 onClick={()=>this.toggleDropDown()}><div id="rotate">&#9698;</div></h3>
                                    {/* {dropDown} */}
                                </div>
                                
                            </div>
                            {dropDown}
                        </div>
                        
                    )
                }else if(this.props.bookshelf){
                    return(
                        <div>
                            <div className="row bookshelfOuterDiv">   
                                <div className="col-10 bookshelfStatus">
                                    <h3>{this.props.bookshelf.status}</h3>
                                </div>
                            <div onClick={()=>this.toggleDropDown()} className="col-2 arrowDownBookshelf">
                                <h3 ><div id="rotate">&#9698;</div></h3>
                                {/* {dropDown} */}
                            </div>
                            
                            </div>
                            {dropDown}
                        </div>
                        
                )
            }
        }else{
            return(
                <div>
                    <div className="row bookshelfOuterDiv">   
                            <div className="col-10 bookshelfStatus">
                                <h3>Want to Read</h3>
                            </div>
                        <div className="col-2 arrowDownBookshelf">
                            <h3 onClick={()=>this.toggleDropDown()}><div id="rotate">&#9698;</div></h3>
                            {/* {dropDown} */}
                        </div>
                        
                    </div>
                    {dropDown}
                </div>
                
            )
        }

    }
    }

}

export default Bookshelf;