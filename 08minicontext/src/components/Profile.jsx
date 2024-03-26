import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

/*
This code snippet defines a component named Profile responsible for rendering the user's profile information. Let's break down its structure and functionality:
*/
function Profile(){

    const {user} = useContext(UserContext);
    if(!user) return <div><h1>Please Login First!!</h1></div>

    /*
Uses the useContext hook to access the UserContext.
Destructures the user object from the context, which presumably contains the user's profile information.
If the user object is falsy (likely indicating that the user is not logged in), it returns a message prompting the user to log in first.
    */

    return <div>
        Welcome {user.username} !!
    </div>

    /*
Renders the user's profile information, specifically displaying a welcome message with the username obtained from the user object.
    */


}

export default Profile;

/*
Reasoning:
User Context Usage:

Reasoning: Accessing the UserContext via useContext provides access to user-related data stored in the context, such as the current user's information.
Effect on Application: Enables dynamically rendering content based on the user's authentication status. In this case, if the user is not logged in (user object is falsy), it displays a message prompting the user to log in first.
Rendering User Profile:

Reasoning: Rendering the user's profile information (specifically the welcome message) provides a personalized experience for the logged-in user.
Effect on Application: Displays a welcoming message to the user, acknowledging their presence and providing a positive user experience upon successful login.

*/