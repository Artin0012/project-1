import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DoEmptyAllWishList, DoEmptyAllcart } from './redux/Action'

function CheckOut() {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'checkout')
    })
    const [addressError, setAddressError] = useState(true);
    const [countryError, setCountryError] = useState(true);
    const [zipError, setZipError] = useState(true);
    const [cityError, setCityError] = useState(true);
    // handleContinueShopping
    const handleContinueShopping = () => {
        localStorage.setItem('bgLinkOfHeader', 'shop')
        goShop('/shop')
    }
    let addressValid = /^[a-z\d\-\.\s]+$/i;
    let countryValid = /^[a-z\s]+$/i;
    let zipValid = /^[\d]+$/i;
    let cityValid = /^[a-z\s]+$/i;
    // handleSubmit
    const goShop = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let modalCantainer = document.querySelector('.modalCantainer')
        if (!addressError && !countryError && !zipError && !cityError) {
            let thankYou = document.querySelector('.thankYou')
            modalCantainer.setAttribute('style', 'position:fixed;top:0;left:0;width:100%;height:100%;background-color:#333;opacity:0.5;z-index:99')
            thankYou.style.visibility = 'visible';
            thankYou.style.transition = '2s';
            thankYou.style.opacity = 1;
            thankYou.classList.add('modalAnimation');
            localStorage.setItem('login', JSON.stringify(false))
            localStorage.removeItem('total')
            localStorage.setItem('bgLinkOfHeader', 'home')
        } else {
            modalCantainer.setAttribute('style', '')
            let errorSection = document.querySelector('.errorSection')
            errorSection.innerHTML = 'Oops ! somthing went wrong'
            errorSection.classList.add('alert')
            errorSection.classList.add('alert-danger')
        }
    }
    if (
        JSON.parse(localStorage.getItem('login')) == true &&
        JSON.parse(localStorage.getItem('total')) > 0
    ) {
        return (
            <>

                <div className='modalCantainer'></div>
                <div className='container my-5 fonts'>
                    {/* modal box */}
                    <div className='row'>
                        <div className='col-9 col-md-6 mx-auto text-center mt-3 thankYou border bg-white rounded-1 py-4 px-2' style={{ position: 'fixed', top: '250px', zIndex: 999, left: '50%', transform: 'translate(-50%)', visibility: 'hidden', opacity: 0 }}>
                            <div className=''>
                                <div className='fw-bold' style={{ fontSize: '14px' }}>thank you for your shopping</div>
                                <div className='mt-2 text-muted' style={{ fontSize: '12px' }}>a confirmation email was send</div>
                                <div className='mt-4'><button className='btn btn-outline-danger' onClick={handleContinueShopping}>continue shopping</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 text-capitalize mb-4'>
                            <Link to='/' className='text-muted'>home</Link>
                            <span className='mx-1'>/</span>
                            <span className=''>checkout</span>
                        </div>
                        <div className='col-12 errorSection text-center'></div>
                        {/* form */}
                        <div className='col-12 col-md-9'>
                            <form className='row' onSubmit={handleSubmit}>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='firstName'>firstName :</label>
                                    <input type='text' name='firstName' id='firstName' className='form-control mt-2' disabled={JSON.parse(localStorage.getItem('contacts')).firstName ? true : false}
                                        value={JSON.parse(localStorage.getItem('contacts')) ? JSON.parse(localStorage.getItem('contacts')).firstName : ''} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='lastName'>lastName :</label>
                                    <input type='text' name='lastName' id='lastName' className='form-control mt-2' disabled={JSON.parse(localStorage.getItem('contacts')).lastName ? true : false}
                                        value={JSON.parse(localStorage.getItem('contacts')) ? JSON.parse(localStorage.getItem('contacts')).lastName : ''} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='email'>email :</label>
                                    <input type='email' name='email' id='email' className='form-control mt-2' disabled={JSON.parse(localStorage.getItem('contacts')).email ? true : false}
                                        value={JSON.parse(localStorage.getItem('contacts')) ? JSON.parse(localStorage.getItem('contacts')).email : ''} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='mobile'>mobile :</label>
                                    <input type='number' name='mobile' id='mobile' className='form-control mt-2' disabled={JSON.parse(localStorage.getItem('contacts')).mobile ? true : false}
                                        value={JSON.parse(localStorage.getItem('contacts')) ? JSON.parse(localStorage.getItem('contacts')).mobile : ''} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='address'>address :</label>
                                    <input type='text' name='address' id='address' className='form-control mt-2' onChange={(e) => {
                                        if (addressValid.test(e.target.value)) {
                                            setAddressError(false);
                                            e.target.classList.remove('text-danger')
                                            e.target.classList.add('text-success')
                                        } else {
                                            setAddressError(true);
                                            e.target.classList.remove('text-success')
                                            e.target.classList.add('text-danger')
                                        }
                                    }} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='country'>country :</label>
                                    <input type='text' name='country' id='country' className='form-control mt-2' onChange={(e) => {
                                        if (countryValid.test(e.target.value)) {
                                            setCountryError(false);
                                            e.target.classList.remove('text-danger')
                                            e.target.classList.add('text-success')
                                        } else {
                                            setCountryError(true);
                                            e.target.classList.remove('text-success')
                                            e.target.classList.add('text-danger')
                                        }
                                    }} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='zipCode'>zip code :</label>
                                    <input type='number' name='zipCode' id='zipCode' className='form-control mt-2' onChange={(e) => {
                                        if (zipValid.test(e.target.value)) {
                                            setZipError(false);
                                            e.target.classList.remove('text-danger')
                                            e.target.classList.add('text-success')
                                        } else {
                                            setZipError(true);
                                            e.target.classList.remove('text-success')
                                            e.target.classList.add('text-danger')
                                        }
                                    }} />
                                </div>
                                <div className='col-6 mt-2'>
                                    <label htmlFor='city'>town/city :</label>
                                    <input type='text' name='city' id='city' className='form-control mt-2' onChange={(e) => {
                                        if (cityValid.test(e.target.value)) {
                                            setCityError(false);
                                            e.target.classList.remove('text-danger')
                                            e.target.classList.add('text-success')
                                        } else {
                                            setCityError(true);
                                            e.target.classList.remove('text-success')
                                            e.target.classList.add('text-danger')
                                        }
                                    }} />
                                </div>
                                <div className='col-12 mt-4'>
                                    <button className='btn btn-outline-dark w-100'>submit</button>
                                </div>
                            </form>
                        </div>
                        {/* subtotal */}
                        <div className='col-12 col-md-3 mt-5 mt-md-3 text-center'>
                            <div className='fw-bold text-uppercase'>payment method</div>
                            <div className='mt-3 text-capitalize text-muted border-top pt-3'>check
                                <span className='mx-1'>/</span> mony</div>
                            <div className='mt-3 text-capitalize text-muted'>credit cart</div>
                            <div className='mt-3 border-top pt-3'>
                                <label htmlFor='bank'>direct bank transder</label>
                                <input type='radio' name='payment' id='bank' className='form-check-input ms-2' />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor='visa'>visa</label>
                                <input type='radio' name='payment' id='visa' className='form-check-input ms-2' />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor='payPal'>payPal</label>
                                <input type='radio' name='payment' id='payPal' className='form-check-input ms-2' />
                            </div>
                            <div className='mt-3 text-capitalize clearfix border-top pt-3'>
                                <div style={{ float: 'left' }}>grand total</div>
                                <div className='text-danger fw-bold' style={{ float: 'right' }}>${JSON.parse(localStorage.getItem('total')) > 0 ? JSON.parse(localStorage.getItem('total')) : 0}</div>
                            </div>
                            <div className='text-center mt-4'>
                                <button className='btn btn-outline-danger'>place order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        if (JSON.parse(localStorage.getItem('login')) != true) {
            return (
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 text-center alert alert-danger'>you r not login</div>
                        <div className='col-12 text-center mt-2'>
                            <Link to='/login' onClick={() => localStorage.setItem('bgLinkOfHeader', 'login')}>go to login page ? </Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 text-center aler alert-danger'>you r cart is empty</div>
                        <div className='col-12 text-center mt-2'>
                            <Link to='/shop' onClick={() => localStorage.setItem('bgLinkOfHeader', 'shop')}>go to shop page ? </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default CheckOut