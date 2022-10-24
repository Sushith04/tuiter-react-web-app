import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const PostItem = (
    {
        post = {
            "userName": "SpaceX",
            "handle": "SpaceX",
            "profile_image": "spacex.jpg",
            "time": "23h",
            "post_title": {
                "content1": "Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → ",
                "link": "http://spacex.com/updates",
                "content2": ""
            },
            "post_image": "post-image1.jpg",
            "comments": "595",
            "retweets": "1,168",
            "Likes": "11.1K"
        },
        post2 ={
            "userName": "SpaceX",
            "handle": "SpaceX",
            "profile_image": "spacex.jpg",
            "time": "Oct 18",
            "post_title": {
                "content1": "SpaceX’s Rideshare program’s redesigned payload configuration offers more opportunities for smallsat providers to catch a ride to orbit. Learn more here → ",
                "link": "http://spacex.com/rideshare/",
                "content2": ""
            },
            "post_image": "post-image2.jpg",
            "comments": "1,107",
            "retweets": "1,526",
            "Likes": "14K"
        }
    }
) => {
    return (
        <>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-1">
                            <i className="text-secondary fw-bold fa fa-retweet ms-4" style={{"font-size": 13}}></i>
                            <img className="rounded-circle" src={`/images/${post.profile_image}`}
                                 width="50" height="50" alt="profilepic"/>
                        </div>
                        <div className="col-11 ps-4 ps-md-3">
                            <span className="text-secondary fw-bold" style={{"font-size": 13}}>Elon Musk Retweeted</span>
                            <p><span className="fw-bold">{post.userName}&nbsp;
                                <span style={{"color": "rgb(29, 161, 242)"}}><i
                                    className="fa fa-check-circle"></i></span></span>
                                <span
                                    className="text-secondary">&nbsp;@{post.handle} &middot; {post.time}</span>
                                <span className="float-end text-secondary">&hellip;</span><br/>
                                <span>{post.post_title.content1}</span>
                                <span
                                    style={{"color": "rgb(29, 161, 242)"}}>{post.post_title.link}</span>
                            </p>
                            <div className="rounded-4">
                                <div>
                                    <img className="rounded-4"
                                         src={`/images/${post.post_image}`}
                                         width="100%" alt="post-image"/>
                                </div>
                            </div>
                            <div className="row pt-2 text-secondary pb-4">
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span className="pe-2"><i
                                        className="fa fa-regular fa-comment"></i></span></a>{post.comments}
                                </div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span className="pe-2"><i
                                        className="fa fa-retweet"></i></span></a>{post.retweets}
                                </div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span className="pe-2"><i
                                        className="fa fa-regular fa-heart"></i></span></a>{post.Likes}
                                </div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span><i
                                        className="fa fa-regular fa-share-from-square"></i></span></a>
                                </div>
                            </div>
                            <span style={{"color": "rgb(29, 161, 242)"}}>Show this thread</span>
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-1">
                            <i className="text-secondary fw-bold fa fa-retweet ms-4" style={{"font-size": 13}}></i>
                            <img className="rounded-circle" src={`/images/${post2.profile_image}`}
                                 width="50" height="50" alt="profilepic"/>
                        </div>
                        <div className="col-11 ps-4 ps-md-3">
                            <span className="text-secondary fw-bold" style={{"font-size": 13}}>Elon Musk Retweeted</span>
                            <p><span className="fw-bold">{post2.userName}&nbsp;
                                <span style={{"color": "rgb(29, 161, 242)"}}><i
                                    className="fa fa-check-circle"></i></span></span>
                                <span
                                    className="text-secondary">&nbsp;@{post2.handle} &middot; {post2.time}</span>
                                <span className="float-end text-secondary">&hellip;</span><br/>
                                <span>{post2.post_title.content1}</span>
                                <span
                                    style={{"color": "rgb(29, 161, 242)"}}>{post2.post_title.link}</span>
                            </p>
                            <div className="rounded-4">
                                <div>
                                    <img className="rounded-4"
                                         src={`/images/${post2.post_image}`}
                                         width="100%" alt="post-image"/>
                                </div>
                            </div>
                            <div className="row pt-2 text-secondary pb-4">
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span className="pe-2"><i
                                        className="fa fa-regular fa-comment"></i></span></a>{post2.comments}
                                </div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span className="pe-2"><i
                                        className="fa fa-retweet"></i></span></a>{post2.retweets}
                                </div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span className="pe-2"><i
                                        className="fa fa-regular fa-heart"></i></span></a>{post2.Likes}
                                </div>
                                <div className="col-3">
                                    <a href="#" className="text-secondary"><span><i
                                        className="fa fa-regular fa-share-from-square"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PostItem;