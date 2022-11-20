import React from "react";
import TuitStats from "../TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitsItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img className="rounded-circle" src={tuit.image} width="45px" height="45px"
                         alt="Profile Pic"/>
                </div>
                <div className="col">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="fw-bolder">{tuit.userName} <span
                        style={{"color": "rgb(29, 161, 242)"}}><i
                        className="fa fa-check-circle"></i></span> <span
                        className="text-secondary fw-normal"> {tuit.handle} &middot; {tuit.time}</span>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
}
export default TuitsItem;