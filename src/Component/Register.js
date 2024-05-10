import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    useEffect(()=>{
        localStorage.setItem('bgLinkOfHeader', 'register')
    })
    let firstNameValid = /^[a-z]{3,}([a-z\s]+)?$/i;
    let lastNameValid = /^[a-z]{3,}([a-z\s]+)?$/i;
    let emailValid = /^[a-z]+[a-z\.\-\_\d]+[\@][a-z]+([a-z\d\-]+)?[\.][a-z]+([a-z/.]+)?$/i;
    let passwordValid = /^[a-z]{3,}[A-Z]+[\d]+[\W]+$/;
    let mobileValid = /^[0][9][0-9]{9}$/;

    //ErorrValid
    const [firstNameError, setFirstNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState(true);
    const [emailValidError, setEmailValidError] = useState(true);
    const [passwordValidError, setPasswordValidError] = useState(true);
    const [mobileValidError, setMobileValidError] = useState(true);

    //show
    const [showPassword, setShowPassword] = useState(false);

    // handleSubmit
    const goToLogin = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let password = document.querySelector('#password')
        let rePassword = document.querySelector('#rePassword')
        let registerForm = document.querySelector('.registerForm')
        let errorSection = document.querySelector('.errorSection')
        if (!firstNameError && !lastNameError && !emailValidError && !mobileValidError && !passwordValidError && password.value == rePassword.value) {
            errorSection.innerHTML = 'Well Done ! your registration was successfully';
            errorSection.classList.remove('alert-danger')
            errorSection.classList.add('alert-success')
            let newContant = {
                firstName: registerForm.firstName.value,
                lastName: registerForm.lastName.value,
                email: registerForm.email.value,
                password: registerForm.password.value,
                mobile: registerForm.mobile.value,
            };
            localStorage.setItem('contacts', JSON.stringify(newContant));
            setTimeout(() => {
                goToLogin('/login');
            }, 3000);
            
        } else {
            errorSection.innerHTML = 'Oops ! somthing went wrong';
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
                        <span className='text-muted text-capitalize'>register</span>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='row'>
                            <div className='col-12 col-sm-9 col-md-6 mx-auto border rounded-1 border-secondary shadow py-4 px-3'>
                                <div className='row'>
                                    <div className='col-12 errorSection mb-3 text-center alert'></div>
                                    <div className='text-uppercase fw-bold col-12' style={{ fontsize: '14px' }}>create your account</div>
                                    <form className='row registerForm' onSubmit={handleSubmit}>
                                        {/* firstName */}
                                        <div className='col-6 mt-5'>
                                            <label htmlFor='firstName' className='text-muted'>name : <span className='text-danger'>*</span></label>
                                            <input type='text' className='form-control mt-2' name='firstName' id='firstName' onChange={(e) => {
                                                if (firstNameValid.test(e.target.value)) {
                                                    setFirstNameError(false);
                                                    e.target.classList.add('text-success')
                                                    e.target.classList.remove('text-danger')
                                                } else {
                                                    setFirstNameError(true);
                                                    e.target.classList.remove('text-success')
                                                    e.target.classList.add('text-danger')
                                                }
                                            }} />
                                        </div>
                                        {/* lastName */}
                                        <div className='col-6 mt-5'>
                                            <label htmlFor='lastName' className='text-muted'>sure name :  <span className='text-danger'>*</span></label>
                                            <input type='text' className='form-control mt-2' name='lastName' id='lastName' onChange={(e) => {
                                                if (lastNameValid.test(e.target.value)) {
                                                    setLastNameError(false);
                                                    e.target.classList.add('text-success')
                                                    e.target.classList.remove('text-danger')
                                                } else {
                                                    setLastNameError(true);
                                                    e.target.classList.remove('text-success')
                                                    e.target.classList.add('text-danger')
                                                }
                                            }} />
                                        </div>
                                        {/* email */}
                                        <div className='col-6 mt-2'>
                                            <label htmlFor='email' className='text-muted'>email :  <span className='text-danger'>*</span></label>
                                            <input type='email' className='form-control mt-2' name='email' id='email' onChange={(e) => {
                                                if (emailValid.test(e.target.value)) {
                                                    setEmailValidError(false);
                                                    e.target.classList.add('text-success')
                                                    e.target.classList.remove('text-danger')
                                                } else {
                                                    setEmailValidError(true);
                                                    e.target.classList.remove('text-success')
                                                    e.target.classList.add('text-danger')
                                                }
                                            }} />
                                        </div>
                                        {/* mobile */}
                                        <div className='col-6 mt-2'>
                                            <label htmlFor='mobile' className='text-muted'>mobile :  <span className='text-danger'>*</span></label>
                                            <input type='number' className='form-control mt-2' name='mobile' id='mobile' onChange={(e) => {
                                                if (mobileValid.test(e.target.value)) {
                                                    setMobileValidError(false);
                                                    e.target.classList.add('text-success')
                                                    e.target.classList.remove('text-danger')
                                                } else {
                                                    setMobileValidError(true);
                                                    e.target.classList.remove('text-success')
                                                    e.target.classList.add('text-danger')
                                                }
                                            }} />
                                        </div>
                                        {/* password */}
                                        <div className='col-6 mt-2'>
                                            <label htmlFor='password' className='text-muted'>password :  <span className='text-danger'>*</span></label>
                                            <input type={!showPassword ? 'password' : 'text'} className='form-control mt-2' name='password' id='password' onChange={(e) => {
                                                if (passwordValid.test(e.target.value)) {
                                                    setPasswordValidError(false);
                                                    e.target.classList.add('text-success')
                                                    e.target.classList.remove('text-danger')
                                                } else {
                                                    setPasswordValidError(true);
                                                    e.target.classList.remove('text-success')
                                                    e.target.classList.add('text-danger')
                                                }
                                            }} />
                                        </div>
                                        {/* rePassword */}
                                        <div className='col-6 mt-2'>
                                            <label htmlFor='rePassword' className='text-muted'>rePassword :  <span className='text-danger'>*</span></label>
                                            <input type='password' className='form-control mt-2' name='rePassword' id='rePassword' />
                                        </div>
                                        {/* show password */}
                                        <div className='col-6 mt-3'>
                                            <label htmlFor='showPassword' className=''>{!showPassword ? 'show password' : 'hide password'}
                                            </label>
                                            <input type="checkbox" className='form-check-input ms-3' name='showPassword' id='showPassword' onClick={() => !showPassword ? setShowPassword(true) : setShowPassword(false)} />
                                        </div>
                                        {/* have an account */}
                                        <div className='col-6 mt-3'>
                                            <Link to='/login' className='text-muted'>have an account ?</Link>
                                        </div>
                                        <div className='col-12'>
                                            <button className='btn btn-danger mt-4'>register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register