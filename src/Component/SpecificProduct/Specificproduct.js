import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams, useNavigate } from 'react-router-dom'

import { useDispatch} from 'react-redux'
import { addCart } from '../../redux/action'
export default function SpecificProduct() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)


    const dispatch = useDispatch();
    const addPrduct=(product) => {
        dispatch(addCart(product))
    }


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if(!response.ok){
                    throw new Error(`Failed to fetch product with id ${id}`)
                }
                const productData = await response.json() 
                setProduct(productData);
                setLoading(false)
            }
            catch(error){
                console.error(error);
                setLoading(false)
            }
        };
        getProduct()
    }, [id])

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path)
    }

    const Loadingg = () => {
        return <div>
            <Skeleton height={400}/>
        </div>;
    };
    
    let ShowsProducts = () => {
        return (
            <div className='col-md-6 d-flex me-4'>
                {/* <div className='col-md-6'> */}
                    <img src={product.image} alt='sf' width='400' height='400' />
                {/* </div> */}
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead'>
                        Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4 me-4'>{product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark' onClick={() => addPrduct(product)}>Add To Cart</button>
                    <button className='btn btn-outline-dark' onClick={() => handleNavigation("/card")}>Go To Cart</button>

                </div>
            </div>
        )
    }
  return (
        <>
            <div className='container py-4'>
                <div className='row'>
                    {loading ? <Loadingg /> : <ShowsProducts />}
                </div>
            </div>
        </>
    )
}
