import React from 'react'
import {BsDownload} from "react-icons/bs"
import avatarImg from "../assets/milan.jpg"
import CV from "../assets/cv.pdf"


function Hero() {
  return (
    <div className='text-black flex flex-col-reverse md:flex-row justify-center item-center py-10 px-5 sm:[x-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50'>
      <div className='w-full md:w-1/2 mb-10  text-center md:text-left'>
        <h3 className='text-base md:text-lg lg:text-x1 mb-0 md:-mb-2 text-yellow-500'>Hello, I am </h3>
        <h1 className='text-2x1 md:text-6x1 lg:text-6x1 my-0 md:-ml-1 font-bold py-2'>Milan Kikani</h1>
        <h3 className="text-sm  md:text-x1 lg:text-2x1 text-green-600">Web Developer</h3>
        <p className='text-base md:text-lg lg:text-2x1 tracking-tighter'>I’m a front-end developer with solid foundation in creating and improving web applications using React.js and Javascript.</p>
        <div className='flex items-center justify-center md:justify-start gap-4 mt-5'>
            <button className='bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400 duration-200'>Hire Me</button>
            <a className='flex items-center text-yellow-500 font-semibold' href={CV} download="CV.pdf">
            {/* "{CV.pdf}" download word
            {CV.pdf} only show
            "CV.pdf" only download             */}
                Download  CV<BsDownload className='ml-2 text-lg '/>{" "}
           
            </a>
        </div>
      </div>
      <div className='w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0'>
        <img className='max-w-full h-auto' src={avatarImg} alt="Avatar" />
      </div>
    </div>
  )
}

export default Hero
