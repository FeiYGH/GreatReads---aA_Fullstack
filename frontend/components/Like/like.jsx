import React, { useEffect } from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { render } from 'react-dom';
 //import fetchLikes directly from the 
 import {createLike, deleteLike, fetchLikesReview} from '../../actions/like_actions';

function Likes(props){
    //debugger;
    const {reviewId, user} = props;
    
    
    //using the reviewID, I want to make an API call
    //to the backend and grab count
    //eventhandler

    //anytime value in useSelector changes, will rerender
    //anytime redux state changes (your slice of state), variable likes will update

    //debugger;
    const likes = useSelector(state => state.entities.likes);
    //debugger;

    //before can use useDispatch, must put it in a constant
    const dispatch = useDispatch();
    
    
    
    let userLikeObject; 
    //arrow function
    const userLiked = (likes) => { 
            debugger;
            Object.values(likes).forEach(like => {
                //debugger;
                if(like.user_id === user.id && like.review_id === reviewId){
                    debugger;
                    userLikeObject = like;
                    //setUserLiked(true);
                    return true;
                }
            });
            
            return false;
        }
    
    /* Same function as above but not arrow function
    function userLiked(likes){ 
        debugger;
        Object.values(likes).forEach(like => {
            debugger;
            if(like.user_id == user.id){
                return true;
            }
        });
        return false;
    };
    */ 

    
    
    let count = Object.values(likes).length; 
    //would initially be false before fetchLikes are fetched
    //set before componentDidMount
    const[userLike, setUserLiked] = useState(false);
    
    useEffect(()=>{
        debugger;
        dispatch(fetchLikesReview(reviewId));
        
        debugger;
        //Can't put this below here, because if user hasn't liked it, it will automatically 
        //create a Like for the user even if user does not press the button
        /*
        if(!userLike){      
            let createLikeObj = {user_id:user.id, review_id: reviewId};
            //debugger;
            dispatch(createLike(reviewId, createLikeObj));
        }else if(userLike && userLikeObject){
            //debugger;
            dispatch(deleteLike(userLikeObject.id));
        }
        */
    }, [userLike]); //put in variables that hold values that may change (update) 

    
    useEffect(()=>{
        debugger;
        let exists = userLiked(likes);
        if(exists){
            setUserLiked(true);
        }else{
            setUserLiked(false);
        }
    }, [likes]);
    

    const setLike = (userLike) => {
        if(userLike===false){
            debugger;
            let createLikeObj = {user_id:user.id, review_id: reviewId};
            dispatch(createLike(reviewId, createLikeObj));
            setUserLiked(!userLike);
        }else{
            debugger;
            dispatch(deleteLike(userLikeObject.id));
            setUserLiked(!userLike);  
        }
    }; 


    return(
        <div>
            {count};
            <button onClick={() => setLike(userLike)}>
                Likes
            </button>
        </div>
    )
    
    /******* 
    return(
       <div>
           hi
       </div>
   )
   ******/
}


/*
inside useEffect -- user setInterval (pass it named function) to alert every 3 seconds
return cleanUpFunction(()=> clearInterval(nameOfFunctionFromSetInterval));

i.e. added eventlistener to entire document
so anytime clicked anywhere in page, exit out of modal
once unmounted (componentWillUnmount) => not listen
*/

export default Likes;