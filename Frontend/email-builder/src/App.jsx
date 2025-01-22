
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Template from './components/Template'
import Displayoutput from './components/Displayoutput'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/template/:id' element={<Template></Template>}></Route>
        <Route path='/output' element={<Displayoutput></Displayoutput>}></Route>
      </Routes>
    </>
  )
}

export default App
