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
          <span>Hey there.... </span> <br />I'm Tony Steve
          </h1>

          <p className="home__description" data-aos="fade-down" data-aos-duration="3000">I'm a Front-end Developer, UI/UX and Graphics Designer </p>
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
