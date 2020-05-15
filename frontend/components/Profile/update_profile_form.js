import React from 'react';
import {Redirect} from 'react-router-dom';

class UpdateProfileForm extends React.Component{
    constructor(props){
        super(props);
   

    this.state={
        id: this.props.user.id,
        username: this.props.user.username,
        email: this.props.user.email,
        photoFile: null,
        updatedProfile: "false",
        errors: "false"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update= this.update.bind(this);
    this.openUpdate = this.openUpdate.bind(this);
    this.closeUpdate = this.closeUpdate.bind(this);
    this.handleFile = this.handleFile.bind(this);
}


handleSubmit(e) {
    e.preventDefault();
    // debugger;
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[email]', this.state.email);
    if(this.state.photoFile!==null){
        formData.append('user[photo]', this.state.photoFile);
    }
    this.props.updateProfileInfo(this.props.user.id, formData)   
    this.props.handler(); 
    this.props.clearErrors();
    
}


update(field){
    return e => this.setState({
        [field]:e.currentTarget.value
    });
};


renderErrors() {
    if (this.props.errors){
        // debugger;
        return(
            Object.values(this.props.errors).map((err) => (
                <li>
                    {err}
                </li>
            )
        )
    )          
    }else{
        return(
            <div></div>
        )
    } 
}

openUpdate(){
    this.setState({updatedProfile:"true"});
    // this.setState({username:this.props.updatedUser.username});
    // this.setState({email:this.props.updatedUser.email});
    this.props.clearErrors();
}

closeUpdate(){
  this.setState({updatedProfile:"false"});
  this.props.clearErrors();

}

handleFile(e){
    this.setState({photoFile:e.currentTarget.files[0]})
}



render(){
    // console.log(this.state);
    if(this.state.updatedProfile==="true"){
        return(
            <div >
                <form className="updateProfileForm" onSubmit={this.handleSubmit}>
                    <label className="profileFormLabels">
                        Username:
                    </label>
                    <br/>
                    <input className="profileFormTextInput" type="text" placeholder="New username" value={this.state.username} onChange={this.update("username")}>
                    </input>
                    <br/>
                    <label className="profileFormLabels">
                        Email:
                    </label>
                    <br/>
                    <input className="profileFormTextInput" type="text" placeholder="New email" value={this.state.email} onChange={this.update("email")}>
                    </input>
                    <br/>
                    <label className="profileFormLabels">
                        Profile picture:
                    </label>
                    <br/>
                    <input className="profileFormInputTypeFile" type="file" onChange={this.handleFile}></input>
                    <br/>
                    
                    <button className="updateProfileButton">Update profile</button>&ensp;
                    <button  className="updateProfileButton" onClick={this.closeUpdate}>Close</button>
                    <ul className="updateProfileErrors"> {this.renderErrors()}</ul>
                </form>
            </div>)
    }else{
        return(
            <div className="editPen">
                {/* <img className="editPenImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png"  alt="edit pen" onClick={this.openUpdate}/> */}
                <img className="editPenImg" src="https://studypal-dev.s3-us-west-1.amazonaws.com/edit.png" alt="edit pen" onClick={this.openUpdate}></img>
            </div>
        )   
    }   
    
    
}
}

export default UpdateProfileForm;
