import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { DoAddToCart } from './redux/Action'
import { useDispatch, useSelector } from 'react-redux';

function Shop() {
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const [orderBy, setOrderBy] = useState('default')
    const dispatch = useDispatch()
    const incart = useSelector(state => state.reducerAri)

    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'shop')
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setLoading(false);
                setError(false);

                if (!Boolean(JSON.parse(localStorage.getItem('category'))) && !Boolean(JSON.parse(localStorage.getItem('search')))) {
                    setProducts(response.data);
                }
                else if (Boolean(JSON.parse(localStorage.getItem('category'))) && JSON.parse(localStorage.getItem('category')) == 'all') {
                    setProducts(response.data);
                }
                else if (Boolean(JSON.parse(localStorage.getItem('category'))) && JSON.parse(localStorage.getItem('category')) != 'all') {
                    setProducts(response.data.filter(product => product.category == JSON.parse(localStorage.getItem('category'))))
                }
                else if (Boolean(JSON.parse(localStorage.getItem('search')))) {
                    let myArray = [];
                    response.data.map(item => {
                        if (item.title.toLowerCase().includes(JSON.parse(localStorage.getItem('search'))) || item.description.toLowerCase().includes(JSON.parse(localStorage.getItem('search')))) {
                            myArray.push(item)
                        }
                    });
                    setProducts(myArray)
                }

            })
            .catch(error => {
                setLoading(false);
                setError(true);
                setProducts([])
            })
        return () => { }
    }, [JSON.parse(localStorage.getItem('category')) || JSON.parse(localStorage.getItem('search'))])

    const goToDetails = useNavigate()
    const handleDetails = (id) => {
        goToDetails(`/shop/${id}`)
    }

    const productList = products.sort((itemOne, itemTow) => {
        if (orderBy === 'priceHighToLow') {
            return (itemTow.price - itemOne.price)

        }
        else if (orderBy === 'priceLowToHigh') {
            return (itemOne.price - itemTow.price)
        }

        else if (orderBy === 'rate') {
            return (itemTow.rating.rate - itemOne.rating.rate)
        }
    }).map((product) => {
        let disableAddToCart = incart.find(cart => cart.id == product.id) ? true : false
        return (
            <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mt-4 '>
                <div style={{ height: '200px', width: '80%' }} className='mx-auto mt-3 mt-sm-0' onClick={() => handleDetails(product.id)} >
                    <img src={product.image} alt={product.title} style={{ height: '100%', width: '100%' }} className='img-fluid' />
                </div>
                <div className='mt-3 text-center fw-bold' style={{ fontSize: '14px' }}>{product.title.slice(0, 30)}...</div>

                <div className='mt-2 text-center text-danger' style={{ fontSize: '16px' }}>${product.price}</div>

                <div className='mt-2 text-center' style={{ fontSize: '16px' }}>{product.rating.rate} <i className="bi bi-star-fill text-warning "></i></div>

                <button className='btn btn-outline-dark text-uppercase w-100 mt-2' disabled={disableAddToCart} onClick={() => dispatch(DoAddToCart(product.id))}>
                    {
                        disableAddToCart ? 'in cart' : 'add to cart'
                    }
                </button>
            </div>
        )
    })

    return (
        <div className='mt-5 fonts'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                            {/* title */}
                            <div className='col-12'>
                                <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                                <span className='text-muted mx-2'>/</span>
                                <span className='text-muted text-capitalize'>about us</span>
                            </div>

                    <div className='col-12 mb-4'>
                        <div className='row'>
                            {
                                products.length > 0 ?
                                    <div className='col-4 mx-auto'>
                                        <select name='orderBy' id='orderBy' className='form-select' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                                            <option value='default' key='order'>order buy</option>
                                            <option value='priceHighToLow' key='priceHighToLow'>price : High To Low</option>
                                            <option value='priceLowToHigh' key='priceLowToHigh'>price : Low To High</option>
                                            <option value='rate' key='rate'>rate</option>
                                        </select>
                                    </div> : ''
                            }
                        </div>
                    </div>
                    {
                        Loading ? (
                            <div className='col-12 mt-4'>
                                <div className='row'>
                                    <div className='col-3 col-lg-2 mx-auto text-center'>
                                        <div style={{ height: '200px' }}>
                                            <div className='h-100' id='loader'>
                                                <div id='d1'></div>
                                                <div id='d2'></div>
                                                <div id='d3'></div>
                                                <div id='d4'></div>
                                                <div id='d5'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : Error ? (
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-6 mx-auto text-center w-100'>
                                        <div className='alert alert-danger'>
                                            Oops ! somthing went wrong
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            products.length > 0 ? productList : <div className='text-center text-danger col-12 fs-5'>no match</div>

                        )}
                </div>
            </div>
        </div>
    );
};


export default Shop