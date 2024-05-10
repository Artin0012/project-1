import React,{useEffect} from 'react'
import SliderProduct from './SliderProduct'
import { Link } from 'react-router-dom'

function ContactUs() {
    useEffect(()=>{
        localStorage.setItem('bgLinkOfHeader', 'contact us')
    })
    return (
        <>
            <div className='container my-5 fonts'>
                <div className='row'>
                    {/* title */}
                    <div className='col-12'>
                        <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                        <span className='text-muted mx-2'>/</span>
                        <span className='text-muted text-capitalize'>contact us</span>
                    </div>
                </div>
            </div>
            <div className='container fonts'>
                <div className='row'>
                    {/* leave massage */}
                    <div className='col-12 col-md-6'>
                        <form>
                            <div>
                                <label htmlFor='fullName'>name :</label>
                                <input type='text' name='fullName' id='fullName' className='form-control mt-2' />
                            </div>

                            <div className='mt-2'>
                                <label htmlFor='email'>email :</label>
                                <input type='email' name='email' id='email' className='form-control mt-2' />
                            </div>

                            <div className='mt-2'>
                                <label htmlFor='mobile'>mobile :</label>
                                <input type='number' name='mobile' id='mobile' className='form-control mt-2' />
                            </div>

                            <div className='mt-2'>
                                <label htmlFor='comment'>comment</label>
                                <textarea type='comment' name='comment' id='comment' className='form-control mt-2'></textarea>
                            </div>

                            <div className='mt-4'>
                                <button className='btn btn-outline-danger'>send comment</button>
                            </div>
                        </form>
                    </div>
                    {/* map and Links */}
                    <div className='col-12 col-md-6 mt-5 mt-md-0'>
                        {/* map */}
                        <div className='row'>
                            <div className='col-12 mt-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.7812999520424!2d46.9915368259884!3d35.31141528990167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff997e8a32a9c05%3A0x848e47d5bfb0ff11!2sEghbal%20Sq.%2C%20Sanandaj%2C%20Iran!5e0!3m2!1sen!2s!4v1693756733701!5m2!1sen!2s" width="100%" height="180px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            {/* contact */}
                            <div className='col-12 mt-3'>
                                <div className='d-flex'>
                                    <div className='bg-warning p-2'><i className="bi bi-envelope-fill text-white fs-5"></i></div>
                                    <div className='ms-3 flex-column d-flex align-self-center' style={{ fontSize: '14px' }}>
                                        <div className='text-uppercase fw-bold text-start'>email</div>
                                        <div className='text-muted'>artinzaza2121@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className='d-flex'>
                                    <div className='bg-warning p-2'><i className="bi bi-telephone-forward-fill text-white fs-5"></i></div>
                                    <div className='ms-3 flex-column d-flex align-self-center' style={{ fontSize: '14px' }}>
                                        <div className='text-uppercase fw-bold text-start'>mobile</div>
                                        <div className='text-muted'>09337519740</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className='d-flex'>
                                    <div className='bg-warning p-2'><i className="bi bi-geo-alt-fill text-white fs-5"></i></div>
                                    <div className='ms-3 flex-column d-flex align-self-center' style={{ fontSize: '14px' }}>
                                        <div className='text-uppercase fw-bold text-start'>address</div>
                                        <div className='text-muted'>iran,kurdistan,sanandaj</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        <SliderProduct />
                    }
                </div>
            </div>
        </>

    )
}

export default ContactUs