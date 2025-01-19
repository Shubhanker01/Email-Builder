import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  let [content, getContent] = useState(null)
  const getResponse = async () => {
    let response = await axios.get('http://localhost:3000/api/v1/getEmailLayout')
    let data = await response.data
    getContent(data)
  }
  return (
    <>
      <h1 className='text-center'>Hello world</h1>
      <button className='bg-slate-800 text-slate-100' onClick={getResponse}>Click here for image</button>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  )
}

export default App
