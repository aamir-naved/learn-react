import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";


function Profile(){

    const {user} = useContext(UserContext);
    if(!user) return <div><h1>Please Login First!!</h1></div>

    return <div>
        Welcome {user.username} !!
    </div>


}

export default Profile;