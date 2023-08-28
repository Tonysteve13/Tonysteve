import Info from '../../components/Info';
import {FaDownload} from 'react-icons/fa';
import CV from "../../assets/TONY'CV.pdf";
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import "./about.css"

const About = () => {
  return (
    <main className="section container">
      <section className='about'>
        <h2 className='section__title' data-aos="fade-left" data-aos-duration="3000">
          About <span>Me</span>
        </h2>

          <p className="home__description">Having experience in frontend development with languages such as <span>HTML</span> <span>CSS,</span> <span>JS(Es6),</span><span>Boostrap</span>. Also work on projects with frameworks like <span>React.js</span> using technologies such as <span>Redux,</span> <span>Firebase,</span> <span>Material U</span>I and a little <span>Typescript</span>. UI/UX designing using <span>FIGMA,</span> and little knowledge in <span>Graphic designing.</span> I bring a versatile skill set that allows me to create user centered designs that engage users. I am continuously striving to stay ahead on the curve in my pursuit of learning and keep on building my skills. Collaborative and good at team work.</p>
          <p> Let`s collaborate and build something great together.!!</p> <br />
          
        <div className="about__container grid">
          <div className="about__info">

            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className='info__list grid'>
              <Info />
            </ul>  

            <a href={CV} download='' className="button">
            Download Cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

       

        </div>
      </section>

      <div className="seperator"></div>
      <section className='skills'>
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid ">
          <Skills />
        </div>
      </section>
      <br />

      <div className="seperator"></div>

      <section className="resume">
        <h3 className='section__subtitle subtitle__center'>
          Experience 
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>

        <div className="seperator">
            <h3 className="section__subtitle subtilte__center">
              Education
            </h3>

            <div className="resume__container grid">
            <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
        </div>
        </div>
        </div>
      </section>
    </main>
  )
}

export default About
