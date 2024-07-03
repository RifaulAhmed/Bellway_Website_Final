import React from 'react'
import CNavbar from '../CNavbar'
import { Link } from 'react-router-dom';
import screen from '../assets/llns1.png'
import screen1 from '../assets/llns2.png'
import screen2 from '../assets/llns3.png'
import screen3 from '../assets/hotel5.png'
import brobo4 from '../assets/llns4.png'
import brobo5 from '../assets/llns5.png'
import brobo6 from '../assets/llns6.png'
import brobo7 from '../assets/llns7.png'
import brobo8 from '../assets/llns8.png'
import brobo9 from '../assets/llns9.png'
import brobo10 from '../assets/llns10.png'
import brobo11 from '../assets/llns11.png'
import brobo12 from '../assets/llns12.png'
import laravel from '../assets/laravel.png'
import flutter from '../assets/flutter.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import CaseSlider from './CaseSlider.jsx'
import Footer from '../Footer.jsx';
const Brobo = () => {
  return (
    <>
      <div className="sticky-nav">
        <CNavbar />
      </div>
      <div class="containerx mx-auto bg-black p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
            <h1 class="text-5xl font-bold mb-4 text-white ">LLN</h1>

            <a href="https://play.google.com/store/apps/details?id=com.bellwayinfotech.deliciousmeal"
              target="_blank" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group mr-4">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Demo</span>
              <span class="relative invisible">Let's Talk</span>
            </a>
            <a href="/contact" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Buy Now</span>
              <span class="relative invisible">Contact Us</span>
            </a>

            <h3 class="sm:text-2xl text-white mt-3">
              <Link to="/" class="text-red-600 hover:underline">Home</Link> / LLN
            </h3>
          </div>
          <div class="md:w-1/2 text-right">
            <img src='https://i.pinimg.com/564x/8b/7c/8d/8b7c8dbbad233d64c5f90ff715a5e954.jpg' alt="About Image" class="w-full h-auto mt-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-3xl font-bold mb-4 ml-20">About LLN</h4>
          <p className="text-gray-700 ml-20 text-xl">
          LLN is a robust app utilized by institutions for organizing quizzes and exams efficiently. It provides a comprehensive platform where educators can create, manage, and administer assessments seamlessly. Students benefit from a user-friendly interface that supports various question formats and real-time feedback, enhancing their learning experience. LLN helps institutions streamline assessment processes, ensuring accuracy and efficiency in evaluating student progress and performance.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 h-80  bg-gray-200 p-6 rounded shadow-lg mr-36">
          <div className="space-y-6">
            {/* Box 1 */}
            <div className="flex items-start">
              <div style={{
                backgroundColor: '#ff1493',
                backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
              }} className="w-1 h-4 bg-black mr-4 mt-4"></div>
              <div>
                <h2 className="font-semibold text-lg mt-4">Clients Location</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>

                </ul>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start">
              <div style={{
                backgroundColor: '#ff1493',
                backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
              }} className="w-1 h-4 bg-black mr-4 mt-1"></div>
              <div>
                <h2 className="font-semibold text-lg">Development Time</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>

                </ul>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-start">
              <div style={{
                backgroundColor: '#ff1493',
                backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
              }} className="w-1 h-4 bg-black mr-4 mt-1"></div>
              <div>
                <h2 className="font-semibold text-lg">Target Users</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full relative z-10 top-3">
        <div className="w-full max-w-6xl ">
          <div className="inset-x-0 top-0 transform translate-y-8 mx-4 ">
            <div className="bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('https://i.pinimg.com/564x/60/c7/15/60c715285cae14f6a4c97f4e10e3fe97.jpg')" }}>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-26">
                <h3 className="text-3xl font-bold text-white text-center">Technologies Leveraged</h3>
                <p className="text-gray-200 text-center text-[18px]">We leveraged the strength of robust and secure technologies, tools, and frameworks used in the app/web to escalate the creation of new features and functionalities.

                </p>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src={flutter} alt="Logo" className="w-12 h-12" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src={laravel} alt="Logo" className="w-12 h-12" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src={js} alt="Logo" className="w-12 h-12" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src={react} alt="Logo" className="w-12 h-12" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src='https://i.pinimg.com/564x/49/eb/b3/49ebb3a19141d6eb3a71fadb1929336a.jpg' alt="Logo" className="w-16 h-16" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src='https://www.shareicon.net/data/2016/06/21/607631_php_4096x4096.png' alt="Logo" className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white font-sans min-h-screen">
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/3f/67/8e/3f678e4d9c1b467ac5755766e88b2ac9.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-8">
            <h2 className="text-4xl font-bold mt-8 text-left ml-24">The Need</h2>
            <p className="text-lg mt-8 ml-24">
            The urgent integration of educational and technological realms with <br/>robust regulatory compliance is crucial now more than ever. In educational <br/>settings, there is a growing recognition of the benefits of digital platforms <br/> in enhancing learning outcomes and accessibility. Institutions are increasingly <br/>adopting  technologies that support remote learning and assessment, responding <br/>to the evolving needs of students and educators alike.

