import React from 'react'
import DisplayTemplates from './DisplayTemplates'

function Home() {
    return (
        <div>
            <h1 className='text-center text-4xl text-slate-800'>Email Builder</h1>
            <DisplayTemplates />
        </div>
    )
}

export default Home