import React from 'react'
import pantheonicon from "../../public/pantheonicon.png"
function Navbar() {
  return (
    <div className='navbar-body w-[100vw] h-[100px] flex lg:justify-around lg:items-center md:justify-between md:items-center  mb-20 fixed top-0 z-50 sm:justify-between sm:px-10'>
<div className='left-side-div lg:w-[20%] lg:h-[50px] rounded-xl border-[1px] md:w-[35%] md:h-[50px] md:ml-28 sm:w-[35%] sm:h-[50px] sm:mt-5 sm:-ml-0 border-gray-300 flex justify-around items-center bg-white shadow-slate-100 shadow-md'>
    <h1 className='font-extrabold text-xl font-jakarta text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400'><img src={pantheonicon} alt="brandimage" className=' mt-4'/></h1> <span className='emptyline w-[1px] h-[30px] bg-black'></span><div><p className=' text-xs font-jakarta sm:text-[10px]'>The everything</p>
    <p className=' text-xs font-jakarta'>app for work.</p></div>
</div>
<div className='right-side-div-body lg:flex lg:w-[25%] h-[80px] justify-evenly items-center md:hidden'>
   <div className='rounded-xl border-[1px] border-gray-300 w-[40%] h-[50px] flex items-center justify-center mr-5 bg-white shadow-slate-100 shadow-md sm:hidden md:hidden lg:block'><button className=' font-medium hover:bg-gray-100 w-[95%] h-[40px] rounded-lg font-jakarta'>Contact Sales</button></div>
   <div className='rounded-xl border-[1px] border-gray-300 w-[50%] h-[50px] flex items-center justify-evenly bg-white shadow-slate-100 shadow-md sm:hidden md:hidden lg:flex'>
    <button className=' font-medium hover:bg-gray-100 w-[50%] h-[40px] rounded-lg ml-1 font-jakarta'>Log in</button>
    <button className=' font-medium w-[50%] h-[40px] rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400 mx-1 font-jakarta'>Sign Up</button></div> 
    </div> 

    <div className='right-side-div-body flex w-[25%] h-[80px] justify-evenly  md:mr-8 items-center lg:hidden'>
      <button className='rounded-xl bg-gradient-to-r from-indigo-400 to-cyan-400 mx-1 font-jakarta border-[1px] font-medium text-white w-[40%] h-[40px] mr-0 ml-2 sm:mr-5'>Sign Up</button>
      <div className='rounded-xl w-[6vw] border-[1px] h-[40px] -ml-8'><img src="https://www.freeiconspng.com/uploads/menu-icon-6.png" alt="hamburger" className=' w-[50px] -mt-1 ml-1 sm:ml-0'/></div>
      </div>     
    </div>
  )
}

export default Navbar
