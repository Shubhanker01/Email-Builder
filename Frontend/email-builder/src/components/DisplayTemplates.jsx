import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import template1 from '../assets/Template1.png'
import template2 from '../assets/Template2.png'
import template3 from '../assets/Template3.png'
import template4 from '../assets/Template4.png'
import template5 from '../assets/Template5.png'
import template6 from '../assets/Template6.png'


function DisplayTemplates() {
    return (
        <>
            <div className='mt-[20px] ml-[25px] mr-[20px] grid sm:grid-cols-3 gap-2'>
                <Link to='/template/1' className='transition duration-150 ease-out hover:ease-in transform hover:scale-105'>
                    <LazyLoadImage src={template1} alt='image-loading' width='350px' effect='blur'></LazyLoadImage>
                </Link>
                <Link to='/template/2' className='transition duration-150 ease-out hover:ease-in transform hover:scale-105'>
                    <LazyLoadImage src={template2} alt='image-loading' width='350px' effect='blur'></LazyLoadImage>
                </Link>
                <Link to='/template/3' className='transition duration-150 ease-out hover:ease-in transform hover:scale-105'>

                    <LazyLoadImage src={template3} alt='image-loading' width='350px' effect='blur'></LazyLoadImage>
                </Link>
                <Link to='/template/4' className='transition duration-150 ease-out hover:ease-in transform hover:scale-105'>
                    <LazyLoadImage src={template4} alt='image-loading' width='350px' effect='blur'></LazyLoadImage>
                </Link>
                <Link to='/template/5' className='transition duration-150 ease-out hover:ease-in transform hover:scale-105'>
                    <LazyLoadImage src={template5} alt='image-loading' width='350px' effect='blur'></LazyLoadImage>
                </Link>
                <Link to='/template/6' className='transition duration-150 ease-out hover:ease-in transform hover:scale-105'>
                    <LazyLoadImage src={template6} alt='image-loading' width='350px' effect='blur'></LazyLoadImage>
                </Link>
            </div>
        </>

    )
}

export default DisplayTemplates