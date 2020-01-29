import React, {Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import {Grid, Cell, List, ListItemContent, ListItem, Textfield} from 'react-mdl';
import contact from './assets/contact2.jpg';

class Contact extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: ''
    }
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const thread = {
      name: this.state.name,
      email: this.state.email
    }

    console.log(thread);
  }


    render(){
        return(
            <div className="contact-body">
              <h1>Let's create something great together</h1>
                <Grid className="contact-grid">
                    <Cell col={6}> 
                     <h2>"//Here goes a 3D render\\"</h2>
                      <img src={contact} alt="contact"/>
                    {/* <p style={{width:'75%' , margin:'auto', paddingTop:'5em'}}>A developer who has the overall experience & responsibility
                        for the successful initiation, planning, design,
                         execution, monitoring, controlling and closure of a project.</p> */}
                         <div className="social-links-contact">
                      {/* LinkedIn
                      <Link to="https://www.linkedin.com/in/adriann-murillo/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </Link> */}

                      {/* GitHub 
                      <a href="https://github.com/iancarlo-lab" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-github-square" aria-hidden="true" />
                      </a> */}

                      {/* FreeCodeCamp 
                      <a href="https://www.freecodecamp.org/certification/iancarlo/full-stack" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-free-code-camp" aria-hidden="true" />
                      </a> */}
                      

                  </div>
                    
                    </Cell>
                    <Cell col={6}>
                     <h2>Contact Me:</h2>
                     <hr />
                     <div className="contact-list">
                      <List>
                      <ListItem>
                            <ListItemContent className="list-item-content">
                              <a href="https://www.linkedin.com/in/adriann-murillo/" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-linkedin-square" aria-hidden="true" />
                              linkedin.com/in/adriann-murillo
                              </a>
                              </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="list-item-content" >
                              <i className="fa fa-envelope" aria-hidden= "true"/>
                                murilloadrianc@gmail.com 
                              </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="list-item-content" >
                            <a href="https://github.com/iancarlo-lab" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            github.com/iancarlo-lab
                             </a>
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="list-item-content">
                            <a href="https://www.freecodecamp.org/certification/iancarlo/full-stack" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                            freecodecamp.org/certification/iancarlo/full-stack
                            </a>
                            </ListItemContent>
                        </ListItem>

                      </List> 
                      </div>
                    </Cell>
                </Grid>
            </div>  
        )
    } 
}

export default Contact;