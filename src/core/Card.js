import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
  product,
  //showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
//   setRun = f => f,
//   run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);


  const addToCart = () => {
    // console.log('added');
    addItem(product, 
        () => {
        setRedirect(true)
    });
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (showAddToCartButton) => {
    return (
       showAddToCartButton && (
        <button onClick={addToCart} 
          className="btn btn-warning btn-block">
          Add toCart
        </button>
      )
    );
  };

  const handleChange = productId => event => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if(event.target.value >= 1){
        updateItem(productId, event.target.value)
    }  
  };

  const showCartUpdateOptions = cartUpdate => {
      return cartUpdate && <div>
          <div className="input-group mb-3">
            <div className="input-group prepend">
              <p style={{fontWeight: 'bold'}}>Adjust Quantity -</p>
            </div>
            <input type="number" className="form-control" value={count}
                onChange={handleChange(product._id)}/>
            </div>
      </div>
  }

  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => 
            removeItem(product._id)
            //setRun(!run); // run useEffect in parent Cart
          }
          className="btn btn-danger btn-block"
        >
          Remove
        </button>
      )
    );
  };

  return (
    <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <p className="card-p black-10">Price: $ {product.price}</p>
        <p className="card-p black-10">Weight: {product.weight}</p>
        {/* <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p> */}

  <br />

        {/* {showViewButton(showViewProductButton)} */}

        {showAddToCart(showAddToCartButton)}

        {showCartUpdateOptions(cartUpdate)}

        {showRemoveButton(showRemoveProductButton)} 
      </div> 
    </div>
  );
};

export default Card;