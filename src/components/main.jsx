import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutMe';
import LandingPage from './landingPage';
import Contact from './contact';
import Projects from './projects'

const Main = () => (
        <Switch>
            <Route exact path="/"  component={LandingPage}/>
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact} />
        </Switch>
)

export default Main;