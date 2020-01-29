import React, {Component} from 'react';
import { Grid, Cell,a } from 'react-mdl';
import astro from '../components/assets/astro.png';
import Space from '../animations/spaceDemos';
import '../App.css';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
             <Grid className="landing-grid">
                 <Space />
             <Cell col={12}>
                 <img src={astro}
                 alt="astronaut" className="avatar-img"></img>
                 <div className="banner-text">
                     <h1>Full Stack Web Developer</h1>

                     <hr>
                     </hr>

                     <p>HTML/CSS | JavaScript | React | NodeJs | Express | Chai/Mocha | MongoDB</p>
                     <div className="social-links">
                      {/* LinkedIn 
                      <a href="https://www.linkedin.com/in/adriann-murillo/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a> */}

                      {/* GitHub 
                      <a href="https://github.com/iancarlo-lab" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-github-square" aria-hidden="true" />
                      </a> */}

                      {/* FreeCodeCamp 
                      <a href="https://www.freecodecamp.org/certification/iancarlo/full-stack" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-free-code-camp" aria-hidden="true" />
                      </a>  */}

                  </div>
                 </div>
             </Cell>
             </Grid>
            </div>
            
        )
    }
}

export default LandingPage;