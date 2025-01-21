import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import saveoutput from '../utils/saveoutput'
import imageUpload from '../utils/imageupload'

function Template() {
    let [content, getContent] = useState(null)
    useEffect(() => {
        ; (async () => {
            let response = await axios.get('http://localhost:3000/api/v1/getEmailLayout')
            let data = await response.data
            getContent(data)
        })();
    }, [])

    let [title, getTitle] = useState('')
    let [paragraph, getParagraph] = useState('')
    const navigate = useNavigate()
    const titleEdit = (e) => {
        getTitle(e.target.value)
        document.getElementById('heading').style.color = e.target.value
    }
    const paragraphEdit = (e) => {
        getParagraph(e.target.value)
    }
    const changeBgColor = (e) => {
        document.getElementById('body').style.backgroundColor = e.target.value
        document.getElementById('heading').style.backgroundColor = e.target.value
        document.getElementById('content').style.backgroundColor = e.target.value
    }
    const changeContentColor = (e) => {
        document.getElementById('content').style.color = e.target.value
    }
    const changeTitleSize = (e) => {
        document.getElementById('heading').style.fontSize = `${e.target.value}px`
    }
    const changeContentSize = (e) => {
        document.getElementById('content').style.fontSize = `${e.target.value}px`
    }
    const imageChange = (e) => {
        const imgHandle = document.getElementById('image').files
        const [file] = imgHandle
        if (file) {
            document.getElementById('img').src = URL.createObjectURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let htmlContent = document.getElementById('main-body').innerHTML
        saveoutput(htmlContent).then((res) => {
            console.log(res)
            navigate('/output', { state: htmlContent })
        }).catch((err) => {
            console.log(err)
        })

    }

    const uploadImage = (e) => {
        e.preventDefault()
        const image = document.getElementById('image').files[0]
        const formData = new FormData()
        formData.append('image-upload', image)
        imageUpload(formData).then((res) => {
            document.getElementById('img').src = res
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>

            <div className='grid grid-cols-2 gap-2 h-full'>
                <div className='ml-[10px] w-[100%] h-[100%] mt-[20px]' dangerouslySetInnerHTML={{ __html: content }} id='server-content'></div>
                <div className='border-2 border-gray-800 rounded-md ml-[30px] mt-[20px] mr-[30px]'>
                    <div className="max-w-2xl mx-auto p-4">
                        <form onSubmit={handleSubmit}>
                            <h1>Title</h1>
                            <div className="mb-6">
                                <label htmlFor="bg-color" className="block text-lg font-medium text-gray-800 mb-1">Background Color</label>
                                <input type="color" id="bg-color" name="bg-color" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required onChange={changeBgColor} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Title Color</label>
                                <input type="color" id="title" name="title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required onChange={titleEdit} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="content-color" className="block text-lg font-medium text-gray-800 mb-1">Content Color</label>
                                <input type="color" id="content-color" name="content-color" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required onChange={changeContentColor} defaultValue='#F1F5F9' />
                            </div>
                            <div className="mb-6 flex">
                                <div className='mx-2'>
                                    <label htmlFor="heading-size" className="block text-lg font-medium text-gray-800 mb-1">Title Size</label>
                                    <select name="heading-size" id="heading-size" onChange={changeTitleSize} defaultValue={16}>
                                        <option>4</option>
                                        <option>8</option>
                                        <option>12</option>
                                        <option>16</option>
                                        <option>24</option>
                                        <option>32</option>
                                        <option>38</option>
                                        <option>64</option>
                                    </select>
                                </div>
                                <div className='mx-2'>
                                    <label htmlFor="content-size" className="block text-lg font-medium text-gray-800 mb-1">Content Size</label>
                                    <select name="content-size" id="content-size" onChange={changeContentSize} defaultValue={12}>
                                        <option>4</option>
                                        <option>8</option>
                                        <option>12</option>
                                        <option>16</option>
                                        <option>24</option>
                                        <option>32</option>
                                        <option>38</option>
                                        <option>64</option>
                                    </select>
                                </div>

                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Apply</button>
                            </div>
                        </form>
                        <form encType='multipart/form-data' onSubmit={uploadImage}>
                            <div className="mb-6">
                                <label for="image" className="block text-lg font-medium text-gray-800 mb-1">Change Image</label>
                                <input type="file" id="image" name="image-upload" accept="image/*" className="w-full" onChange={imageChange} />
                            </div>
                            <div className="flex justify-start">
                                <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Upload Image</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Template