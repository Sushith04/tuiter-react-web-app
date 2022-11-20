import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row text-muted mt-3">
            <div className="col">
                <span className="pe-2">
                    <i className="fa fa-regular fa-comment"></i></span>{tuit.replies}
            </div>
            <div className="col">
                <span className="pe-2"><i className="fa fa-retweet"></i></span>{tuit.retuits}
            </div>
            <div className="col" onClick={() => dispatch(updateTuitThunk({
                                                                             ...tuit,
                                                                             likes: tuit.likes + 1,
                                                                             liked: true
                                                                         }))}>
                <span className="pe-2">
                    <i className={tuit.liked ? "fa fa-heart" : "fa fa-regular fa-heart"}
                    style={{color: tuit.liked ? 'red' : 'gray'}}></i></span>{tuit.likes}

            </div>
            <div className="col" onClick={() => dispatch(updateTuitThunk({
                                                                             ...tuit,
                                                                             dislikes: tuit.dislikes
                                                                                       + 1,
                                                                             disliked: true
                                                                         }))}>
                <span className="pe-2">
                    <i className={tuit.disliked ? "fa fa-thumbs-down"
                                             : "fa fa-regular fa-thumbs-down"}
                       style={{color: tuit.disliked ? 'black' : 'gray'}}></i></span>{tuit.dislikes}
            </div>
            <div className="col">
                <span><i className="fa fa-regular fa-share-from-square"></i></span>
            </div>
        </div>
    );
}

export default TuitStats;