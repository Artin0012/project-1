import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='mt-5 fonts'>
            <div className='py-3' style={{ backgroundColor: 'rgb(220,60,40)' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-lg-3 d-flex flex-row justify-content-center justify-content-sm-start'>
                                    <div>
                                        <i className="bi bi-truck text-white fs-1"></i>
                                    </div>
                                    <div className='d-flex flex-column text-white align-self-center ms-2'>
                                        <div className='text-uppercase fw-bold' style={{ fontSize: '13px' }}>free shoping</div>
                                        <div className='' style={{ fontSize: '12px' }}>free on order over $99</div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3 d-flex flex-row justify-content-center justify-content-lg-start mt-3 mt-sm-0'>
                                    <div className=''>
                                        <i className="bi bi-recycle text-white fs-1"></i>
                                    </div>
                                    <div className='d-flex flex-column text-white align-self-center ms-2'>
                                        <div className='text-uppercase fw-bold' style={{ fontSize: '13px' }}>guarantee</div>
                                        <div className='' style={{ fontSize: '12px' }}>30 day money back</div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3 d-flex flex-row justify-content-center justify-content-sm-start mt-3 mt-sm-0'>
                                    <div className='ms-3 ms-sm-0'>
                                        <i className="bi bi-credit-card text-white fs-1"></i>
                                    </div>
                                    <div className='d-flex flex-column text-white align-self-center ms-2'>
                                        <div className='text-uppercase fw-bold' style={{ fontSize: '13px' }}>safe payment</div>
                                        <div className='' style={{ fontSize: '12px' }}>safe your online payment</div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3 d-flex flex-row justify-content-center justify-content-lg-start mt-3 mt-sm-0'>
                                    <div>
                                        <i className="bi bi-life-preserver text-white fs-1"></i>
                                    </div>
                                    <div className='d-flex flex-column text-white align-self-center ms-2'>
                                        <div className='text-uppercase fw-bold' style={{ fontSize: '13px' }}>online support</div>
                                        <div className='' style={{ fontSize: '12px' }}>we have support 24/7</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* link */}
            <div className='py-3 bg-opacity-50 imagbackfooter' style={{ backgroundColor: '#eee' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-lg-3 text-center text-sm-start '>
                                    <div className='text-uppercase fw-bold ' style={{ fontSize: '14px' }}>
                                        contact details
                                    </div>

                                    <div className='mt-3 ms-3 ms-sm-0'>
                                        <i className="bi bi-geo-alt"></i>
                                        <span className='ms-2' style={{ fontSize: '14px' }}>iran,kurdistan,sanandaj</span>
                                    </div>

                                    <div className='mt-3 ms-sm-0' style={{ marginLeft: '-10px' }}>
                                        <i className="bi bi-telephone"></i>
                                        <span className='ms-2' style={{ fontSize: '14px' }}>(+98)9187734420</span>
                                    </div>

                                    <div className='mt-3 ms-5 ms-sm-0'>
                                        <i className="bi bi-envelope"></i>
                                        <span className='ms-2' style={{ fontSize: '14px' }}>aslanisaman1@gmail.com</span>
                                    </div>
                                </div>
                                {/* section two */}
                                <div className='col-12 col-sm-6 col-lg-5 text-center text-sm-start mt-5 mt-sm-0'>
                                    <div className='text-uppercase fw-bold text-center ' style={{ fontSize: '14px' }}>
                                        hot line
                                    </div>

                                    <div className='mt-3 text-center'>
                                        <span className='' style={{ fontSize: '14px' }}>call us for free</span>
                                    </div>

                                    <div className='mt-1 text-center'>
                                        <span className='fs-2 text-danger fw-bold' style={{ fontSize: '14px' }}>(+98)9187734420</span>
                                    </div>

                                    <div className='mt-1'>
                                        <div className='row'>
                                            <div className='d-flex flex-row'>
                                            <div className='col-9'>
                                                <input type='text' name='newsletter' id='newsletter' className='form-control ' />
                                            </div>
                                            <div className='col-3 ms-2'>
                                                <button className='btn btn-outline-danger'>submit</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* section three */}
                                <div className='col-12 col-sm-6 col-lg-2 text-center text-sm-start mt-5 mt-lg-0'>
                                    <div className='fw-bold text-uppercase' style={{ fontSize: '14px' }}>may account
                                    </div>
                                    <ul className='list-unstyled mt-3' style={{ fontSize: '14px' }}>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>brands</Link>
                                        </li>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>gift certification</Link>
                                        </li>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>affiliates</Link>
                                        </li>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>wishlist</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* section four */}
                                <div className='col-12 col-sm-6 col-lg-2 text-center text-lg-start mt-5 mt-lg-0'>
                                    <div className='fw-bold text-uppercase' style={{ fontSize: '14px' }}>information
                                    </div>
                                    <ul className='list-unstyled mt-3' style={{ fontSize: '14px' }}>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>contact us</Link>
                                        </li>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>returns</Link>
                                        </li>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>site map</Link>
                                        </li>

                                        <li className='mt-2'>
                                            <Link to='/' className='text-capitalize text-muted'>specials</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* contact us */}
                        <hr className='mt-5' />
                        <div className='col-12 mt-3'>
                            <div className='row'>
                                <div className='col-12 col-lg-4 text-center text-lg-start'>
                                    <div className='fw-bold text-center' style={{ fontSize: '15px' }}>we are using safe payments</div>
                                    <div className='mt-2 mx-auto' style={{ width: '300px', height: '20px' }}>
                                        <img src='/images/payment.png' alt='images' style={{ width: '100%', height: '100%' }} />
                                    </div>
                                </div>
                                {/* social network */}
                                <div className='col-12 col-lg-4 text-center mt-4 text-lg-start mt-lg-0'>
                                    <div className='fw-bold text-center' style={{ fontSize: '15px' }}>we are using social network</div>
                                    <div className='mt-2 text-muted'>
                                        <i className="bi bi-twitter btn btn-outline-secondary iconshover"></i>
                                        <i className="bi bi-facebook mx-3 btn btn-outline-secondary iconshover"></i>
                                        <i className="bi bi-whatsapp btn btn-outline-secondary iconshover"></i>
                                        <i className="bi bi-instagram mx-3 btn btn-outline-secondary iconshover"></i>
                                        <i className="bi bi-telegram btn btn-outline-secondary iconshover"></i>
                                        <i className="bi bi-line ms-3 btn btn-outline-secondary iconshover"></i>
                                    </div>
                                </div>
                                {/* appliction */}
                                <div className='col-12 col-lg-4 text-center text-lg-start mt-4 mt-lg-0'>
                                    <div className='fw-bold text-center' style={{ fontSize: '15px' }}>download application</div>
                                    <div className='mt-2 text-muted text-center'>
                                        <img src='/images/apple-store.png' alt='apple' style={{ width: '130px', height: '35px' }} />
                                        <img src='/images/google-play-store.png' alt='google' style={{ width: '130px', height: '35px', marginLeft: '10px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* policy */}
            <div className='col-12 pt-3' style={{ backgroundColor: 'rgb(60,60,60)' }}>
                <div className='container'>
                    <div className='row text-center text-lg-start'>
                        <div className='col-12 col-lg-6' style={{ color: '#bbb', fontSize: '14px' }}>
                            <span>copy rigth</span><i className="bi bi-c-circle mx-1"></i><span>August 2023</span> <span className='mx-1 text-warning'>artin zare</span><span>all right reserved</span>
                        </div>

                        <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                            <ul className='list-unstyled d-flex flex-row justify-content-center'>
                                <li>
                                    <Link to='/' style={{ color: '#bbb', fontSize: '14px' }} className='text-capitalize'>About Us</Link>
                                </li>

                                <li className='border-start ps-2 ms-2'>
                                    <Link to='/' style={{ color: '#bbb', fontSize: '14px' }} className='text-capitalize'>Privacy Policy</Link>
                                </li>

                                <li className='border-start ps-2 ms-2'>
                                    <Link to='/' style={{ color: '#bbb', fontSize: '14px' }} className='text-capitalize'>Returns && Conditaion</Link>
                                </li>

                                <li className='border-start ps-2 ms-2'>
                                    <Link to='/' style={{ color: '#bbb', fontSize: '14px' }} className='text-capitalize'>Returns Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer