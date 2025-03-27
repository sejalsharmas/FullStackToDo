import React from 'react'
import Appinput from './Appinput'
import Appbtn from './Appbtn'


const Signup = () => {
  return (
    <div className='h-screen w-screen absolute top-0 left-0 backdrop-blur-2xl z-30 flex items-center justify-center'>
      <div className='w-[80%] h-[70%] bg-white mx-auto myShadow flex '>

        <div className='bg-purple-400 h-full w-1/2 hidden  md:flex md:flex-col md:items-center md:justify-center'>
          <span className='text-6xl font-bold block w-full text-center  text-white'>Plan</span>
          <span className='text-5xl font-bold block w-full text-right mr-20'>Month</span>
          <span className='text-7xl font-bold block w-full text-center text-yellow-400'>Conquer</span>
          <span className='text-5xl font-bold block w-full text-right mr-20 '>Task</span>

        </div>
        <div className=' h-full w-full md:w-[80%] flex flex-col items-center gap-9'>
          <h1 className='text-4xl font-bold text-center mt-3 mainFont'>SIGNUP</h1>
          <div className='h-14 w-[70%]'>
            <Appinput placeholder={"enter username"} />
          </div>

          <div className='h-14 w-[70%] '>
            <Appinput placeholder={"enter username"} />
          </div>

          <div className='h-14 w-[70%]'>
            <Appbtn title='sign up' veriant='simple_Yellow' />
          </div>

          <span className='flex items-start text-sm sm:text-xl text-gray-600 cursor-pointer w-[70%] block '>dont have an account ? <span className='text-blue-600 block ml-2'> log in <i className="ri-arrow-right-line"></i></span></span>
        </div>
      </div>
    </div>
  )
}

export default Signup