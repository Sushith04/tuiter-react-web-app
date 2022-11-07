import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.currentProfile);
    return (
        <>
            <div className="card">
                <div className="card-body col-10 pt-2 pb-2">
                    <div className="row">
                        <div className="col-1 mt-2">
                            <i className="fa fa-arrow-left"></i>
                        </div>
                        <div className="col-11">
                            <h5 className="card-title">{profile.firstName} {profile.lastName}</h5>
                            <h6 className="card-subtitle text-muted">{profile.tuits} Tuits</h6>
                        </div>
                    </div>
                </div>
                <img src={profile.bannerPicture} height={300} alt="Card image"/>
                <div className="card-body">
                    <img className="rounded-circle wd-rounded" src={profile.profilePicture}
                         height={128}
                         width={128} alt="Card image"/>
                    <Link to="/tuiter/edit-profile" className="wd-ee">Edit Profile</Link>
                    <h5 className="pt-3">{profile.firstName} {profile.lastName}</h5>
                    <h6 className="text-secondary fw-normal">{profile.handle}</h6>
                    <p className="card-text pt-1">{profile.bio}</p>
                    <div className="row pt-0 text-secondary">
                        <div className="col-auto">
                            <i className="fa-solid fa-location-dot"></i> &nbsp;{profile.location}
                        </div>
                        <div className="col-auto">
                            <i className="fa-solid fa-cake-candles"></i> &nbsp;Born {profile.dateOfBirth}
                        </div>
                        <div className="col-auto">
                            <i className="fa-solid fa-calendar-days"></i> &nbsp;Joined {profile.dateJoined}
                        </div>
                    </div>
                    <div className="row">
                        <span className="pt-3"><span className="fw-bold">340</span> Following<span
                            className="fw-bold"> &nbsp;&nbsp;&nbsp;&nbsp;223</span> Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;