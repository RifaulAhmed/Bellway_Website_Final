import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MobileCard from './MobileCard';

// import image9 from './assets/image9.png'
// import image10 from './assets/image10.png'
// import image11 from './assets/image11.png'
// import image12 from './assets/image12.png'
// import image13 from './assets/image13.png'
// import image14 from './assets/image14.png'
// import image15 from './assets/image15.png'
// import image16 from './assets/image16.png'
// import image17 from './assets/image17.png'
// import image18 from './assets/image18.png'
// import image19 from './assets/image20.png'
// import image20 from './assets/image21.png'
// import image21 from './assets/image22.png'
// import image22 from './assets/image23.png'
// import image23 from './assets/image24.png'
// import image24 from './assets/image25.png'

import PopupForm from './PopupForm';

import CNavbar from './CNavbar'
import './Form1.css'
import image4 from './assets/image6.png'

import Footer from './Footer'
// import FaqPage1 from './FaqPage1';

import Slider from 'react-slick';
// import Client1 from './assets/face1.jpeg'
// import Client2 from './assets/face2.jpeg';
// import Client3 from './assets/face3.jpeg';
// import Client4 from './assets/face4.jpeg';
import {Helmet} from "react-helmet";
import Solutions from './Solutions';
import HomeFaq from './HomeFaq'
import HomeTestimonials from './HomeTestimonials';
import HomeSlider from './HomeSlider';
const Web1 = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }

  const cardsData = [
    { title: "React Web Development", description: "React web development involves creating dynamic, efficient, and scalable user interfaces using React, a popular JavaScript library developed by Facebook. It allows developers to build reusable UI components and manage application state effectively, enhancing the overall user experience and performance." },
    { title: "Laravel Web Development", description: "Laravel web development focuses on building robust, secure, and scalable web applications using the Laravel framework, a popular PHP-based framework. It offers an elegant syntax and a range of built-in tools for tasks such as routing, authentication, and database management, streamlining the development process." },
    { title: "MERN Stack Development", description: "MERN stack web development utilizes MongoDB, Express.js, React, and Node.js to build full-stack JavaScript applications. This stack enables developers to create efficient, scalable, and dynamic web applications, allowing seamless front-end and back-end integration." },
    { title: "Content Management System", description: "A Content Management System (CMS) is a software application that enables users to create, manage, and publish digital content on the web without requiring extensive technical knowledge. It streamlines content creation and modification processes, allowing for easy collaboration, version control, and website maintenance." },
    { title: "Ecommerce Development", description: " Ecommerce web development involves creating online platforms that facilitate buying and selling goods or services over the internet, integrating features such as shopping carts, payment gateways, and inventory management systems. It aims to provide seamless user experiences, robust security measures, and scalable infrastructure to support businesses in conducting transactions online." },
    { title: "Magento Web Development", description: "Magento web development involves building powerful, customizable, and scalable ecommerce websites using the Magento platform, known for its extensive feature set and flexibility. It empowers businesses to create unique online stores with advanced functionalities, such as product management, order processing, and customer engagement tools." }
  ];

  const testimonials = [
    {
      id: 1,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
      name: 'Rifaul',
      text: 'Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills, delivering excellence for 2 years!'
    },
    {
      id: 2,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
      name: 'Yachna',
      text: 'Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!.'
    },
    {
      id: 3,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
      name: 'Sakshi',
      text: 'Appreciable efforts and customer support are very good, It is very valuable for the business to continue to improve!.'
    },
    {
      id: 4,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
      name: 'Kuldeep',
      text: 'The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!.'
    }
  ];


  const technologies = [
    { id: 1, image: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp', name: 'Tech 1', title: 'Laravel' }, // Replace with actual URLs
    { id: 2, image: 'https://i.pinimg.com/236x/9c/65/bd/9c65bd67c0a9685a6e8121c0ad3694e3.jpg', name: 'Tech 2', title: 'Laravel' },
    { id: 3, image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png', name: 'Tech 3', title: 'Laravel' },
    { id: 4, image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png', name: 'Tech 4', title: 'Laravel' },
    { id: 5, image: 'https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png', name: 'Tech 5', title: 'Laravel' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s', name: 'Tech 6', title: 'Laravel' },
    { id: 7, image: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg', name: 'Tech 7', title: 'Laravel' },
    { id: 8, image: 'https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg', name: 'Tech 8', title: 'Laravel' }
  ];

  // const images = [
  //   image9,
  //   image10,
  //   image11,
  //   image12,
  //   image13,
  //   image14,
  //   image15,
  //   image16,
  //   image17,
  //   image18,
  //   image19,
  //   image20,
  //   image21,
  //   image22,
  //   image23,
  //   image24,
  //   "https://www.appslure.com/wp-content/uploads/2021/10/04-300x120-1.webp",
  //   "https://www.appslure.com/wp-content/uploads/2021/10/03-min-300x120-1.webp",

  // ];




  return (
    <>
      <Helmet>
                <title>BELLWAY INFOTECH - Web Application Development | Service</title>
                <meta name="description" content="Discover Bellway Infotech comprehensive web application development services. From concept to deployment, our team delivers tailored solutions for your business." />
        
            </Helmet>
      <CNavbar />
      <div class="containerx mx-auto  bg-black p-8">
        <div class="flex flex-col md:flex-row items-center mt-28 ">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
            <h1 class="sm:text-7xl font-bold mb-4 text-white text-5xl">Web Application Development...</h1>
            <h3 class="sm:text-2xl text-white">
              <Link to="/" class="text-red-600 hover:underline">Home</Link> /Web Application Development
            </h3>
          </div>
          <div class="md:w-1/2 h-full mb-9 text-right">
            <img src={image4} alt="About Image" class="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="main-page">
        <button className="contact-button" onClick={togglePopup}>Contact <i class="fa-solid fa-phone-volume"></i></button>
        {isPopupVisible && <PopupForm onClose={togglePopup} />}
      </div>

























      <div className='se'>
        <h1 className='tag4 text-5xl font-bold' >Web App Development Services</h1>
      </div>
      
      
      <MobileCard/>
     
      {/* <div className='se'>
<h1 className='tag' >Our Technologies</h1>
</div> */}



      {/* <div className="min-h-screen flex flex-col items-center justify-center  p-8 ">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black">Our Technologies</h1>
          <p className="text-2xl mt-9">Being a Mobile App development and web development company Bellway Infotech consistently serving into latest Technologies
            for providing nothing less than best to our Clients and Prospects.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-36 mt-12 ">
          {technologies.map(tech => (

            <div key={tech.id} className="flex justify-center items-center">

              <img
                src={tech.image}
                alt={tech.name}

                className="w-48 h-48 md:w-32 md:h-32 rotate-on-hover"

              />


            </div>

          ))}
        </div>
      </div> */}







<Solutions/>
<div className='mt-24'>
      <HomeSlider/>
      </div>

      {/* <div className='se' style={{ marginTop: "100px" }} >
        <h1 className='tag' >We Have Worked For</h1>
      </div> */}

      {/* <div class="container8" style={{ marginTop: "60px" }}>

        <div class="card"><img src={image9} alt="Image 1" /></div>
        <div class="card"><img src={image10} alt="Image 2" /></div>
        <div class="card"><img src={image15} alt="Image 3" /></div>
        <div class="card"><img src={image12} alt="Image 4" /></div>
        <div class="card"><img src={image13} alt="Image 5" /></div>
        <div class="card"><img src={image14} alt="Image 6" /></div>
        <div class="card"><img src={image11} alt="Image 7" /></div>
        <div class="card"><img src={image16} alt="Image 8" /></div>
        <div class="card"><img src={image17} alt="Image 8" /></div>
        <div class="card"><img src={image18} alt="Image 8" /></div>
        <div class="card"><img src={image19} alt="Image 8" /></div>
        <div class="card"><img src={image20} alt="Image 8" /></div>
        <div class="card"><img src={image21} alt="Image 8" /></div>
        <div class="card"><img src={image22} alt="Image 8" /></div>
      </div> */}

      {/* <div className="w-full overflow-hidden mt-8">
        <div className="w-full text-center">
          <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
          <Slider {...settings}>
            {boxes.map((box, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                  <div className="client-image mb-4">
                    <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                  </div>
                  <div className="text-gray-700 text-lg mb-4">{box.text}</div>
                  <div className="absolute bottom-2 left-2 text-left">
                    <p className="text-gray-800 font-bold mb-1">{box.name}</p>
                    <p className="text-gray-600 text-sm">{box.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      



<div className='mt-16'>
      <HomeTestimonials/>
      </div>
      


      <div style={{ marginTop: "90px" }}>
        <HomeFaq/>
      </div>

      <Footer />
    </>
  )
}

export default Web1;