import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import './userComponent.css'

function UserComp({ profile_pic}) {
  let { user, jobseeker } = useContext(AuthContext);
  return (
    <div className="userComponent">
      <div className="profilePicture">
        <img
          src={profile_pic}
          alt=""
        />
      </div>
      <div>
        {user && (
          <p className="name">
            {user.first_name} {user.last_name}
          </p>
        )}
      </div>
      <div className="moreInfo">
        <p className="roleType">UI/UX Designer </p>
        <p>.</p>
        <p className="industrySector"> Computer science</p>
      </div>
      <div className="editProfile">
        <Link to="/profile">
          <button className="editProfileBtn">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default UserComp;
