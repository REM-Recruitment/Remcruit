import React from 'react';
import { Link } from 'react-router-dom';

const JobSeekerSettings = () => {
  const handleDeleteAccount = () => {

  };

  return (
    <div>
      <h1>Job Seeker Settings</h1>

      <h2>Account Settings</h2>
      <ul>
        <li>
          <Link to="/job-seeker/profile">Edit Profile</Link>
        </li>
        <li>
          <Link to="/job-seeker/resume">Edit Resume</Link>
        </li>
        <li>
          <Link to="/job-seeker/preferences">Edit Preferences</Link>
        </li>
      </ul>

      <h2>Communication Settings</h2>
      <ul>
        <li>
          <Link to="/job-seeker/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/job-seeker/messages">Messages</Link>
        </li>
      </ul>

      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default JobSeekerSettings;
