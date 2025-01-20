import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    const titleEdit = (e) => {
        getTitle(e.target.value)
    }
    const paragraphEdit = (e) => {
        getParagraph(e.target.value)
    }
    
    return (
        <>
            <div className='grid grid-cols-2 gap-2 h-full'>
                <div className='ml-[10px] w-[100%] h-[100%] mt-[20px]' dangerouslySetInnerHTML={{ __html: content }}></div>
                <div className='border-2 border-gray-800 rounded-md ml-[30px] mt-[20px] mr-[30px]'>
                    <div className="max-w-2xl mx-auto p-4">
                        <form>
                            <div className="mb-6">
                                <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Title</label>
                                <input type="text" id="title" name="title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required value={title} onChange={titleEdit} />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-1">Content</label>
                                <textarea id="content" name="content" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="6" value={paragraph} required onChange={paragraphEdit}></textarea >
                            </div>

                            <div className="mb-6">
                                <label for="image" className="block text-lg font-medium text-gray-800 mb-1">Image</label>
                                <input type="file" id="image" name="image" accept="image/*" className="w-full" />
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Template