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
    
        this.handler = this.handler.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this);
        this.changeStatus = this.changeStatus.bind(this); 
        this.getBookAccdToStatus = this.getBookAccdToStatus.bind(this);
    }

    handler(){
      this.setState({updatedProf: "true"});
    };

    // handleSubmit(e) {
    //     this.props.processForm(this.state);
    // }

    componentDidMount(){
        if(this.props.sessionId){
            this.props.getUser(this.props.sessionId);
            this.props.fetchUserBookshelves(this.props.sessionId)
        }
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
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



    render() {
      let {userBookshelves} = this.props;

      let username;
      let email;
      let photo;
      if (this.props.updatedUser){
        username = this.props.updatedUser.handle;
        email = this.props.updatedUser.email;
      }else{
        username = "";
        email = "";
      }

      let profilePhoto;
      profilePhoto="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png";
      if(this.props.user.photoUrl){
          profilePhoto=this.props.user.photoUrl;
      }else{
          profilePhoto="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png"
      }


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
            <div className="profile-page">
                <div className="row">
                    <div className="col-3">
                            <img  id="defaultProfileImg" src={profilePhoto} alt="default profile pic"/>
                          
                          {/* <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/> */}
                    </div>
                    <div className="col-4 profileInfoListed">
                        <div classname="rowtest">
                          <span id="profileUsername">{this.props.user.username}</span>
                        </div>
                        <div classname="rowtest">
                            <h2>email:&emsp; {this.props.user.email}</h2> 
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <UpdateProfileFormContainer
                        updatedUser={this.props.updatedUser}
                        handler={this.handler}
                    />
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="profileBookshelvesOuterDiv">
                  <div className="row profileUserBookshelves">
                      <Link className="profileMyBooksLink" to='myBooks' ><h2>{this.props.user.username}'s Bookshelves</h2></Link>
                  </div>
                  <div className="row diffstatuses">
                    <div onClick={()=>this.changeStatus("Read")} className="col-2 profileBookStatus">read&nbsp;({read})</div>
                    <div onClick={()=>this.changeStatus("Want to Read")} className="col-2 profileBookStatus">to-read&nbsp;({wantToRead})</div>
                    <div onClick={()=>this.changeStatus("Currently Reading")} className="col-statusCurrRd profileBookStatus">currently-reading&nbsp;({currReading})</div>
                    <div onClick={()=>this.changeStatus("all")} className="col-2 profileBookStatus">all&nbsp;({all})</div>
                  </div>
                  <div className="row booksShown">
                    {books}
                  </div>
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