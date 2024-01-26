import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { delCart } from '../../redux/action';

export default function Cart() {
  let [loading, setLoading] = useState(true);
  let [fullPrice, setFullPrice] = useState(0);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();


  const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path)
    }

  const removeProduct = (product) => {
    dispatch(delCart(product));
  };

  const fullPriceFunc = () => {
    let sum = state.reduce((total, item) => total + item.price, 0);
    setFullPrice(sum);
  };

  useEffect(() => {
    fullPriceFunc();
    pageLen();
  }, [state]);
   
  const pageLen = () => {
    setLoading(state.length <= 0);
  };

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
          <h1 onClick={() => handleNavigation("/")} className='text-danger' style={{cursor: 'pointer'}}>No Product</h1>
        </div>      
        ) : (
        <div style={{marginTop: '100px'}} className="container cart-container">
          <div className="row">
            <div className="col-lg-8">
              {state.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        Your Cart
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <img src={item.image} alt={item.title} width={100} height={100} className="product-image" />
                          </div>
                          <div className="col-sm-6">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.Description}</p>
                            <p className="card-text">{item.price}</p>
                          </div>
                          <div className="col-sm-3">
                            <button onClick={() => removeProduct(item)} type="button" className="btn btn-danger btn-sm">
                              <MdDelete onClick={() => removeProduct(item)} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  Checkout Summary
                </div>
                <div className="card-body">
                  <p>Total Items: {state.length}</p>
                  <p>Total Price: ${fullPrice}</p>
                  <button className="btn btn-primary btn-block">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    

    

    </div>
  );
}
