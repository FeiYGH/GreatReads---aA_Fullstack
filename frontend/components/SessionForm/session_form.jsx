import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
    }

    updateForm(field){
        return (e) => this.setState({[field]: e.target.value});
    }


    render(){
        const {errors,formType, processForm, navLink} = this.props;
        const errorsLi = errors.map(error=> {
            return(
                <li>
                    {error}
                </li>
            )
            
        })
        const goToLink = (this.props.formType ==="login") ? <Link to="/signup">Sign Up</Link> : <Link to="/login"> Log In</Link>
        return(
            
            <div>   
                <h2>{formType}</h2>
                Please {goToLink} or {navLink} instead
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.updateForm("username")}/>
                    </label>

                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.updateForm("email")}/>
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.updateForm("password")}/>
                    </label>
                    <input type="submit" value={formType}/>
                    <div>
                        
                    </div>
                    
                </form>

            </div>
        )
    }
}

export default SessionForm;
