import { useState } from "react";

function Profile(props){
    const [profileData, setProfileData] = useState(
        {
            profileImg: '',
            FrontPic: '',
            frontText: ''
        }
    );

    return(
        <>
        <img src={profileData.profileImg} alt="Profile Photo" />
        <h2>{profileData.FrontPic}</h2>
        <p>{profileData.frontText}</p>   
        </>
    );
}

export default Profile;