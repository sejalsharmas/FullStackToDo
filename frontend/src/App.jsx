import React from 'react'
import "./index.css"
import Mycalender from './components/Mycalender'
import Signup from './components/Signup'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
        <div className='flex '>
          <Mycalender/>
 
         <Signup/>  
        </div>
  )
}

export default App