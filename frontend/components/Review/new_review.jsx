import React from 'react';
import {Link} from 'react-router-dom';

class NewReview extends React.Component{
    
    constructor(props){
        super(props);
        // debugger;
    }

    render(){
        const {bookId, book} = this.props;

        return(
            <div>
                <div className="row">
                    <h2>{book.title}</h2>
                </div>
                <div className="row">
                    
                    <div className="col-2 bookCovThumb">

                    </div>
                </div>
            </div>
        )  

    }

}

export default NewReview;