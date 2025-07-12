function UserProfile(Props){
    return (
        <div>
            <h2>{Props.name}</h2>
            <p>Age: {Props.age}</p>
            <p>Bio: {Props.bio}</p>
        </div>
    );
};

export default UserProfile;