function Profile(props){
    return(
        <>
        <img src={props.frontPic} alt="Profile Photo" />
        <h2>{props.description}</h2>
        <p>{props.paragraph}</p>   
        </>
    );
}

export default Profile;