import React from 'react';
import {Link} from 'react-router-dom';

//I'm currently not using this form, I've been using form inside
//greeting.jsx

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        // debugger;
        this.state = {
            username: "",
            email: "",
            password: ""
            // errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // componentDidMount(nextProps){
    //     this.setState({errors:nextProps.errors});
    // }

    // componentWillReceiveProps(nextProps){
    //     this.setState({errors:nextProps.errors});
    // };

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.props.history.push("/"));
    }

    updateForm(field){
        return (e) => this.setState({[field]: e.target.value});
    }


    renderErrors() {
        return(
        //   <ul>
        //     {this.props.errors.map((error, i) => (
        //       <li key={`error ${i}`}>
        //         {error}
        //       </li>
        //     ))}
        //   </ul>
        //   <ul>
        //     {Object.keys(this.state.errors).map((error, i) => (
        //       <li key={`error ${i}`}>
        //         {this.state.errors[error]}
        //       </li>
        //     ))}
        //   </ul>
        <ul>

        </ul>
        );
      }



    render(){
        const {errors,formType, processForm, navLink} = this.props;
        // const errorsLi = errors.map(error=> {
        //     return(
        //         <li>
        //             {error}
        //         </li>
        //     )
            
        // })

        const splash = ()=>(
            <div>
                <nav>
                    <h2>goodreads</h2>
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
                    {/* <div>
                        <ul>
                            {errorsLi}
                        </ul>
                    </div> */}
                </form>
                </nav>

            </div>
        )

        const goToLink = (this.props.formType ==="Log In") ? <Link to="/signup">Sign Up</Link> : <Link to="/login"> Log In</Link>
        return(
            
            <div>  
                 
                <h2>{formType}</h2>
                Please {formType} or {navLink} instead
                {this.renderErrors()}
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
                    {/* <div>
                        <ul>
                            {errorsLi}
                        </ul>
                    </div> */}
                </form>

            </div>
        )
    }
}

export default SessionForm;
