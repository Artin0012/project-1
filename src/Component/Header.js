import React, { useEffect, useState } from 'react'
import Styles from '../Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

    const inCart = useSelector(state => state.reducerAri)
    const inWishList = useSelector(state => state.reducerZar)

    const handlLink = (e) => {
        localStorage.setItem('bgLinkOfHeader', e.target.innerHTML.length > 0 ? e.target.innerHTML : 'home')
    }
    window.addEventListener('scroll', e => {
        let artinNave = document.querySelector('.artinNav');
        let artinNaveById = document.querySelector('#artinNav')
        if (window.scrollY > 100) {
            artinNave.style.position = 'fixed'
            artinNave.style.top = '-15px'
            artinNave.style.left = '0'
            artinNave.style.width = '100%'
            artinNave.style.zIndex = '99'
            artinNaveById.setAttribute('style', 'height:35px;line-height:35px')

        } else {
            artinNave.style.position = 'static'
            artinNaveById.setAttribute('style', 'height:50px;line-height:50px')

        }
    })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState(false);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'home')
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setLoading(false);
                setError(false);
                setProduct(response.data)
            })
            .catch(erroe => {
                setLoading(false);
                setError(true);
                setProduct([])
            })
        return () => { }
    }, [])

    product.map(product => {
        if (!uniqueCategory.includes(product.category)) {
            setUniqueCategory([...uniqueCategory, product.category])
        }
    })

    const categoryList = uniqueCategory.map(category => {
        return (
            <option key={category} value={category}>{category}</option>
        )
    })


    // handleSelectCategory
    if (!selectCategory) {
        localStorage.removeItem('category')
    }
    const goToShopAndFilter = useNavigate()
    const handleSelectCategory = (e) => {
        if (e.target.value != 'select') {
            setSelectCategory(true)
            localStorage.setItem('category', JSON.stringify(e.target.value))
            localStorage.removeItem('search')
            localStorage.setItem('bgLinkOfHeader', 'shop')
            goToShopAndFilter('/shop')

        }
    }

    // handleSearching
    if (!searching) {
        localStorage.removeItem('search')
    }
    const GoShopBySearching = useNavigate()
    const handleSearching = () => {
        let search = document.querySelector('#serching')
        let validSearch = /^[\w]+[\w\W]+$/i;
        if (validSearch.test(search.value)) {
            setSearching(true)
            localStorage.setItem('search', JSON.stringify(search.value));
            localStorage.removeItem('category');
            localStorage.setItem('bgLinkOfHeader', 'shop')
            search.value = ''

            GoShopBySearching('/shop');

        } else {
            alert('please fill out the input by valid char ')
        }
    }
    // handlelogOut
    const handlelogOut = () => {
        localStorage.setItem('login', JSON.stringify(false));
        localStorage.setItem('bgLinkOfHeader', 'home')
    }

    return (
        <>
            <div className='fonts imagback'style={{zIndex:'99'}}>
                <div
                    style={{ backgroundColor: 'rgba(210,210,210,0.6)' }} className='Fontsection py-1'>
                    <div className='container'style={{zIndex:99}}>
                        <div className='row'>
                            <div className='col-12'>
                                <div className={Styles.hotline}>
                                    <i className="bi bi-telephone-forward text-danger me-1"></i>
                                    <span>hotline(+98)9187734420</span>
                                </div>
                                {
                                    JSON.parse(localStorage.getItem('login')) ?
                                        <div className={Styles.LoginSection}>welcom dear <span className='text-success  mx-1'>{JSON.parse(localStorage.getItem('contacts')).firstName}</span>
                                            <Link to='/' style={{ fontSize: '14px' }} className='btn btn-danger px-1' onClick={handlelogOut}>log out</Link></div>
                                        :

                                        <div className={Styles.LoginSection} id='header'>
                                            <NavLink to='/login' className='text-dark pe-2' style={{ borderRight: '1px solid #999' }} onClick={() => localStorage.setItem('bgLinkOfHeader', 'login')}><i className="bi bi-box-arrow-in-right me-1"></i>login</NavLink>

                                            <NavLink to='/register' className='text-dark ps-2' style={{ borderLeft: '1px solid #999' }} onClick={() => localStorage.setItem('bgLinkOfHeader', 'register')}><i className="bi bi-person-fill-add me-1"></i>register</NavLink>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3 container'>
                    <div className='row'>
                        {/* Select */}
                        <div className='col-12 col-lg-6 d-flex flex-row justify-content-center'>
                            <input type='text' id='serching' name='serching' className='border border-white border-end-0 mt-1 mt-lg-2 w-50 ' style={{ height: '35px', padding: '0 5px', }}

                            />

                            {
                                loading ? <div className='border border-white border-start-0 mt-1 mt-lg-2' style={{ height: '35px', lineHeight: '35px', padding: '0 10px' }}>is loading ...</div>
                                    : error ? <div className='border border-danger border-start-0 mt-1 mt-lg-2 text-danger' style={{ height: '35px', lineHeight: '35px', padding: '0 10px' }}>error</div> :
                                        <select name='categories' id='categories' className='border border-start-0 border-white mt-1 mt-lg-2 bg-secondary bg-opacity-10' style={{ height: '35px', padding: '0 5px' }} onChange={handleSelectCategory}>
                                            <option value='select'>select your category</option>
                                            <option value='all'>all categorys</option>
                                            {categoryList}
                                        </select>
                            }

                            <i className="bi bi-search mt-1 mt-lg-2 border px-3 border-white bg-white text-black " style={{ height: '35px', padding: '0 5px', lineHeight: '35px' }} onClick={handleSearching} ></i>
                        </div>
                        {/* Cart && Wishlist */}
                        <div className='col-12 col-lg-6 d-flex flex-row justify-content-center'>
                            {/* Wishlist */}
                            <div className='d-flex'>
                                <div>
                                    <Link to='/wishList' onClick={() => localStorage.setItem('bgLinkOfHeader', 'wishList')}><i className="bi bi-heart-fill text-danger fs-1"></i></Link>
                                </div>
                                <div className='d-flex flex-column align-self-center ms-2'>
                                    <div style={{ fontSize: '15px' }} className='text-danger bg-opacity-10'>
                                        <span className='me-1'>{inWishList.length}</span><span>item</span>
                                    </div>
                                    <div className='fw-bold text-capitalize'>wishlist</div>
                                </div>
                            </div>
                            {/* Cart */}
                            <div className='ms-4 d-flex'>
                                <div>
                                    <Link to='/cart' onClick={() => localStorage.setItem('bgLinkOfHeader', 'cart')}><i className="bi bi-cart-check-fill text-info fs-1"></i></Link>
                                </div>
                                <div className='d-flex flex-column align-self-center ms-2'>
                                    <div style={{ fontSize: '15px' }} className='text-danger bg-opacity-10 '><span>{inCart.length}</span>item</div>
                                    <div className='fw-bold text-capitalize'>cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* nav bar */}
                <div className='mt-3 bg-dark artinNav'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <nav id='artinNav' style={{ height: '50px', lineHeight: '50px' }}>
                                    <ul className='list-unstyled d-flex navBar' style={{ fontSize: '13px' }}>
                                        <li className='px-2 homeBack' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'home' ? 'red' : '' }}>
                                            <NavLink to='/' className='text-white ' onClick={handlLink} ><i className="bi bi-house-fill"></i></NavLink>
                                        </li>

                                        <li className='px-2 border-start border-secondary' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'about us' ? 'red' : '' }}>
                                            <NavLink to='/about' className='text-white text-uppercase b' onClick={handlLink}>about us</NavLink>
                                        </li>

                                        <li className='px-2  border-secondary border-start shopBack' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'shop' ? 'red' : '' }}>
                                            <NavLink to='/shop' className='text-white text-uppercase b ' onClick={handlLink}>shop</NavLink>
                                        </li>

                                        <li className='px-2 border-start border-secondary' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'contact us' ? 'red' : '' }}>
                                            <NavLink to='/contact-us' className='text-white text-uppercase b' onClick={handlLink}>contact us</NavLink>
                                        </li>

                                        <li className='px-2 border-start border-secondary' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'cart' ? 'red' : '' }}>
                                            <NavLink to='/cart' className='text-white text-uppercase b' onClick={handlLink}>cart</NavLink>
                                        </li>

                                        <li className='px-2 border-start border-secondary' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'wishList' ? 'red' : '' }}>
                                            <NavLink to='/wishList' className='text-white text-uppercase b' onClick={handlLink}>wishList</NavLink>
                                        </li>

                                        <li className='px-2 border-start border-secondary' style={{ backgroundColor: localStorage.getItem('bgLinkOfHeader') == 'checkout' ? 'red' : '' }}>
                                            <NavLink to='/checkout' className='text-white text-uppercase b' onClick={handlLink}>checkout</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header