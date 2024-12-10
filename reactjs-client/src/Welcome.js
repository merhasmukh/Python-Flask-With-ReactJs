import React from "react";

// Functional Component
const Welcome = (props) => {
    return (
        <div>
            <h2>Welcome, {props.name}!</h2>
            <p>{props.message}</p>
        </div>
    );
};

export default Welcome;
