import c from "./ProfileInfo.module.css";
import wrap from "../../../asserts/loveWrap.jpg";
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.wrap} src={wrap}/>
            </div>
            <div className={c.description}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;