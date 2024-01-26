import React, { useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './Header.css'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
export default function Header() {

    const state = useSelector((state) => state.handleCart)

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path)
    }
    return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-white shadow-sm py-3">
            <div class="container">
                <a class="navbar-brand fw-bold fs-4" onClick={() => handleNavigation("/")}>Shop-Collect</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" onClick={() => handleNavigation("/")}>Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => handleNavigation("/Products")}>Product</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => handleNavigation("/AboutMe")}>About</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => handleNavigation("/ContactUs")}>Contact</a>
                    </li>
                    
                    <isVisible />
                </ul>
                <div className='buttons'>
                    <button className='btn btn-outline-dark ms-3' onClick={() => handleNavigation("/Login")}><i className='fa fa-sign-in me-1'></i> Login</button>
                    <button className='btn btn-outline-dark ms-3' onClick={() => handleNavigation("/Register")}><i className='fa fa-user-plus me-1'></i> Register</button>
                    <button className='btn btn-outline-dark ms-3' onClick={() => handleNavigation("/Card")}><i className='fa fa-cart-plus me-1'></i> Card ({state.length})</button>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}