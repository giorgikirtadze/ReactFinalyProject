import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import filterProduct from './ProductFilter'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Product() {
    let [data, setData] = useState([])
    let [filter, setFilter] = useState(data)
    let [loading, setLoading] = useState(false)
    let componentMounted = true;


    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path)
    }


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            let response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());

                setFilter(await response.json());
                setLoading(false)
                console.log(filter);
            }
            return () => {
                componentMounted = false;;
            }; 
        }
        getProduct()
    }, [componentMounted])

    // const filterProduct = (cat) => {
    //     const updateList = data.filter((x) => x.category === cat);
    //     setFilter(updateList)
    // }
    

    const Loading = () => {
        return <>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
        </>
    }

    const ShowProducts = () => {
        return <div>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-dark me-2' onClick={() => {
                    setFilter(data)
                }}>ALL</button>
                <button className='btn btn-outline-dark me-2' onClick={() => {
                    filterProduct(data,"men's clothing", setFilter)
                }}>men's clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={() => {
                    filterProduct(data,"women's clothing", setFilter)
                }}>Women's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={() => {
                    filterProduct(data,"jewelery", setFilter)
                }}>jewelery</button>
                <button className='btn btn-outline-dark me-2' onClick={() => {
                    filterProduct(data, "electronics", setFilter)
                }}>electronics</button>
            </div>
            <div className='row'>
                {filter.map((product) => {
                    return (
                        <>
                            <div key={product.id} class='col-md-3 mb-4'>
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" height='250' alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p class="card-text fw-bold">{product.price}</p>
                                        <button class="btn btn-outline-dark" onClick={() => handleNavigation(`/SpecificProduct/${product.id}`)}>Go sommewhere</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div> 
    }
    console.log(filter);
  return (
    <div>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    </div>
  )
}
