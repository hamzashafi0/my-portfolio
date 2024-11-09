import React from 'react'
import { IoCheckboxOutline } from "react-icons/io5";

const Skills = () => {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font bg-gray-300 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
     
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col bg-white">

          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoCheckboxOutline className='text-xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-600 h-1 rounded w-[90%]'></div>
            </div>
          <p className='font-bold text-blue-600 text-right'>90%</p>
          </div>
          </div>
          </div>

       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col bg-white">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoCheckboxOutline className='text-xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-600 h-1 rounded w-[80%]'></div>
            </div>
          <p className='font-bold text-blue-600 text-right'>80%</p>
          </div>
          </div>
          </div>

          <div className="p-4 w-[100%] md:w-1/3">
          <div className="flex rounded-lg h-full p-8 flex-col bg-white">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoCheckboxOutline className='text-xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-600 h-1 rounded w-[80%]'></div>
            </div>
          <p className='font-bold text-blue-600 text-right'>80%</p>
          </div>
          </div>
          </div>

          <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col bg-white">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoCheckboxOutline className='text-xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-600 h-1 rounded w-[60%]'></div>
            </div>
          <p className='font-bold text-blue-600 text-right'>60%</p>
          </div>
          </div>
         </div>
      
         <div className="p-4 w-[100%] md:w-1/3">
          <div className="flex rounded-lg h-full p-8 flex-col bg-white">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoCheckboxOutline className='text-xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TailwandCss
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-600 h-1 rounded w-[60%]'></div>
            </div>
          <p className='font-bold text-blue-600 text-right'>60%</p>
          </div>
          </div>
          </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
