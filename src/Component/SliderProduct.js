import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

function SliderProduct() {
    const [minSliderShow, setMinSliderShow] = useState(0);
    const [maxSliderShow, setMaxSliderShow] = useState(1);
    // start use reducer
    const initialValue = {
        Loading: true,
        Error: false,
        Product: []
    }
    const sendRequest = 'sendRequest'
    const sendError = 'sendError'
    const sendResponse = 'sendResponse'

    function getRequest() {
        return {
            type: sendRequest
        }
    }
    function getError() {
        return {
            type: sendError
        }
    }
    function getResponse(success) {
        return {
            type: sendResponse,
            payLoad: success
        }
    }
    const reducer = (state = initialValue, action) => {
        switch (action.type) {
            case sendRequest:
                return {
                    Loading: true,
                    Error: false,
                    Product: []
                }
            case sendError:
                return {
                    Loading: false,
                    Error: true,
                    Product: []
                }
            case sendResponse:
                return {
                    Loading: false,
                    Error: false,
                    Product: action.payLoad
                }
            default:
                return state
        }
    }
    const [value, dispatch] = useReducer(reducer, initialValue)
    const mainData = () => {
        dispatch(getRequest());
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                dispatch(getResponse(response.data))
            })
            .catch((error) => {
                dispatch(getError())
            })
    }
    // end use reducer
    // resizing
    window.addEventListener('resize', e => {
        if (e.target.innerWidth >= 992) {
            setMaxSliderShow(4);
            setMinSliderShow(0);
        } else if (e.target.innerWidth >= 768 && e.target.innerWidth < 992) {
            setMaxSliderShow(3);
            setMinSliderShow(0);
        } else if (e.target.innerWidth >= 576 && e.target.innerWidth < 768) {
            setMaxSliderShow(2);
            setMinSliderShow(0);
        } else {
            setMaxSliderShow(1);
            setMinSliderShow(0);
        }
    })
    useEffect(() => {
        mainData();
        if (window.innerWidth >= 992) {
            setMaxSliderShow(4);
            setMinSliderShow(0);
        } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
            setMaxSliderShow(3);
            setMinSliderShow(0);
        } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
            setMaxSliderShow(2);
            setMinSliderShow(0);
        } else {
            setMaxSliderShow(1);
            setMinSliderShow(0);
        }

        return () => { }
    }, [])

    const productList = value.Product.map(product => {
        let myStyle = value.Product.indexOf(product) < maxSliderShow && value.Product.indexOf(product) >= minSliderShow ? 'block' : 'none'

        return (
            <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 text-center' style={{ display: myStyle }}>
                <div className='w-100' style={{ height: '200px', width: '100%' }}>
                    <img src={product.image} alt={product.title} className='img-fluid h-100' />
                </div>
                <div className='mt-2 fw-bold' style={{ fontSize: '14px' }}>
                    {product.title.slice(0, 20)} ...
                </div>
                <div className='mt-2 fs-5 text-center'>{product.rating.rate} <i className="bi bi-star-fill text-warning "></i>
                </div>
                <div className='fs-5 mt-2 text-danger text-center'>${product.price}</div>
            </div>
        )
    })
    // Next Axios
    const handleAxiosProductNext = () => {
        if (maxSliderShow < value.Product.length) {
            setMaxSliderShow(maxSliderShow + 1)
            setMinSliderShow(minSliderShow + 1)
        }
    }
    // prev Axios
    const handleAxiosProductPrev = () => {
        if (minSliderShow > 0) {
            setMaxSliderShow(maxSliderShow - 1)
            setMinSliderShow(minSliderShow - 1)
        }
    }


    return (
        <div className='container border-top fonts' style={{ position: 'relative',marginTop:'115px' }}>
            <div className='row d-flex flex-row justify-content-center mt-3'>
            
                {
                    value.Loading ? <div className='mt-3' id='loader'>
                        <div id='d1'></div>
                        <div id='d2'></div>
                        <div id='d3'></div>
                        <div id='d4'></div>
                        <div id='d5'></div>
                    </div> : value.Error ? <div className='alert alert-danger text-center'>Oops ! samthing went wrong</div> :
                        productList}
            </div>
            {
                maxSliderShow < value.Product.length &&
                <i className="bi bi-arrow-right-square-fill fs-1" style={{ position: 'absolute', top: '40%', right: '3%' }} onClick={handleAxiosProductNext}></i>
            }

            {
                minSliderShow > 0 &&
                <i className="bi bi-arrow-left-square-fill fs-1" style={{ position: 'absolute', top: '40%', left: '3%' }} onClick={handleAxiosProductPrev}></i>
            }
        </div>
    )
}

export default SliderProduct