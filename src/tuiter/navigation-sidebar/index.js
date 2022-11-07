import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[2];
    if (paths.length === 2 || active ==='') {
        active='home';
    }
    return (
        <div className="list-group">
            <a className="list-group-item">
                <span className="d-none d-xl-block">Tuiter</span>
                <span className="d-block d-xl-none"><i className="fab fa-twitter"></i></span>
            </a>
            <Link to="/tuiter" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Home</span>
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-hashtag"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Explore</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-asterisk"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Labs</span>
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Messages</span>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Bookmarks</span>
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-list"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Lists</span>
                    </div>
                </div>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">Profile</span>
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                            <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="col-2">
                        <span className="d-none d-xl-block">More</span>
                    </div>
                </div>
            </a>
        </div>

    );
};
export default NavigationSidebar;