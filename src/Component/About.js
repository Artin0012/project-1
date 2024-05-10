import React, { useState, useEffect } from 'react'
import SliderProduct from './SliderProduct'
import { Link } from 'react-router-dom'
import { members } from './Constant'

function About() {
    const handelAccordion = (e) => {
        let getMines = document.querySelectorAll('.bi-dash-square-fill')
        getMines = Array.from(getMines)
        getMines.forEach(mines => {
            mines.classList.add('d-none')
            mines.previousElementSibling.classList.remove('d-none')
            mines.parentElement.nextElementSibling.children[1].style.maxHeight = '0'
            mines.parentElement.nextElementSibling.children[1].style.visibility = 'hidden'
            mines.parentElement.nextElementSibling.children[1].style.transition = 'all 0.2s'
            mines.addEventListener('click', e => {
                e.target.classList.add('d-none')
                e.target.previousElementSibling.classList.remove('d-none')
                e.target.parentElement.nextElementSibling.children[1].style.maxHeight = '0'
                e.target.parentElement.nextElementSibling.children[1].style.visibility = 'hidden'
                e.target.parentElement.nextElementSibling.children[1].style.transition = 'all 0.2s'
            })
        })
        e.target.classList.add('d-none')
        e.target.nextElementSibling.classList.remove('d-none')

        let contentHeight = e.target.parentElement.nextElementSibling.children[1].scrollHeight + 50 + 'px';
        e.target.parentElement.nextElementSibling.children[1].style.maxHeight = contentHeight;
        e.target.parentElement.nextElementSibling.children[1].style.visibility = 'visible';
        e.target.parentElement.nextElementSibling.children[1].style.transition = 'all 1s';

    }
    const [minImageShow, setMinImageShow] = useState(0)
    const [maxImageShow, setMaxImageShow] = useState(1)

    const handeleArrowChangeSliderShow = () => {
        let rightArrow = document.querySelector('.bi-arrow-right-square-fill')
        let leftArrow = document.querySelector('.bi-arrow-left-square-fill')

        if (maxImageShow < members.length) {
            rightArrow.classList.remove('opacity-0')
            rightArrow.classList.remove('invisible')
            rightArrow.style.transition = 'all 0.3s'
            rightArrow.addEventListener('click', e => {
                setMaxImageShow(maxImageShow + 1)
                setMinImageShow(minImageShow + 1)
            })
        }
        else {
            rightArrow.classList.add('opacity-0')
            rightArrow.classList.add('invisible')
            rightArrow.style.transition = 'all 0.3s'
        }
        if (minImageShow > 0) {
            leftArrow.classList.remove('opacity-0')
            leftArrow.classList.remove('invisible')
            leftArrow.style.transition = 'all 0.3s'
            leftArrow.addEventListener('click', e => {
                setMaxImageShow(maxImageShow - 1)
                setMinImageShow(minImageShow - 1)
            })
        }
        else {
            leftArrow.classList.add('opacity-0')
            leftArrow.classList.add('invisible')
            leftArrow.style.transition = 'all 0.3s'
        }

    }

    const handeleArrowChangeSliderHide = () => {
        let rightArrow = document.querySelector('.bi-arrow-right-square-fill')
        let leftArrow = document.querySelector('.bi-arrow-left-square-fill')
        rightArrow.classList.add('opacity-0')
        rightArrow.classList.add('invisible')
        leftArrow.classList.add('opacity-0')
        leftArrow.classList.add('invisible')
        rightArrow.style.transition = 'all 0.3s'
        leftArrow.style.transition = 'all 0.3s'
    }

    window.addEventListener('resize', e => {
        if (e.target.innerWidth >= 1200) {
            setMaxImageShow(4);
            setMinImageShow(0);
        }
        else if (e.target.innerWidth < 1200 && e.target.innerWidth >= 992) {
            setMaxImageShow(4);
            setMinImageShow(0);
        }
        else if (e.target.innerWidth < 992 && e.target.innerWidth >= 768) {
            setMaxImageShow(3);
            setMinImageShow(0);
        }
        else if (e.target.innerWidth < 768 && e.target.innerWidth >= 576) {
            setMaxImageShow(2);
            setMinImageShow(0);
        }
        else {
            setMaxImageShow(1);
            setMinImageShow(0);
        }
    });

    const MemberList = members.map((member) => {
        let myStyle =
            members.indexOf(member) < maxImageShow &&
                members.indexOf(member) >= minImageShow
                ? 'block'
                : 'none';
        return (
            <div key={members.indexOf(member)} style={{ display: myStyle }}>
                <div style={{ height: '200px' }} className='text-center'>
                    <img src={member.images} alt={member.fullName} className='img-fluid h-100 px-2' />
                </div>
                <div className='fw-bold mt-3 text-center px-2' style={{ fontSize: '20px' }}>
                    {member.fullName}
                </div>

                <div className='mt-1 text-danger text-center px-2' style={{ fontSize: '14px' }}>
                    {member.actor}
                </div>

                <div className='text-center mt-1 text-muted px-2' style={{ fontSize: '10px' }}>
                    <span>{member.descreaption.slice(0, 18)} {member.descreaption.replace(member.descreaption.slice(19, member.descreaption.length), '...')}</span>
                </div>
            </div>
        )
    })
    useEffect(() => {
        localStorage.setItem('bgLinkOfHeader', 'about us')
        if (window.innerWidth >= 1200) {
            setMaxImageShow(4)
            setMinImageShow(0);

        }
        else if (window.innerWidth < 1200 && window.innerWidth >= 992) {
            setMaxImageShow(4)
            setMinImageShow(0);

        }
        else if (window.innerWidth < 992 && window.innerWidth >= 768) {
            setMaxImageShow(3)
            setMinImageShow(0);

        }
        else if (window.innerWidth < 768 && window.innerWidth >= 576) {
            setMaxImageShow(2)
            setMinImageShow(0);

        }
        else {
            setMaxImageShow(1)
            setMinImageShow(0);

        }
        return () => { }
    }, [window.innerWidth]);

    return (
        <div className='mt-5 fonts'>
            <div className='container'>
                <div className='row'>
                    {/* title */}
                    <div className='col-12'>
                        <Link to={'/'} className='text-capitalize text-muted' onClick={() => localStorage.setItem('bgLinkOfHeader', 'home')}>home</Link>
                        <span className='text-muted mx-2'>/</span>
                        <span className='text-muted text-capitalize'>about us</span>
                    </div>
                    {/* contect */}
                    <div className='col-12 text-capitalize fw-bold fs-1 mt-3 text-center'>interesting facts </div>
                    <div className='col-12 text-muted mt-2 text-center' style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim. Tempus quam pellentesque nec nam aliquam.</div>

                    <div className='col-12 col-sm-6 col-lg-3 mt-5'>
                        <div className='py-2 px-2 text-center shadow border' style={{ backgroundColor: '#eee' }}>
                            <div className='fw-bold fs-3'>10000</div>
                            <div className='mt-1'>items in store </div>
                            <div className='mt-2 text-muted' style={{ fontSize: '13px' }}>Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim</div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3 mt-4 mt-sm-5'>
                        <div className='py-2 px-2 text-center shadow border' style={{ backgroundColor: '#eee' }}>
                            <div className='fw-bold fs-3'>90%</div>
                            <div className='mt-1'>our customers comeback</div>
                            <div className='mt-2 text-muted' style={{ fontSize: '13px' }}>Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim</div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3 mt-4 mt-lg-5'>
                        <div className='py-2 px-2 text-center shadow border' style={{ backgroundColor: '#eee' }}>
                            <div className='fw-bold fs-3'>2 million</div>
                            <div className='mt-1'>users of the site</div>
                            <div className='mt-2 text-muted' style={{ fontSize: '13px' }}>Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim</div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3 mt-4 mt-lg-5'>
                        <div className='py-2 px-2 text-center shadow border' style={{ backgroundColor: '#eee' }}>
                            <div className='fw-bold fs-3 text-lowercase'>ONLINE SUPPORT</div>
                            <div className='mt-1'>we have support 24/7</div>
                            <div className='mt-2 text-muted' style={{ fontSize: '13px' }}>Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim</div>
                        </div>
                    </div>
                    {/* section three */}
                    <div className='mt-5 col-12'>
                        <div className='row'>
                            <div className='col-12 col-md-9'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>

                                        <div className='fw-bold text-uppercase text-center' style={{ fontSize: '15px' }}>what we are really do</div>
                                        <div className='mt-2 text-muted text-center' style={{ fontSize: '12px' }}> Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim. Tempus quam pellentesque nec nam aliquam.</div>
                                    </div>

                                    <div className='col-12 col-md-6 mt-5 mt-md-0'>
                                        <div className='fw-bold text-uppercase text-center' style={{ fontSize: '15px' }}>oue vision</div>
                                        <div className='mt-2 text-muted text-center' style={{ fontSize: '12px' }}> Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim. Tempus quam pellentesque nec nam aliquam.</div>
                                    </div>

                                    <div className='col-12 col-md-6 mt-5'>
                                        <div className='fw-bold text-uppercase text-center' style={{ fontSize: '15px' }}>history of the compony</div>
                                        <div className='mt-2 text-muted text-center' style={{ fontSize: '12px' }}> Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim. Tempus quam pellentesque nec nam aliquam.</div>
                                    </div>

                                    <div className='col-12 col-md-6 mt-5'>
                                        <div className='fw-bold text-uppercase text-center' style={{ fontSize: '15px' }}>cooperate with us </div>
                                        <div className='mt-2 text-muted text-center' style={{ fontSize: '12px' }}> Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Feugiat scelerisque varius morbi enim. Tempus quam pellentesque nec nam aliquam.</div>
                                    </div>
                                </div>
                            </div>
                            {/* accordion */}
                            <div className='col-12 col-md-3 mt-5 mt-md-0'>
                                <div className='row'>
                                    {/* icon */}
                                    <div className='col-1 col-md-2 text-danger fs-4'>
                                        <i className="bi bi-plus-square-fill" onClick={handelAccordion}></i>
                                        <i className="bi bi-dash-square-fill d-none"></i>
                                    </div>
                                    <div className='col-11 col-md-10 d-flex flex-column align-self-center'>
                                        <div className='fw-bold text-uppercase' style={{ fontSize: '14px' }}>support 24/7</div>
                                        <div className='mt-2 text-muted' style={{ fontSize: '12px', maxHeight: '0', visibility: 'hidden' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-1 col-md-2 text-danger fs-4'>
                                        <i className="bi bi-plus-square-fill" onClick={handelAccordion}></i>
                                        <i className="bi bi-dash-square-fill d-none"></i>
                                    </div>
                                    <div className='col-11 col-md-10 d-flex flex-column align-self-center'>
                                        <div className='fw-bold text-uppercase' style={{ fontSize: '14px' }}>best quantity</div>
                                        <div className='mt-2 text-muted' style={{ fontSize: '12px', maxHeight: '0', visibility: 'hidden' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-1 col-md-2 text-danger fs-4'>
                                        <i className="bi bi-plus-square-fill" onClick={handelAccordion}></i>
                                        <i className="bi bi-dash-square-fill d-none"></i>
                                    </div>
                                    <div className='col-11 col-md-10 d-flex flex-column align-self-center'>
                                        <div className='fw-bold text-uppercase' style={{ fontSize: '14px' }}>fastest delivery</div>
                                        <div className='mt-2 text-muted' style={{ fontSize: '12px', maxHeight: '0', visibility: 'hidden' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-1 col-md-2 text-danger fs-4'>
                                        <i className="bi bi-plus-square-fill" onClick={handelAccordion}></i>
                                        <i className="bi bi-dash-square-fill d-none"></i>
                                    </div>
                                    <div className='col-11 col-md-10 d-flex flex-column align-self-center'>
                                        <div className='fw-bold text-uppercase' style={{ fontSize: '14px' }}>customers care</div>
                                        <div className='mt-2 text-muted' style={{ fontSize: '12px', maxHeight: '0', visibility: 'hidden' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* our team */}
                    <div className='mt-5 col-12 d-flex justify-content-center'
                        style={{ position: 'relative' }} onMouseOver={handeleArrowChangeSliderShow} onMouseLeave={handeleArrowChangeSliderHide}>{MemberList}
                        <i className="bi bi-arrow-right-square-fill text-secondary fs-1 opacity-0 invisible" style={{ position: 'absolute', top: '40%', right: '2%' }}></i>

                        <i className="bi bi-arrow-left-square-fill text-secondary fs-1 opacity-0 invisible" style={{ position: 'absolute', top: '40%', left: '2%' }}></i>
                    </div>
                </div>
                <div className='row'>
                    {
                        <SliderProduct />
                    }
                </div>
            </div>
        </div>
    )
}

export default About