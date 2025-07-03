import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import "./ProfileDetails.css";

const GitProfile = () => {
  const [profile, setProfile] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
        setUserData({});
        return;
      }
      const data = await response.json();
      setUserData(data);
      setError(false);
    } catch (err) {
      setError(true);
      setUserData({});
    }
  };

  const handleSubmit = () => {
    if (profile.trim() !== "") {
      fetchData(`https://api.github.com/users/${profile}`);
    }
  };

  return (
    <>
      <div className="SearchContainer">
        <h1><center>Project 13(Search git profile)</center></h1>
        <div>
          <input
            type="text"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      {error ? (
        <div>No data found</div>
      ) : Object.keys(userData).length > 0 ? (
        <ProfileDetails userDetails={userData} />
      ) : (
        <div>Please enter a username and click submit</div>
      )}
    </>
  );
};

export default GitProfile;
