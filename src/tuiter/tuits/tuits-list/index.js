import React from "react";
import TuitsItem from "./tuits-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                                   <TuitsItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;