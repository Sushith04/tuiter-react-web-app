import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import Nav from "../nav";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import profileReducer from "./profile/profile-reducer";
import EditProfileComponent from "./edit-profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, currentProfile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav/>
                <div className="row mt-2 mb-2">
                    <div className="col-2 col-lg-1 col-xl-2">
                        <NavigationSidebar active="explore"/>
                    </div>
                    <div className="col-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        </Routes>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter