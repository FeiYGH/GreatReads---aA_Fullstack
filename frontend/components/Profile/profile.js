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
          
        };
    
        this.handler = this.handler.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)  
        
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
        }

    //   this.setState({user:this.props.user});
    //   if(this.props.user ){
    //       this.props.getUpdatedUser(this.props.user.id)
        
        
    //   }
    }

    componentDidUpdate(prevProps, prevState){
    //   if(prevProps.user !== this.props.user){
        //  if(this.props.user.id){
        //      this.props.getUpdatedUser(this.props.user.id);
       
        //  }   
    //   }
      
    }
  
    // componentWillReceiveProps(nextProps){
    //   this.setState({user:nextProps.user});
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }


    render() {
      let username;
      let email;
      let photo;
      if (this.props.updatedUser){
        username = this.props.updatedUser.handle;
        email = this.props.updatedUser.email;
        //photo 
        
      }else{
        username = "";
        email = "";
        //photo
      }

      let profilePhoto;
      profilePhoto="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png";
      if(this.props.user.photoUrl){
          profilePhoto=this.props.user.photoUrl;
      }else{
          profilePhoto="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png"
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