import React from "react";
import Button from "./Button"
import TileList from "./TileList"
import "./App.css"
import ProjectList from "./ProjectList"
import { Scrollbars } from 'react-custom-scrollbars';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
      email:"",
      name:"",
      message:"",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
    
  }
  isFieldValidated = (event) =>{
    const target = event.target;
    if(target.name==="email"){
      if(target.value.includes("@")){
        document.getElementsByClassName("emailError")[0].innerHTML = ""
        document.getElementsByClassName("emailError")[0].style.display = "none"
      }
      else{
        document.getElementsByClassName("emailError")[0].innerHTML = "Please enter a valid email"
        document.getElementsByClassName("emailError")[0].style.display = "block"
      }

    }
    else if(target.name === "name"){
      if(target.value.length>0){
        document.getElementsByClassName("nameError")[0].innerHTML = ""
        document.getElementsByClassName("nameError")[0].style.display = "none"
      }
      else{
        document.getElementsByClassName("nameError")[0].innerHTML = "Please enter your name"
        document.getElementsByClassName("nameError")[0].style.display = "block"
      }
    }
    else if(target.name === "message"){
      if(target.value.length>0){
        document.getElementsByClassName("messageError")[0].innerHTML = ""
        document.getElementsByClassName("messageError")[0].style.display = "none"
      }
      else{
        document.getElementsByClassName("messageError")[0].style.display = "block"
        document.getElementsByClassName("messageError")[0].innerHTML = "Please leave a message"
      }
    }
  }
  sendForm = () =>{
    console.log(this.state)
    fetch('http://jfilipowski.pl:3004/mail',{
        method: "POST",
        mode:"no-cors",
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
         console.log("ali")
      if (response.status === 'success'){
        alert("Message Sent."); 
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }
  render() {
    return (
      <div className="all">
        <Scrollbars style={{ width: this.state.width, height: this.state.height }}>
          <div className="upper">
            <div className="navbar">
              <div className="logo">
                <a href="https://github.com/Arwer234">
                  <img src="https://image.flaticon.com/icons/png/512/37/37318.png" alt="/" />
                </a>
                <a href = "https://www.linkedin.com/in/jakub-filipowski-9615231aa/">
                  <img src = "https://image.flaticon.com/icons/png/512/61/61109.png" alt = "linkedin"/>
                </a>
              </div>
              <div className="navigation">
                <Button text="Contact" />
              </div>
            </div>
            <div className="greetings">
              <div className="is-main-header">Jakub Filipowski</div>
              <div id="subtitleGreetings">React & React Native Developer</div>
            </div>
            <div className="main">
              <img src="https://miro.medium.com/max/6044/1*SAn3UosXBPpt-1H-3VdLMw.jpeg" alt="/" />
            </div>
          </div>
          <div className="mid">
            <div className="description">
              <span className="descriptionHeader">Hi! I'm Kuba. Very pleased!</span>
              <span className="descriptionContent">I started to code around 2 years ago
              in high school, and thanks to wonderful teachers it was easy to begin the
              journey. Through the first little projects, games, like battleship,
              tic tac toe, MP3 player (combined with database), to more complex things
              like hexGame (with threejs), RPG game "Dratewka" and Monopoly. Now my goal is to
              design webApps, that have to be simple and transparent. If you are looking for open-minded designer,
            that's not afraid of bigger algorithms also, I'm in!</span>
            </div>
          </div>
          <div className="skills">
            <div className="is-main-header">Skills</div>
            <TileList />
          </div>
          <div className="projects">
            <div className="description">
              <span className="descriptionHeader">Projects</span>
              <span className="descriptionContent">Project below are mostly based on 3D ideas. During the developement
              process I discovered that both frontend and backend come in handy when it comes to creating
              apps I imagine, thus I strive to learn both JS frameworks, as well as Node JS.
              
              </span>
            </div>
            <ProjectList />
          </div>
          <div className="contact">
            <div className="is-main-header">Contact</div>
            <div className="credentials">
              <input onBlur = {this.isFieldValidated} onChange = {this.handleInputChange} name = "name" type="text" placeholder="Name" value = {this.state.name}/>
              <input onBlur = {this.isFieldValidated} onChange = {this.handleInputChange} name = "email" type="email" placeholder="Email" value = {this.state.email}/>
            </div>
            <div className="errors">
              <div className = "nameError"></div>
              <div className = "emailError"></div>
              <div className = "messageError"></div>
            </div>
            <div className="message">
              <textarea onBlur = {this.isFieldValidated} onChange = {this.handleInputChange} name = "message" placeholder="Your message" rows="10" value = {this.state.message}/>
            </div>
            <Button onClick = {this.sendForm} text="Send" />
          </div>
          <div className="footer">
            © 2020 copyright Jakub Filipowski
        </div>
        </Scrollbars>
      </div>


    );
  }
}
export default App;