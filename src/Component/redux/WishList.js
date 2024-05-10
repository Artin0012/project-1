import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { DoAddToCart, DoRemoveFromWishList } from './Action'
import { Link } from 'react-router-dom'
function WishList() {
    const inWishList = useSelector(state => state.reducerZar)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    // handleToCart
    const handleToCart = (id) => {
        dispatch(DoAddToCart(id));
        dispatch(DoRemoveFromWishList(id))
    }
    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'wishList')
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setLoading(false);
                setError(false);
                setProducts(response.data)
            })
            .catch(error => {
                setLoading(false);
                setError(true);
                setProducts([]);
            })
        return () => { }
    }, []);

    const wishListPart = products.map(product => {
        let wishListStyle = inWishList.find(wish => wish.id == product.id) ? 'block' : 'none'
        return (
            <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mx-auto mt-4 mt-sm-0 ' style={{ display: wishListStyle }}>
                <div className='row mt-5 text-center'>
                    <div style={{ height: '200px' }} className='col-12'>
                        <img src={product.image} alt={product.title} className='img-fluid' style={{ height: '100%' }} />
                    </div>
                    <div className='fw-bold mt-3 col-12' style={{ fontSize: '14px' }}>{product.title.slice(0, 30)}...</div>
                    <div className='text-danger mt-2 col-12' style={{ fontSize: '14px' }}>${product.price}</div>
                    <div className='mt-1 col-12' style={{ fontSize: '14px' }}><span>{product.rating.rate}</span><i className="bi bi-star-fill text-warning ms-1"></i></div>
                </div>
                <div className='mt-3'>
                    <button className='text-uppercase btn btn-success w-100' onClick={() => handleToCart(product.id)}>add to cart</button>
                    <button className='text-uppercase btn btn-danger w-100 mt-2' onClick={() => dispatch(DoRemoveFromWishList(product.id))}>remove from wishList</button>
                </div>

            </div>
        )
    })
    return (
        <div className='container fonts mt-5'>
            <div className='row'>
                {/* title */}
                <div className='col-12 mb-5'>
                    <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                    <span className='text-muted mx-2'>/</span>
                    <span className='text-muted text-capitalize'>wishlist</span>
                </div>
                {
                    loading ? (

                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-6 mx-auto text-center'>
                                    <div style={{ height: '200px' }}>
                                        <img src='loading-dots-5711313-4752313.gif' alt='loading' className='h-100 img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : error ? (
                        <div className='alert alert-danger w-100 col-12'>
                            Oops ! somthing went erong
                        </div>
                    ) : (
                        inWishList.length > 0 ?
                            wishListPart
                            : <div className='text-center text-danger'>wish List box is empty</div>
                    )
                }
            </div>
        </div>
    )
}

export default WishList