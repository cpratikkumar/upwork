import React from 'react'

function Card({items}) {
  return (
    <div className=' lg:w-[25vw] md:w-[35vw] bg-gradient-to-r from-indigo-200 to-cyan-200 rounded-xl h-[180px] flex flex-col justify-center items-center'>
      <img src="https://cdn-icons-png.flaticon.com/512/240/240704.png" alt="logo" className=' w-[50px] mb-5'/>
      <h3 className=' font-bold text-lg font-jakarta'>{items.heading1}</h3>
      <h3 className=' font-bold text-lg font-jakarta'>{items.heading2}</h3>
    </div>
  )
}

export default Card
