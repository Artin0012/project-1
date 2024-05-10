import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { DoAddToCart, DoAddToWishList } from './redux/Action'

function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState(null);
    const inCart = useSelector(state => state.reducerAri)
    const inWishList = useSelector(state => state.reducerZar)
    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)

            .then(response => {
                setLoading(false);
                setError(false);
                setProducts(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError(true);
                setProducts(null);
            })
    }, [])

    return (
        <div className='container mt-5 fonts'>
            <div className='row'>
                {/* title */}
                <div className='col-12'>
                    <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                    <span className='text-muted mx-2'>/</span>
                    <span className='text-muted text-capitalize'>details</span>
                </div>
                <div className='col-12 mt-5'>
                    <div className='row'>
                        {
                            loading ? (<div className='col-6 mx-auto' style={{ height: '200px' }}>
                                <div className='mt-3 h-100 mx-auto text-center' id='loader'>
                                    <div id='d1'></div>
                                    <div id='d2'></div>
                                    <div id='d3'></div>
                                    <div id='d4'></div>
                                    <div id='d5'></div>
                                </div>
                            </div>)
                                : error ? (<div className='col-6 mx-auto alert alert-danger'>Oops ! somthing went wrong</div>) :
                                    <>
                                        {/* image */}
                                        <div className='col-12 col-md-6'>
                                            <div style={{ height: '300px', width: '100%' }}>
                                                <img src={products.image} alt={products.title} className='img-fluid h-100 w-100' />
                                            </div>
                                        </div>
                                        {/* details */}
                                        <div className='col-12 col-md-6 mt-5 mt-md-0 text-center text-md-start'>
                                            <div className='fs-2 text-warning ShowHomeSliderTitle'>{"\u272F".repeat(Math.round(products.rating.rate))}</div>
                                            <div className='mt-2 fw-bold fs-5'>{products.title}</div>
                                            <div className='mt-2 text-muted'>{products.description}</div>
                                            <div className='mt-2 fw-bold text-success'> category : {products.category}</div>
                                            <div className='mt-2 text-danger fs-5 fw-bold '>${products.price}</div>
                                            <div className='mt-4'>
                                                {
                                                    inCart.find(cart => cart.id == products.id) ?

                                                        < button className='btn btn-success text-uppercase me-2' disabled={true}>in cart
                                                        </button> :
                                                        < button className='btn btn-success text-uppercase me-2' onClick={() => dispatch(DoAddToCart(products.id))}>add to cart </button>
                                                }

                                                {
                                                    inWishList.find(item => item.id == products.id) ?
                                                        < button className='btn btn-danger text-uppercase' disabled={true} >in wishlist</button> :
                                                        < button className='btn btn-danger text-uppercase' onClick={() => dispatch(DoAddToWishList(products.id))} >add to wishlist</button>
                                                }
                                            </div>
                                        </div>
                                    </>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detail