import React from "react";
//import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
// import { getPurchaseHistory } from "./apiUser";
// import moment from "moment";

const Dashboard = () => {

    const {
            user: { _id, name, email, role }
        } = isAuthenticated();
            //const token = isAuthenticated().token;

        const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return(
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role === 1 ? "Admin" : "Registered User"}</li>
                </ul>
            </div>
        );
    };

    const purchaseHistory = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Purchase History</h3>
                <ul className="list-group">
                    <li className="list-group-item">history</li>
                </ul>
            </div>
        );
    };


    return (
        <div className="container"><br/>
            <h1>Hello {name}</h1>
            <div className="row" style={{margin: "5% 0% 8% 0%"}}> 
                 <div className="col-3">{userLinks()}</div>
                 <div className="col-9">
                     {userInfo()}
                     {/* {purchaseHistory()} */}
                 </div>
            </div>  
        </div>
    );
};

export default Dashboard;