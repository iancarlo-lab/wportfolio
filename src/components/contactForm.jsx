import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: ''
         }
    }
    render() { 
        return (
            <div className="contact-body">
                <h1>Let's create something great together!</h1>
                <div className="contact-grid">
                    <div className="left-grid">
                    <h2>Adrian Murillo</h2>
                    <div className="form-container">
                        <form>
                            <input type="text"
                             placeholder="Name"
                             value={this.state.name}
                              onChange={this.OnChangeName} />
                        </form>
                    </div>
                    <img 
                     src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                     alt="avatar"
                     height="250px"/>
                    <p style={{width:'75%' , margin:'auto', paddingTop:'5em'}}>A developer who has the overall experience & responsibility
                        for the successful initiation, planning, design,
                         execution, monitoring, controlling and closure of a project.</p>
                         <div className="social-links-contact">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/adriann-murillo/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/iancarlo-lab" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* FreeCodeCamp */}
                            <a href="https://www.freecodecamp.org/certification/iancarlo/full-stack" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                        <div className="right-grid">
                        <h2>Contact Me:</h2>
                        <hr />
                         <div className="contact-list">
                              <i className="fa fa-phone-square" aria-hidden= "true"/>
                                5555555555
                              <i className="fa fa-envelope" aria-hidden= "true"/>
                                <p>murilloadrianc@gmail.com</p> 
                              <a href="https://github.com/iancarlo-lab" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                              </a>
                         </div>
                    </div>
                    <div className="form-container">
                        <form>
                            <input type="text"
                             placeholder="Name"
                             value={this.state.name}
                              onChange={this.OnChangeName} />
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Contact;