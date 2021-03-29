import React, {useState, useEffect} from "react";
import {getProducts} from "./apiCore";
import Card from "./Card";

const Shop = () => {

    const [error, setError] = useState(false);
    
    const [productsList, setProductsList] = useState([]);

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsList(data);
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return(
        <>
            <div className="container-fluid"> 
            <h2 className="mb-4">Products Available at Aquaponics Store.....</h2>
                <div className="row">
                        {/* {JSON.stringify(productsList)} */}
                        
                         <div className="row" style={{margin: "0% 5%"}}>
                        {productsList.map((product, i) => (
                             <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;

