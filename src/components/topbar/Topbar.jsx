import React from "react";
import "./topbar.css"
import { FaBell } from 'react-icons/fa';
import {GrLanguage , GrSettingsOption} from 'react-icons/gr'

function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                    </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <FaBell/>
                    <span className="topIconBadge">2</span>
                    </div>


                    <div className="topbarIconContainer">
                    <GrLanguage/>
                    <span className="topIconBadge">2</span>
                    </div>


                    <div className="topbarIconContainer">
                    <GrSettingsOption />
                   
                    </div>
                    <img src="https://globalnews.ca/wp-content/uploads/2017/05/oldestmanthumb.jpg?quality=85&strip=all " alt="" className="topAvatar" />
                </div>
            </div>

        </div>
    )
}
export default Topbar