import React, { useEffect } from 'react'
import SliderProduct from './SliderProduct'
import { Link } from 'react-router-dom'

function NotFound() {

    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'home')

    })
    return (
        <div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-12'>
                        <Link className='text-muted' to='/'>Home</Link>
                        <span className='mx-1'>/</span>
                        <span className=''>NotFound</span>
                    </div>
                    <div className='col-12 mt-4 text-danger text-center text-capitalize'>the page is not found</div>
                </div>
            </div>
            {
                <SliderProduct />
            }
        </div>
    )
}

export default NotFound