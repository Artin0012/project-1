import React, { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { DoEmptyAllcart, DoEmptyAllWishList } from './redux/Action'
import { Link, useNavigate } from 'react-router-dom'

function LogIn() {
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'login')
    })
    let emailValid = /^[a-z]+[a-z\.\-\_\d]+[\@][a-z]+([a-z\d\-]+)?[\.][a-z]+([a-z/.]+)?$/i;
    let passwordValid = /^[a-z]{3,}[A-Z]+[\d]+[\W]+$/;
    // error section
    const [emailValidError, setEmailValidError] = useState(true);
    const [passwordValidError, setPasswordValidError] = useState(true);
    const [showpassword, setShowpassword] = useState(false);
    // handleLogin
    const goToHome = useNavigate();
    const goToCheckOut = useNavigate();
    const handleLogin = (e) => {
        let errorSection = document.querySelector('.errorSection')
        e.preventDefault();

        if (!emailValidError && !passwordValidError) {
            let getContacts = JSON.parse(localStorage.getItem('contacts'))
            if (getContacts.email != e.target.email.value || getContacts.password != e.target.password.value) {
                errorSection.innerHTML = 'Oops ! your information not sign up'
                errorSection.classList.remove('alert-success')
                errorSection.classList.add('alert-danger')
            }
            else {
                errorSection.innerHTML = `welcom dear ${getContacts.firstName}`;
                errorSection.classList.remove('alert-danger')
                errorSection.classList.add('alert-success')
                localStorage.setItem('login', JSON.stringify(true));
                if (JSON.parse(localStorage.getItem('total')) > 0) {
                    localStorage.setItem('bgLinkOfHeader', 'checkout');
                    dispatch(DoEmptyAllWishList())
                    dispatch(DoEmptyAllcart())
                    goToCheckOut('/checkout')
                } else {
                    localStorage.setItem('bgLinkOfHeader', 'home')
                    goToHome('/')
                }
            }

        } else {
            errorSection.innerHTML = 'Oops ! somthing wrong'
            errorSection.classList.remove('alert-success')
            errorSection.classList.add('alert-danger')
        }
    }
    return (
        <div className='mt-5 fonts'>
            <div className='container'>
                <div className='row'>
                    {/* title */}
                    <div className='col-12'>
                        <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                        <span className='text-muted mx-2'>/</span>
                        <span className='text-muted text-capitalize'>login</span>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='row'>
                            <div className='col-12 col-sm-9 col-md-6 mx-auto border rounded-1 border-secondary shadow py-4 px-3'>
                                <div className='text-uppercase fw-bold' style={{ fontsize: '14px' }}>log in to your account</div>
                                <div className='errorSection alert'></div>
                                <form className='row mt-2' onSubmit={handleLogin}>
                                    {/* email */}
                                    <div className='mt-2'>
                                        <label htmlFor='email' className='mb-2'>email address :</label>
                                        <input type='email' className='form-control' id='email' name='email' placeholder='email ...' onChange={(e) => {
                                            if (emailValid.test(e.target.value)) {
                                                setEmailValidError(false);
                                                e.target.classList.add('text-success')
                                                e.target.classList.remove('text-danger')
                                            } else {
                                                setEmailValidError(true);
                                                e.target.classList.add('text-danger')
                                                e.target.classList.remove('text-success')
                                            }
                                        }} />
                                    </div>
                                    {/* password */}
                                    <div className='mt-2'>
                                        <label htmlFor='password' className='mb-2'>password :</label>
                                        <input type={!showpassword ? "password" : "text"}
                                            className='form-control' id='password' name='password' placeholder='*********' onChange={(e) => {
                                                if (passwordValid.test(e.target.value)) {
                                                    setPasswordValidError(false);
                                                    e.target.classList.add('text-success')
                                                    e.target.classList.remove('text-danger')
                                                } else {
                                                    setPasswordValidError(true);
                                                    e.target.classList.add('text-danger')
                                                    e.target.classList.remove('text-success')
                                                }
                                            }} />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor='showpassword'>{!showpassword ? "show password" : "hide password"}</label>
                                        <input type='checkbox' name='showpassword' id='showpassword' className='ms-2 form-check-input' onClick={() => !showpassword ? setShowpassword(true) : setShowpassword(false)} />
                                    </div>
                                    <div className='mt-2'>
                                        <div style={{ float: 'left' }}>
                                            <label htmlFor='rememberMe'>remember me :</label>
                                            <input type='checkbox' className='form-check-inpute ms-2' id='rememberMe' name='rememberMe' /></div>
                                        <div style={{ float: 'right' }}>
                                            <Link to='login' className='text-dark'>forgot password</Link>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <Link to='/register' className='text-muted'>have not an account ?</Link>
                                    </div>
                                    <div className='mt-3' style={{ clear: 'both' }}>
                                        <button className='btn btn-danger mt-2'>submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn