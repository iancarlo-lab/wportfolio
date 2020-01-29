import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions,Button, IconButton,CardMenu} from 'react-mdl';
import '../App.css'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0 ){
            return(
                <div className="projects-grid-react">
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'blue'}}>Random Quote Machine</CardTitle>
                      <CardText>
                          My first React Project, it's a random quote machine...
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#f9ebe0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Markdown Previewer</CardTitle>
                      <CardText>
                          Example of a markdown previewer usage.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Drum Machine</CardTitle>
                      <CardText>
                          A dynamic React app, where it simulates an electronic drum machine.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>JavaScript calculator</CardTitle>
                      <CardText>
                          A dynamic React app to simulate a calculator.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Pomodoro Clock</CardTitle>
                      <CardText>
                          Helpful app for people who needs intervals to study or finish tasks.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                </div>
            )

        }
        else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid-react">
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'blue'}}>Bar Chart</CardTitle>
                      <CardText>
                         Created a bar chart to visualize Gross Domestic Product. 
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Scatterplot Graph</CardTitle>
                      <CardText>
                      Alleged drug use during 1995 due to high hematocrit levels
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Heat Map</CardTitle>
                      <CardText>
                        Monthly Global Land-Surface Temperature since 1753-2015
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Choropleth Map</CardTitle>
                      <CardText>
                      United States Educational Attainment Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Treemap Diagram</CardTitle>
                      <CardText>
                      Video Game Sales Top 100 Most Sold Video Games Grouped by Platform
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid-react">
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'blue'}}>Timestamp Microservices</CardTitle>
                      <CardText>
                          API where it returns a timestamp when you access the endpoint <code>[project_url]/api/timestamp/:date_string?</code>
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Request Header Parser Microservice</CardTitle>
                      <CardText>
                      Get the IP address, preferred languages (from header Accept-Language) and system infos (from header User-Agent) for my device.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>URL Shortener Microservice</CardTitle>
                      <CardText>
                        API Project that shortens a URL 
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Exercise Tracker</CardTitle>
                      <CardText>
                          API project to practice GET, POST, PUT requests.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>File Metadata Microservice</CardTitle>
                      <CardText>
                          API to practice uploading a file and retrieving the info about it.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid-react">
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'blue'}}>Metric-Imperial Converter</CardTitle>
                      <CardText>
                          My first React Project, it's a random quote machine...
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Issue Tracker</CardTitle>
                      <CardText>
                          My first React Project, it's a random quote machine...
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Personal Library</CardTitle>
                      <CardText>
                          My first React Project, it's a random quote machine...
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Stock Price Checker</CardTitle>
                      <CardText>
                          My first React Project, it's a random quote machine...
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Anonymous Message Board</CardTitle>
                      <CardText>
                          My first React Project, it's a random quote machine...
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                          <Button colored>CodePen</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 4){
            return(
                <div className="projects-grid-react">
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'blue'}}>Palindrome Checker</CardTitle>
                      <CardText>
                      A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Roman Numeral Converter</CardTitle>
                      <CardText>
                      Converts the given number into a roman numeral.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}>Caesars Cipher</CardTitle>
                      <CardText>
                      One of the simplest and most widely known ciphers
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Telephone Number Validator</CardTitle>
                      <CardText>
                      Validate or reject the US phone number based on any combination of the formats provided.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                <Card shadow={6} style={{minWidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'yellow'}}> Cash Register</CardTitle>
                      <CardText>
                      Design a cash register drawer.
                      </CardText>
                      <CardActions border>
                          <Button colored>GitHub</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff0'}}>
                       <IconButton name="share" />
                      </CardMenu>
                </Card>
                </div>
            )
        }

    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}
                 onChange={(tabId) => 
                 this.setState({
                     activeTab: tabId})} ripple>
                 <Tab>Front-end</Tab>
                 <Tab>Data Visualization</Tab>
                 <Tab>API</Tab>
                 <Tab>Info Sec & QA</Tab>
                 <Tab>Algorithms & Data structure</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.state.toggleCategories} </div>

                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                </section>
                
            </div>
        )
    }
}

export default Projects;