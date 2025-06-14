import React, { useEffect, useState } from 'react';
import ProfileComponent from './components/ProfileComponent';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const usersArray = JSON.parse(storedUsers);
      if (usersArray.length > 0) {
        const latestUser = usersArray[usersArray.length - 1];
        setUserData(latestUser);
      }
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return <ProfileComponent userData={userData} />;
}

export default Profile;
