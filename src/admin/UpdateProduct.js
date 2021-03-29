import React, { useState, useEffect } from 'react';
//import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getProduct, updateProduct } from './apiAdmin';

const UpdateProduct = ({ match }) => {

        const [values, setValues] = useState({
        //Properties to create new product
        name: '',
        price: '',
        weight: '',
        photo: '',
        loading: false,
        error: false,
        //createdProduct: '', //initially it will be empty, but after creating product it will tell the user that prodcut has been crated
        redirectToProfile: false,
        formData: ''
    });

    const { user, token } = isAuthenticated();

    const {
        name,
        price,
        weight,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    const init = productId => {
        getProduct(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                   // description: data.description,
                    price: data.price,
                    weight: data.weight,
                    //category: data.category._id,
                    //shipping: data.shipping,
                    //quantity: data.quantity,
                    formData: new FormData()
                });
                // load categories
                //initCategories();
            }
        });
    };

        useEffect(() => {
            init(match.params.productId);
    }, []);


        const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

        const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

                updateProduct(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    photo: '',
                    price: '',
                    weight: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdProduct: data.name
                });
            }
        });
    };


        const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit} >
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input  onChange={handleChange('price')} type="number" 
                    step="0.01" className="form-control" value={price} />
            </div>

            <div className="form-group">
                <label className="text-muted">Weight</label>
                <input onChange={handleChange('weight')} type="text" className="form-control" value={weight} />
            </div>

            <button className="btn btn-outline-primary">Update Product</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            <h2>{`${createdProduct}`} is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/" />;
            }
        }
    };
        
    return (
        <div> 
            <h1>{user.name}, ready to add a new product?</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    {redirectUser()}
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;