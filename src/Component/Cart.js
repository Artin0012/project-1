import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DoAddToCart, DoRemoveFromCart, DoEmptyCart, DoEmptyAllcart,DoEmptyAllWishList } from './redux/Action'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
    const inCart = useSelector(state => state.reducerAri)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'cart')
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setLoading(false);
                setError(false);
                setProduct(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError(true);
                setProduct([]);
            })
        return () => { }
    }, [])
    let subtotal = 0;
    const cartList = product.map(product => {
        if (inCart.find(cart => cart.id == product.id)) {
            subtotal += product.price * (inCart.find(cart => cart.id == product.id)
                && inCart.find(cart => cart.id == product.id).count);
        }
        let cartStyle = inCart.find(cart => cart.id == product.id) ? 'block' : 'none'
        return (
            <div key={product.id} className='border-bottom pb-4 mt-3 fonts' style={{ display: cartStyle }}>
                <div className='col-12'>
                    <div className='row d-flex'>
                        <div className='col-12 col-md-6'>
                            <div className='row d-flex'>
                                <div className='col-3' style={{ height: '50px', width: '60px' }}>
                                    <img src={product.image} alt={product.title} style={{ height: '100%', width: '100%' }} />
                                </div>
                                <div className='col-9 d-flex flex-column align-self-center' style={{ fontSize: '14px' }}>{product.title}</div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mt-4 mt-md-0' style={{ lineHeight: '50px' }}>
                            <div className='row'>

                                <div className='col-2 fw-bold text-danger'>
                                    ${String(product.price * (inCart.find(cart => cart.id == product.id)
                                        && inCart.find(cart => cart.id == product.id).count)).indexOf('.') != -1 ? String(product.price * (inCart.find(cart => cart.id == product.id)
                                            && inCart.find(cart => cart.id == product.id).count)).slice(0, String(product.price * (inCart.find(cart => cart.id == product.id)
                                                && inCart.find(cart => cart.id == product.id).count)).indexOf('.') + 3) : String(product.price * (inCart.find(cart => cart.id == product.id)
                                                    && inCart.find(cart => cart.id == product.id).count))}</div>

                                <div className='col-4 ' style={{ lineHeight: '35px' }}>
                                    <div className='p-2 row'>
                                        <i className="bi bi-dash-circle-fill text-danger col-4 text-end fs-5" onClick={() => dispatch(DoRemoveFromCart(product.id))}></i>
                                        <i className="bi bi-plus-circle-fill text-success col-4 fs-5" onClick={() => dispatch(DoAddToCart(product.id))}></i>
                                        <span className='col-2 text-black'>{inCart.find(cart => cart.id == product.id) && inCart.find(cart => cart.id == product.id).count}</span>
                                    </div>
                                </div>
                                <div className='col-2 text-center'>
                                    <i className="bi bi-trash-fill text-danger fs-5" onClick={() => dispatch(DoEmptyCart(product.id))}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    // handleCheckOut
    const goToLogin = useNavigate()
    const goToCheckOut = useNavigate()
    const handleCheckOut = () => {
        if (JSON.parse(localStorage.getItem('login'))) {
            localStorage.setItem('total', JSON.stringify(String(subtotal).slice(0, Number(String(subtotal).indexOf('.') + 3))))
            localStorage.setItem('bgLinkOfHeader','checkout')
            dispatch(DoEmptyAllWishList())
            dispatch(DoEmptyAllcart())
            goToCheckOut('/checkout')
        } else {
            localStorage.setItem('total', JSON.stringify(String(subtotal).slice(0, Number(String(subtotal).indexOf('.') + 3))))
            goToLogin('/login')
        }
    }
    return (
        <>
            <div className='container my-5 fonts'>
                <div className='row'>
                    {/* title */}
                    <div className='col-12'>
                        <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                        <span className='text-muted mx-2'>/</span>
                        <span className='text-muted text-capitalize'>cart</span>
                    </div>
                </div>
            </div>

            {
                loading ? (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-6 mx-auto text-center'>
                                        <div style={{ height: '200px' }}>
                                            <img src='loading-dots-5711313-4752313.gif' alt='loading' className='h-100 img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : error ? (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-6 mx-auto text-center w-100'>
                                        <div className='alert alert-danger'>
                                            Oops ! somthing went wrong
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<>
                    <div className='container'>{cartList}</div>
                    {/* order summary */}
                    <div className='container mt-3 fonts'>
                        <div className='row'>
                            {
                                inCart.length > 0 ?
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-6 mx-auto border p-3 bg-secondary bg-opacity-25 '>
                                                <div className='row'>
                                                    <div className='col-12 fw-bold'>order summary</div>
                                                    {/* total */}
                                                    <div className='col-12 col-sm-6'>
                                                        <div className='clearfix pb-2'>
                                                            <div style={{ float: 'left' }}>subtotal</div>
                                                            <div style={{ float: 'right' }} className='fw-bold'>${String(subtotal).slice(0, Number(String(subtotal).indexOf('.') + 3))}</div>
                                                        </div>
                                                        <div className='clearfix my-2'>
                                                            <div style={{ float: 'left' }}>shipping</div>
                                                            <div style={{ float: 'right' }} className='fw-bold'>free shipping</div>
                                                        </div>
                                                        <div className='clearfix border-top border-white pt-2 '>
                                                            <div style={{ float: 'left' }}>total</div>
                                                            <div style={{ float: 'right' }} className='fw-bold'>${String(subtotal).slice(0, Number(String(subtotal).indexOf('.') + 3))}</div>
                                                        </div>
                                                    </div>
                                                    {/* checkout */}
                                                    <div className='col-12 col-sm-6'>
                                                        <div className=''>
                                                            <button className='btn btn-danger w-100' onClick={handleCheckOut}>checkout</button>
                                                        </div>
                                                        <div className='mt-2'>
                                                            <button className='btn btn-warning w-100' onClick={() => dispatch(DoEmptyAllcart())}>clear shopping cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    <>
                                        <div className='alert alert-danger text-center text-capitalize'>the cart is empty
                                        </div>
                                        <div className='col-12 mt-4'>
                                            <div className='row'>
                                                <div className='col-6 mx-auto text-center fs-5'>
                                                    <Link to='/shop' className='text-success fw-bold' onClick={() => localStorage.setItem('bgLinkOfHeader', 'shop')}>
                                                        <span>continue shopping</span>
                                                        <i className="bi bi-bag-check-fill text-success ms-1"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </>)}

        </>
    )
}

export default Cart