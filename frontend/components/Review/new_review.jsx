import React from 'react';
import {Link} from 'react-router-dom';

class NewReview extends React.Component{
    
    constructor(props){
        super(props);
        // debugger;
    }

    render(){
        const {bookId} = this.props;
        
        return(
            <div>
                <div className="row">
                    
                    <div className="col-2 bookCovThumb">

                    </div>
                </div>
            </div>
        )  

    }

}

export default NewReview;