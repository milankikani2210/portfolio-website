import React from 'react'
import aboutImg from"../assets/milan.jpg"
import CV from "../assets/cv.pdf"
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import {MdSupportAgent} from"react-icons/md"
import {BsDownload} from"react-icons/bs"


const About = () => {
  return (
<div className='py-16 bg-gray-50'>
    <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row item-center justify-between '>
      <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30'>
      <img src={aboutImg} alt="Sbot Me"
      className='w-full h-auto object-cover ' />
      </div>
      {/* Right side */}
      <div className='w-full md:w-1/2 md:pl-12'>
        <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-4'>A Bit</h3>
        <h2 className='text-4x1 md:text-6x1 font-bold text-gray-800 mb-6'>About Me</h2>
        <p className='text-gray-600 mb-6'>As a junior web developer, I am enthusiastic about utilizing my technical skills and passion for creating dynamic, user-friendly web applications. With a strong foundation in ReactJS, JavaScript and CSS. I am committed to developing responsive and efficient solutions. My skill set extends to backend technologies like NodeJS and database management with MongoDB and SQL, allowing me to contribute effectively to full-stack development. I am eager to continuously learn and adapt to the latest web development frameworks and technologies, ensuring I stay aligned with industry standards and innovations.</p>

        <div className='flex flex-wrap mb-6'>
            <div className='flex item-center w-1/2 mb-4'>
            <FaRegHandshake className='text-yellow-500 text-5x1 mr-4'/>
            <div>
            <h4 className='text-gray-700 font-semibold'>  5 years</h4>
            <p className='text-gray-700'>Experience</p>
            {/* <a href={CV} target="_blank" rel="noopener noreferrer">View CV</a> */}
            </div>
            </div>
            
        </div>
    
        <div className='flex flex-wrap mb-6'>
            <div className='flex item-center w-1/2 mb-4'>
            <MdSupportAgent className='text-yellow-500 text-5x1 mr-4'/>
            <div>
            <h4 className='text-gray-700 font-semibold'>  24/7</h4>
            <p className='text-gray-700'>Customer support</p>
            {/* <a href={CV} target="_blank" rel="noopener noreferrer">View CV</a> */}
            </div>
            </div>
            </div>
            <div className='flex items-center'>
                <button className='bg-yellow-500 px-8 py-3 rounded-lg mr-4 hover:bg-yellow-400'>Hire Me</button>
                <button>
                <a className='bg-yellow-500 px-8 py-3 rounded-lg mr-4 hover:bg-yellow-400' href={CV} target="_blank" rel="noopener noreferrer">View CV</a>
                </button>
                {/* <a className='flex item-center text-yellow-500 font-semibold' href={CV} download="CV.pdf">Download CV <BsDownload className='ml-2 text-lg'/></a> */}
            </div>
      </div>
    </div>
</div>
  )
}

export default About