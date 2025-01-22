import React from 'react'
import { useLocation } from 'react-router-dom'
import { downloadTemplate } from '../utils/downloadTemplate.js'
import { toast } from 'react-toastify'

function Displayoutput() {
    const location = useLocation()
    const handleDownload = () => {
        downloadTemplate().then((res) => {
            const htmlBlob = new Blob([res], { type: 'text/html' })
            const url = window.URL.createObjectURL(htmlBlob)
            const tempLink = document.createElement('a')
            tempLink.href = url
            tempLink.setAttribute('download', 'output.html')
            document.body.appendChild(tempLink)
            tempLink.click()
            document.body.removeChild(tempLink)
            window.URL.revokeObjectURL(url)
            toast.success("Downloaded Successfully", { position: 'top-center' })
        }).catch((err) => {
            console.log(err)
            toast.error("Some error occured", { position: 'top-center' })
        })
    }
    return (
        <>
            <div className='text-center mt-[20px] text-2xl'>Your output will look like this</div>
            <div className='w-[70%] m-[0px_auto]' dangerouslySetInnerHTML={{ __html: location.state }} id='output-state'></div>
            <div className='flex justify-center mt-[20px] align-center'>
                <button className='mx-auto mt-[20px] bg-slate-800 sm:text-xl text-sm p-2 rounded-md text-slate-100' onClick={handleDownload}>Download</button>
            </div>

        </>


    )
}

export default Displayoutput