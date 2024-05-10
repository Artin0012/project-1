import React, { useState, useEffect, useRef } from 'react'
import { sliders } from './Constant'

function Home() {
    const [showSlider, setShowSlider] = useState(0);

    const SliderList = sliders.map(slider => {
        let myStyle = sliders.indexOf(slider) == showSlider ? 'block' : 'none'
        return (
            <div key={sliders.indexOf(slider)} style={{ display: myStyle, height: '100%', width: '100%', position: 'relative' }}>
                <div style={{ height: '100%', width: '100%' }}>
                    <img src={slider.image} alt={slider.title} style={{ height: '100%', width: '100%' }} className='img-fluid sliderhome' />
                </div>
                <div className='fw-bold fs-4 text-capitalize text-white ShowHomeSliderTitle' style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%)' }}>
                    {slider.title}
                </div>
                <div className='fw-bold fs-5 text-danger ShowHomeSliderPrice ' style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%)' }}>
                    ${slider.price}
                </div>
                <div className='text-white text-truncate ShowHomeSliderDescreption' style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%)' }}>
                    {slider.descreaption.slice(0, 50)} ...
                </div>
            </div>
        )
    })
    const sliderHomeTimer = useRef(null)
    const sliderTimerFunction = () => {
        if (showSlider < sliders.length - 1) {
            setShowSlider(showSlider + 1)
        } else {
            setShowSlider(0)
        }
    }
    //handleHoverSlider
    const handleHoverSlider = () => {
        let ArrowRight = document.querySelector('.samanSliderArrowRight')
        let ArrowLeft = document.querySelector('.samanSliderArrowLeft')
        if (showSlider < sliders.length - 1) {
            ArrowRight.classList.remove('opacity-0')
            ArrowRight.classList.remove('invisible')
            ArrowRight.style.transition = 'all 1s'
            ArrowRight.addEventListener('click', e => {
                setShowSlider(showSlider + 1)
            })
            clearInterval(sliderHomeTimer.current)
        }
        if (showSlider > 0) {
            ArrowLeft.classList.remove('opacity-0')
            ArrowLeft.classList.remove('invisible')
            ArrowLeft.style.transition = 'all 1s'
            ArrowLeft.addEventListener('click', e => {
                setShowSlider(showSlider - 1)
            })

        }
    };

    //handleLeaveSlider
    const handleLeaveSlider = () => {
        let ArrowRight = document.querySelector('.samanSliderArrowRight')
        let ArrowLeft = document.querySelector('.samanSliderArrowLeft')
        ArrowRight.classList.add('opacity-0')
        ArrowRight.classList.add('invisible')
        ArrowLeft.classList.add('opacity-0')
        ArrowLeft.classList.add('invisible')
        sliderHomeTimer.current = setInterval(sliderTimerFunction, 2500);
    };
    // handleChingSliderByControl
    const handleChingSliderByControl = (e) => {
        setShowSlider(e.target.innerText - 1);
    }
    const controlList = Array.from(sliders).map(slide => {
        let controlStyle = sliders.indexOf(slide) == showSlider ? { background: 'black', color: 'white'} : { background: 'white', color: 'black' }
        return (
            <span key={sliders.indexOf(slide) + 1} className='border rounded-circle py-1 px-2 ms-2' style={controlStyle} onClick={handleChingSliderByControl}>{sliders.indexOf(slide) + 1}</span>
        )
    })

    useEffect(() => {
        sliderHomeTimer.current = setInterval(sliderTimerFunction, 2500);
        return () => { clearInterval(sliderHomeTimer.current) }
    }, [showSlider])

    return (
        <>
            <div className='overflow-hidden ' style={{ position: 'relative', height: '300px', width: '100%' }} onMouseOver={handleHoverSlider} onMouseLeave={handleLeaveSlider} >
                {SliderList}
                {/* icon */}
                <i className="bi bi-arrow-right-circle-fill fs-1 invisible opacity-0 samanSliderArrowRight" style={{ position: 'absolute', top: '40%', right: '3%' }}></i>

                <i className="bi bi-arrow-left-circle-fill fs-1 invisible opacity-0 samanSliderArrowLeft" style={{ position: 'absolute', top: '40%', left: '3%' }}></i>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-6 mx-auto text-center mt-3'style={{cursor:'pointer'}}>
                                {controlList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home