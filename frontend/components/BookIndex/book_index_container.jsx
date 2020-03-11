import BookIndex from './book_index';
import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/book_actions';
// import {fetchBooks} from '../../util/route_util';

const mSTP = (state,ownProps) => {
    return({
        books: state.entities.books     
    });
};

const mDTP = dispatch => {
    return({ 
        fetchBooks: () => dispatch(fetchBooks())
    });
};

export default connect(mSTP, mDTP)(BookIndex);