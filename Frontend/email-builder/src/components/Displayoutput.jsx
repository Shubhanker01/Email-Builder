import React from 'react'
import { useLocation } from 'react-router-dom'

function Displayoutput() {
    const location = useLocation()
    const handleDownload = () => {
        let output = document.getElementById('output-state').innerHTML
        let blob = new Blob([output], { type: 'text/html' })
        let url = URL.createObjectURL(blob)
        let a = document.createElement('a')
        a.href = url
        console.log(blob)
    }
    return (
        <>
            <div className='text-center text-2xl'>Your output will look like this</div>
            <div className='w-[70%] m-[0px_auto]' dangerouslySetInnerHTML={{ __html: location.state }} id='output-state'></div>
            <button className='mx-auto mt-[20px] bg-slate-800 text-xl p-2 rounded-md text-slate-100' onClick={handleDownload}>Download</button>
        </>


    )
}

export default Displayoutput