import React, { useState, useEffect } from 'react';
import { createOrder } from "./apiCore";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { emptyCart } from './cartHelpers';
import Card from './Card';

const Checkout = ({ products }) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: '',
        contact: ''
    });

    //fetching the user id and token after authentication
    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const {
        loading,
        success,
        clientToken,
        error,
        instance,
        address,
        formData,
        contact
    } = data;

    useEffect(() => {
        setData({...data, formData: new FormData()})
    }, []);

    //handling the user address
    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };

    //handling the user contact
    const handleContact = event => {
        setData({ ...data, contact: event.target.value });
    };

    //calculating the total 
    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    //functionality on the checkout button based on the user authentication
    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
            //<button className="btn btn-success" onClick={handleShow}>Checkout</button>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">
                Sign in toCheckout
            </button>
        </Link>
    )};

    let deliveryAddress = data.address;

    const clickSubmit = () => {
       // event.preventDefault();
        setData({ loading: true });
        // send the nonce to your server
        // nonce = data.instance.requestPaymentMethod()
        //let nonce;
        //let getNonce = data.instance
        //let getAddress = data.address
            //.requestPaymentMethod()
           // .then(data => {
                // console.log(data);
                       //nonce = data.nonce;
                       //address = data.address;
                // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
                // and also total to be charged
                console.log("total to process: ",getTotal(products));

                const createOrderData = {
                    //paymentMethodNonce: nonce,
                    products: products,
                    amount: getTotal(products),
                    userAddress: deliveryAddress,
                    contact: data.contact
                };

                // processPayment(userId, token, paymentData)
                //     .then(response => {
                //         console.log(response);
                //         // empty cart
                //         // create order

                //         const createOrderData = {
                //             products: products,
                //             transaction_id: response.transaction.id,
                //             amount: response.transaction.amount,
                //             address: deliveryAddress
                //         };

                        createOrder(userId, token, createOrderData)
                            .then(data => {
                                emptyCart(() => {
                                    //setRun(!run); // run useEffect in parent Cart
                                    console.log('payment success and empty cart');
                                    setData({
                                        loading: false,
                                        success: true
                                    });
                                });
                            })
                            .catch(error => {
                                console.log(error);
                                setData({ ...data,
                                    address: '',
                                    contact: '',
                                    loading: false,});
                            });
                    //})
                    // .catch(error => {
                    //     console.log(error);
                    //     setData({ loading: false });
                    // });
            //})
            // .catch(error => {
            //     // console.log("dropin error: ", error);
            //     setData({ ...data, error: error.message });
            // });
    }


    const showDropIn = () => (
        <form className="mb-3" onSubmit={clickSubmit} >
    {/* <div onBlur={() => setData({ ...data, error: '' })}> */}
           {/* { */}
            {/* data.clientToken !== null && 
           products.length > 0 ? ( */}
                <div>

                    <div style={{color: 'red'}}>
                        * please mention your correct address with postal code<br/>
                        * also enter your contact number in correct format<br/>
                        * without both these details your order will not be processed
                    </div><br/>

                    <div className="gorm-group mb-3">
                        <label className="text-muted" style={{fontWeight: 'bold'}}><h5>Delivery address:</h5></label>
                        <textarea
                            onChange={handleAddress}
                            className="form-control"
                            //value={data.address}
                            placeholder="Type your delivery address here..."
                        />
                    </div>

                    <div className="gorm-group mb-3">
                        <label className="text-muted" style={{fontWeight: 'bold'}}><h5>Contact Number:</h5></label>
                        <input type="text"
                            onChange={handleContact}
                            className="form-control"
                            //value={data.address}
                            placeholder="+1 (000)000-000"
                        />
                    </div>

                    <div>
                        <h5 style={{color: '#6c757d'}}>You can transter the money via Interac e-Transfer, on the below mentioned details...</h5>
                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>Name: Bryan Bradford <br/>
                            Email:Bryan@MetchosinAquaponics.com <br/>
                            Contact Number: +1 (250) 883-3845</p>
                    </div><br/>

                    <button className="btn btn-success btn-block">
                        Create Order
                    </button>
                </div>
            {/* ) : null}
        </div> */}
        </form>
    );

    const showError = error => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = success => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Thanks! Your order has been placed!
        </div>
    );

    const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
            {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}
        </div>
    );
};

export default Checkout;