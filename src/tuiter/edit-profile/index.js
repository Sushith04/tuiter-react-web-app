import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import Form from 'react-bootstrap/Form';
import {updateProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const ref = useRef();
    const editProfile = useSelector(state => state.currentProfile);
    let [userName, setUserName] = useState(editProfile.firstName + " " + editProfile.lastName);
    let [bio, setBio] = useState(editProfile.bio);
    let [location, setLocation] = useState(editProfile.location);
    let [website, setWebsite] = useState(editProfile.website);
    let [birthdate, setBirthdate] = useState(editProfile.dateOfBirth);

    const dispatch = useDispatch();
    const saveProfile = (id) => {
        dispatch(updateProfile(id));
    }
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-2">
                    <div className="row">
                        <div className="col-1 mt-1">
                            <Link to="../profile"><i
                                className="fa-solid fa-xmark float-start text-black"></i></Link>
                        </div>
                        <div className="col-9">
                            <h5 className="card-title">Edit Profile</h5>
                        </div>
                        <div className="col-2">
                            <Link to="../profile">
                                <button className="wd-save" onClick={() =>
                                    saveProfile({
                                                    ...editProfile,
                                                    "firstName": userName.split(" ")[0],
                                                    "lastName": userName.split(" ")[1],
                                                    "bio": bio,
                                                    "website": website,
                                                    "location": location,
                                                    "dateOfBirth": birthdate
                                                })}>Save
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="wd-backPic">
                    <img className="wd-profilePic-image" src="/images/tuiter-back.jpeg" height={300}
                         alt="Card image"/>
                    <div className="wd-profilePic-content">
                            <span className="wd-profilePic-icon">
                                <i className="fas fa-camera"></i>
                                <i className="fas fa-xmark ps-5"></i></span>
                    </div>
                </div>

                <div className="card-body">
                    <div className="wd-profilePic wd-rounded">
                        <img className="rounded-circle  wd-profilePic-image"
                             src="/images/owner.jpg"
                             width={128} height={128} alt="Profibild"/>
                        <div className="wd-profilePic-content">
                            <span className="wd-profilePic-icon"><i
                                className="fas fa-camera"></i></span>
                        </div>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                        <Form.Control type="text" className="form-control" id="floatingName"
                                      placeholder="name" value={userName}
                                      onChange={(event) => setUserName(event.target.value)}/>
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Form.Control type="text" className="form-control" id="floatingBio"
                                      placeholder="bio" value={bio}
                                      onChange={(event) => setBio(event.target.value)}/>
                        <label htmlFor="floatingBio">Bio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Form.Control type="text" className="form-control" id="floatingLocation"
                                      placeholder="location" value={location}
                                      onChange={(event) => setLocation(event.target.value)}/>
                        <label htmlFor="floatingLocation">Location</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Form.Control type="text" className="form-control" id="floatingWebsite"
                                      placeholder="website" value={website}
                                      onChange={(event) => setWebsite(event.target.value)}/>
                        <label htmlFor="floatingWebsite">Website</label>
                    </div>
                    <p className="mb-0">Birth Date &middot; <Link to=""
                                                                  className="text-decoration-none">Edit</Link>
                    </p>
                    <div className="mb-3">
                        <Form.Control type="text" placeholder="MM/DD/YYYY"
                                      onFocus={(event) => event.target.type = "date"}
                                      value={birthdate}
                                      onChange={(event) => setBirthdate(event.target.value)}/>
                    </div>
                    <p className="mt-4">Switch to professional<span><i
                        className="fa fa-greater-than float-end mt-1"></i></span></p>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;