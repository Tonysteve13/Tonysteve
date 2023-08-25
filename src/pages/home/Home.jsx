import React from 'react';
import Profile from "../../assets/home-min.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
   <section className='home section grid'>
      <img src={Profile} alt="" className="home__img" />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className="home__title">
            <span>I'm Tony Steve. </span>Frontend Developer
          </h1>

          <p className="home__description">Having experience in frontend development with languages such as HTML, CSS, JS(Es6), Boostrap. Also work on projects with frameworks like React.js using technologies such as Redux, Firebase, Material UI and a little Typescript. UI/UX designing using FIGMA, and little knowledge in graphic design, I bring a versatile skill set that allows me to create user centered designs that engage users. I am continuously striving to stay ahead on the curve in my pursuit of learning and keep on building my skills. Collaborative and good at team work.</p>
          <p> Let's collaborate and build something great together.!!</p> <br />
          <Link to='/about' className='button'>
              More About Me{' '}
            <span className='button__icon'> 
              <FaArrowRight />
            </span>
          </Link>

        </div>
      </div>
      <div className="color__block"></div>
   </section>
  )
}

export default Home
