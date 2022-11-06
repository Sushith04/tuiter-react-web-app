import React from "react";
import TuitList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;