import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import { Grid, Cell } from "react-mdl";
import {TweenMax, TimelineLite, Power3} from 'gsap'

import '../templates/heroAnimation.scss';

import artificial from '../components/assets/artificial.jpg'
import robot from '../components/assets/robot.jpg';
import codeImg from '../components/assets/code2.jpeg';

export default function AbouteMe()  {
    //REF VARIABLES USED INSIDE THE REF={}
    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite({delay: .8});

    //HERE WE GIVE THE EFFECT USING GSAP 
    useEffect(() => {
        //IMAGES VARS
        let mountainsImg = images.firstElementChild; //these VARS are randomnly named
        let treeImg = images.lastElementChild;

        //CONTENT VARIABLES
        let headlineFirst = content.children[0].children[0];
        let headlineSecond = headlineFirst.nextSibling;
        let headlineThird = headlineSecond.nextSibling;
        let contentP = content.children[1];
        let contentButton = content.children[2];

        //Removing inital flash
        TweenMax.to(app, 0, {css: {visibility: 'visible'}} )

        //IMAGES ANIMATION
        tl.from(mountainsImg, 1.2, {y:1280, ease: Power3.easeOut}, 'Start')
            .from(mountainsImg.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        tl.from(treeImg, 1.2, {y:1280, ease: Power3.easeOut}, .2)
            .from(treeImg.lastElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        
        
        //CONTENT ANIMATION
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8,
        },.15, 'Start')
        .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4 )
        .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    
    },[tl])


    return(
          <div className="hero" ref={el => {app = el}}>
            <div className="container">
              <div className="hero-inner">
                <div className="hero-content">
                  <div className="hero-content-inner" ref={el => content = el}>
                    <h1>
                      <div className="hero-content-line">
                        <div className="hero-content-line-inner">Hello! I'm Adrian Murillo </div>
                      </div>
                      <div className="hero-content-line">
                        <div className="hero-content-line-inner"> Robotics Engineer</div>  
                      </div>
                      <div className="hero-content-line">
                        <div className="hero-content-line-inner">& Full Stack Developer</div>
                      </div>
                    </h1>
                    <p>
                    I'm a robotics engineer currently working as a Full Stack Developer freelance. A developer who has the overall experience & responsibility
                        for the successful initiation, planning, design,
                         execution, monitoring, controlling and closure of a project.
                    </p>
                    <div className="btn-row">
                      <button  className="explore-button" to="#skills">Explore
                        <div className="arrow-icon">
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hero-images">
                  <div  className="hero-images-inner" ref={el => (images = el) }>
                    <div className="hero-image mountains">
                      <img src={codeImg} alt="mountains" />
                    </div>
                    <div className="hero-image tree">
                      <img src={robot} alt="tree" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/** Here begins the About section */}
            <div className="container-about">
              <div className="about-grid">
                <div className="grid-item">
                  <div className="icon-grid">
                   <i className="fa fa-space-shuttle"></i>
                  </div>
                   <h1>Technology</h1>
                   <p>Passionate about technology, robotics, AI, the universe and beyond.</p>
                </div>

                <div className="grid-item">
                 <div className="icon-grid">
                  <i className="fa fa-user-secret"></i>
                 </div>
                  <h1>Cybersecurity</h1>
                  <p>If you have the power to create something, then you have the power to destroy it.</p>
                </div>

                <div className="grid-item">
                <div className="icon-grid">
                   <i className="fa fa-terminal"></i>
                  </div>
                <h1>Developer</h1>
                <p>The road to become a full stack developer never ends, we have to continue learning new technologies 
                  and learn how to implement them in our systems.
                </p>
                </div>
              </div>
            </div>
             {/* Here ends the About section  */}
             <section id="skills">
              <div className="skills-grid">
               <div className="container-skills" >
                <h2>Skills & experience</h2>
                <p>I'm a full stack developer. My main area of interest is back end development, Information Security & quality assurance testing.</p>
                <p>HTML, CSS, JS , building small and medium web apps with React, plugins, features, animations, and coding interactive layouts.</p>
                {/* <p>Information Security & quality assurance testing.</p> */}
                <p>I'm a Cybersecurity enthusiast, so I know what projects require to be protected against real world threats.</p>
               
                <p>As a robotics engineer I love to know how everything works.</p>
               </div>
              <div className="skills-animation">
               <h3>Stack technologies</h3>
               <div className="icons-color">
                 
                 <div className="icons-items1">
                  <span className="devicons devicons-git">GIT</span>
                  </div>
                  <div className="icons-items12">
                  <span className="devicons devicons-github_badge">GitHub</span>
                  </div>
                  <div className="icons-items13">
                  <span className="devicons devicons-python">Python</span>
                 </div>

                <div className="icons-items2">
                  <span className="devicons devicons-database">SQL/NoSQL</span>
                  </div>
                  <div className="icons-items22"> 
                  <span className="devicons devicons-javascript">JavaScript</span>
                  </div>
                 <div className="icons-items23"> 
                  <span className="devicons devicons-jquery">JQuery</span>
                </div>

                <div className="icons-items3">
                  <span className="devicons devicons-nodejs">NodeJS</span>
                </div>
                  <div className="icons-items32">
                   <span className="devicons devicons-nodejs_small">Express</span>
                  </div>
                  <div className="icons-items33">
                   <span className="devicons devicons-javascript_shield">JS Frameworks</span>
               </div>

               <div className="icons-items4">
                <span className="devicons devicons-bootstrap">Bootsrap</span>
                </div>
                <div className="icons-items42">
                <span className="devicons devicons-sass">SASS</span>
                </div>
                <div className="icons-items43">
                <span className="devicons devicons-css3">CSS</span>
               </div>


               <div className="icons-items5">
               <span className="devicons devicons-html5">HTML</span>
                </div>
                <div className="icons-items52">
               <span className="devicons devicons-npm">NPM</span>
               </div>
               <div className="icons-items53">
               <span className="devicons devicons-linux">Linux</span>
               </div>

               <div className="icons-items6">
               <span className="devicons devicons-mysql">MySQL</span>
               </div>
               <div className="icons-items62">
               <span className="devicons devicons-mongodb">MongoDB</span>
               </div>
               <div className="icons-items63">
               <span className="devicons devicons-atom">React</span>
               </div>

               </div>
              </div>
             </div>
             </section>

          </div>/**Hero Animation Div */
          
    )

}