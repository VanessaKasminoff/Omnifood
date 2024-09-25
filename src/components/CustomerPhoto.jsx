import React from "react";

const CustomerPhoto = (props) => {
    return (
        <>
            <img className="customer-img" src={props.image} alt="Customer photo"/>
        </>
    );
};

export default CustomerPhoto;