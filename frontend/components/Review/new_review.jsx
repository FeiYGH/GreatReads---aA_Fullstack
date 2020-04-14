import React from 'react';
import {Link} from 'react-router-dom';

class NewReview extends React.Component{
    
    constructor(props){
        super(props);
        debugger;
        this.state = {
            title: "default title",
            body: "",
            rating: 0,
            user_id: props.sessionId,
            spoiler: false,
            book_id: props.bookId,
            book: props.book
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.updateSpoiler = this.updateSpoiler.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state.book_id, this.state)
            .then(this.props.history.push(`/books/${this.props.bookId}`));
    }

    componentDidMount(){
        debugger;
        this.props.fetchBook(this.props.bookId);
        
    }

    updateSpoiler(){
        if(this.state.spoiler===false){
            this.setState({spoiler:true});
        }else{
            this.setState({spoiler:false});
        }
    }

    updateForm(field){
        return(e) => this.setState({[field]:e.target.value});
    }

    // renderErrors(){

    // }

    render(){    
        let title;
        let author;

        if(this.props.book){
            title = this.props.book.title;
            author = this.props.book.author;    
        }else{
            title = "";
            author = "";
        }
    
        return(
            
            <div>
                <div className="row">
                    <h2>{title}</h2>
                    <h2>{author}</h2>

                </div>
                <div className="row">
                    
                    <div className="col-2 bookCovThumb">

                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Review title" value={this.state.username} onChange={this.updateForm("title")}></input>
                            <textarea rows="20" cols ="100" placeholder="Enter your review here..." onChange={this.updateForm("body")}>
                            </textarea>
                            <input type="checkbox"  value={this.state.spoiler} onClick={()=>this.updateSpoiler()}></input>
                            <label for="">Spoiler</label>
                            <br/>
                            <input type="submit" value="Post Review"/>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}

export default NewReview;