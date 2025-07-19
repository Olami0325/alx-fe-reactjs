function UserProfile(props){
    return (
        <div style={{border : "1px solid grey", margin : "10px", padding : "10px", borderRadius : "5px", boxShadow: "0 2px 4px black", background : "lightBlue"}}>
            <h2 style={{ fontSize : "32px", color : "blue", fontWeight : "bold"}}>{props.name}</h2>
            <p>Age: <span  style={{fontSize : "16px", color : "red"}}>{props.age}</span></p>
            <p style={{fontSize : "16px", color : "red"}}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;