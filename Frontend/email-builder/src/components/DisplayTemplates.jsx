import React from 'react'
import { Link } from 'react-router-dom'
import template1 from '../assets/Template1.png'

function DisplayTemplates() {
    return (
        <>
            <div className='grid sm:grid-cols-3 gap-2'>
                <Link>
                    <img src={template1} alt="" className='w-[350px]'/>
                </Link>
            </div>
        </>

    )
}

export default DisplayTemplates