In response to these <br/>educational challenges, our client swiftly introduced LLN, an advanced app designed <br/> for institutions to streamline the organization of quizzes  and exams. This innovative <br/> solution supports educators in creating assessments, delivering them securely,<br/> and providing real-time feedback to students. 
            </p>

            <div className="relative h-36">
              <img
                src={screen}
                alt="Image 1"
                className="absolute w-[16rem] h-[34rem] left-[54rem] bottom-[-7rem] transform translate-x-4 translate-y-4"
              />
              <img
                src={screen1}
                alt="Image 2"
                className="absolute w-[16rem] h-[34rem] left-24 top-0 transform translate-x-4 translate-y-4"
              />
              <img
                src={screen2}
                alt="Image 3"
                className="absolute w-[16rem] h-[34rem] left-[32rem] top-48 transform translate-x-4 translate-y-4"
              />

            </div>

          </div>

        </div>

      </div>
      <div className="text-black p-8">
        <h2 className="text-4xl font-bold mt-[34rem] text-center">Client Goals</h2>
        <p className="text-lg mt-6 text-center max-w-4xl mx-auto">
        Our client's objective was to rapidly deploy LLN, an advanced app designed to revolutionize educational assessments. This solution aims to empower institutions by providing a seamless platform for organizing quizzes and exams.
        </p>

        <div className="flex items-center mt-8">
          <div style={{
            backgroundColor: '#ff1493',
            backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
          }} className="w-2 h-6 bg-gray-500 ml-24"></div>
          <h3 className="text-2xl font-bold ml-4 ">App Objectives</h3>
        </div>

        <ul className="list-disc list-inside text-lg mt-4 max-w-4xl ml-24 ">
          <li className="text-black">Organize quizzes and exams remotely</li>
          <li className="text-black">Engage students with interactive features</li>
          <li className="text-black">Improve assessment accessibility</li>
          <li className="text-black">Ensure accurate results and analytics</li>
          <li className="text-black">Streamline educational workflows</li>
          <li className="text-black">Offer cost-effective assessment management</li>
        </ul>
      </div>


      <div className=" text-white font-sans min-h-screen">
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/25/d0/cf/25d0cfcd1837ab7001ca80de76b9e619.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-7">
            <h2 className="text-4xl font-bold mt-[29rem] text-center ml-24">Mobile View Design</h2>
            <p className="text-lg mt-8 ml-24 text-center">
            Our UI/UX team developed hi-fi prototype after low-fi approval, through intuitive interfaces and aesthetically appealing layouts.
            </p>

            <div className="relative h-36">
              <img
                src='https://i.pinimg.com/736x/ad/28/f9/ad28f9c583b507a5c084a20976271f1f.jpg'
                alt="Image 1"
                className="absolute w-[31rem] h-[28rem] left-[44rem] bottom-[27rem] transform translate-x-4 translate-y-4"
              />
              <img
                src='https://i.pinimg.com/564x/bb/d9/4b/bbd94bc9607942676a9da75197d1c811.jpg'
                alt="Image 2"
                className="absolute w-[32rem] h-[25rem] left-24 top-[-35rem] transform translate-x-4 translate-y-4"
              />
              <img
                src={brobo4}
                alt="Image 3"
                className="absolute w-[16rem] h-[34rem] left-[5rem] top-66 transform translate-x-4 translate-y-4"
              />
               <img
                src={brobo5}
                alt="Image 3"
                className="absolute w-[16rem] h-[34rem] left-[30rem] top-[4rem] transform translate-x-4 translate-y-4"
              />
                <img
                src={brobo6}
                alt="Image 3"
                className="absolute w-[16rem] h-[34rem] left-[54rem] top-[0rem] transform translate-x-4 translate-y-4"
              />
                <img
                src={brobo7}
                alt="Image 4"
                className="absolute w-[16rem] h-[34rem] left-[5rem] top-[37rem] transform translate-x-4 translate-y-4"
              />
               <img
                src={brobo8}
                alt="Image 5"
                className="absolute w-[16rem] h-[34rem] left-[30rem] top-[40rem] transform translate-x-4 translate-y-4"
              />
                <img
                src={brobo9}
                alt="Image 6"
                className="absolute w-[16rem] h-[34rem] left-[54rem] top-[36.6rem] transform translate-x-4 translate-y-4"
              />
                  <img
                src={brobo10}
                alt="Image 7"
                className="absolute w-[16rem] h-[34rem] left-[5rem] top-[74rem] transform translate-x-4 translate-y-4"
              />
               <img
                src={brobo11}
                alt="Image 8"
                className="absolute w-[16rem] h-[34rem] left-[30rem] top-[76rem] transform translate-x-4 translate-y-4"
              />
                <img
                src={brobo12}
                alt="Image 9"
                className="absolute w-[16rem] h-[34rem] left-[54rem] top-[73.3rem] transform translate-x-4 translate-y-4"
              />

            </div>

          </div>

        </div>
      
      </div>
      <div className='mt-10 md:mt-[105rem] px-4 md:px-0'>
      <h2 className="text-4xl font-bold text-2xl mt-4">Admin Visual Design</h2>
      <p className="text-lg mt-4 text-center">We’ve designed the Admin Visual Panel for the implementation of user interface elements and aesthetics for administrative interfaces, with a focus on clarity and functionality.</p>
      <CaseSlider />
    </div>
    <div className=" mx-auto px-4 py-16 justify-start">
        <h1 className="text-5xl font-bold mb-4 text-black">We'll help you get started</h1>
        <div className='flex items-center justify-between'>
          <p className=" text-[18px] text-black ">
            Browse our blog, educational videos, and customer stories to find <br />
            what you need to succeed as a Webflow freelancer.
          </p>
          <div className="text-end">
            <a href="/contact" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease text-[20px]">Dive In</span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Brobo
