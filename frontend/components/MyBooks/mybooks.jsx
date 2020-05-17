import React from 'react';
import UpdateProfileFormContainer from '../Profile/update_profile_form_container';

import { Link } from "react-router-dom";


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          updated_user: props.updatedUser,       
          updatedProf: "false",
          user: this.props.user,        
          status: "all"
        };
        this.changeStatus = this.changeStatus.bind(this); 
        this.getBookAccdToStatus = this.getBookAccdToStatus.bind(this);

    }

    changeStatus(statusChange){
        this.setState({status:statusChange })
      }
  
      getBookAccdToStatus(setStatus){
        if(setStatus==="all"){
            return (
              Object.values(this.props.userBookshelves).map(bookshelf => {
                return(
                    <Link to={`/books/${bookshelf.book_id}`}>              
                      <div className="col-profileBook">
                        <img src={bookshelf.photoUrl} alt="book photo cover"/>
                      </div>
                    </Link>
                )
            })
          );
        }else{
            return (
              Object.values(this.props.userBookshelves).map(bookshelf => {
                if(bookshelf.status===setStatus)
                return(
                  <Link to={`/books/${bookshelf.book_id}`}>              
                    <div className="col-profileBook">
                      <img src={bookshelf.photoUrl} alt="book photo cover"/>
                    </div>
                  </Link>
                )
            })
          );
        }
      };


    componentDidMount(){
        if(this.props.sessionId){
            this.props.getUser(this.props.sessionId);
            this.props.fetchUserBookshelves(this.props.sessionId)
        }
    }



    render() {
      let {userBookshelves} = this.props;

    //   let username;
    //   let email;
    //   if (this.props.updatedUser){
    //     username = this.props.updatedUser.handle;
    //     email = this.props.updatedUser.email;
    //   }else{
    //     username = "";
    //     email = "";
    //   }

      let books; 
      let read = 0;
      let currReading = 0;
      let wantToRead = 0;
      let all = 0;
      //bookshelves stats
      if(this.props.userBookshelves){
        Object.values(userBookshelves).map(bookshelf => {
          all++;
          if(bookshelf.status==="Read"){
            read++;
          }else if (bookshelf.status==="Currently Reading"){
            currReading++;
          }else{
            wantToRead++;
          }
        });
        books = this.getBookAccdToStatus(this.state.status);
      }


    //   debugger;
      if(this.props.user){
        return (
            <div className="myBooksPage">
                <div className="row myBooksHeader">
                    <h1>My Books</h1>
                </div>
                <div className="col-2">
                    <div className="row bookshelvesH1">
                        Bookshelves
                    </div>
                    <div onClick={()=>this.changeStatus("all")} className="row allBookshelvesH1">
                        All&nbsp;({all})
                    </div>
                    <div onClick={()=>this.changeStatus("Read")} className="row statusBookshelvesH1">
                        Read&nbsp;({read})
                    </div>
                    <div onClick={()=>this.changeStatus("Currently Reading")} className="row statusBookshelvesH1">
                        Currently Reading&nbsp;({currReading})
                    </div>
                    <div onClick={()=>this.changeStatus("Want to Read")} className="row  statusBookshelvesH1">
                        Want to Read&nbsp;({wantToRead})
                    </div>
                </div>
                <div className="col-9 myBooksBookDisplay">
                    {books}
                </div>
                
              </div>)
      }else{
          return(
              <div>
                 User not signed in
              </div>
          )
      }
    }
}
                

      
                //   <div className="halfProfile2">
                //     <UpdateProfileForm
                //       user={this.props.user}
                //       updatedUser={this.props.updatedUser}
                //       errors={this.props.errors}
                //       updateProfileAct={this.props.updateProfileAct}
                //       handler={this.handler}
                //     />
                //   </div>
            
    



export default Profile;