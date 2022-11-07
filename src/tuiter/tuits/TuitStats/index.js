import React from "react";

const Index = ({tuit}) => {
    return (
        <div className="row text-muted mt-3">
            <div className="col">
                <a href="src/tuiter/tuits/TuitStats/index#" className="text-secondary"><span
                    className="pe-2"><i
                    className="fa fa-regular fa-comment"></i></span></a>{tuit.replies}
            </div>
            <div className="col">
                <a href="src/tuiter/tuits/TuitStats/index#" className="text-secondary"><span
                    className="pe-2"><i
                    className="fa fa-retweet"></i></span></a>{tuit.retuits}
            </div>
            <div className="col">
                <a href="src/tuiter/tuits/TuitStats/index#" className="text-secondary"><span
                    className="pe-2"><i
                    className={tuit.liked ? "fa fa-heart" : "fa fa-regular fa-heart"}
                    style={{color: tuit.liked ? 'red' : 'gray'}}></i></span></a>{tuit.likes}
            </div>
            <div className="col">
                <a href="src/tuiter/tuits/TuitStats/index#" className="text-secondary"><span><i
                    className="fa fa-regular fa-share-from-square"></i></span></a>
            </div>
        </div>
    );
}

export default Index;