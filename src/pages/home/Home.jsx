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

          <p className="home__description" data-aos="fade-down" data-aos-duration="3000">Having experience in frontend development with languages such as <span>HTML</span> <span>CSS,</span> <span>JS(Es6),</span><span>Boostrap</span>. Also work on projects with frameworks like <span>React.js</span> using technologies such as <span>Redux,</span> <span>Firebase,</span> <span>Material U</span>I and a little <span>Typescript</span>. UI/UX designing using <span>FIGMA,</span> and little knowledge in <span>graphic design,</span> I bring a versatile skill set that allows me to create user centered designs that engage users. I am continuously striving to stay ahead on the curve in my pursuit of learning and keep on building my skills. Collaborative and good at team work.</p>
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
