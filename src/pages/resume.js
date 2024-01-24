import './App.css';
import Custom_navigation from './assets/custom_navigation';
import Skillbar from './assets/skillbar';
import Project from './assets/project';
import {FaRebel,FaLaptop} from 'react-icons/fa'


function Resume() {
  return (
    <div>
      <div className = "bg-r-resume" />
      <div className = "bg-l-resume" />  

      <div className = "main-body-resume">
      <h className = "window-head">Resume</h>
        <Custom_navigation name = "Home" a_l = "27%" a_t = "5%" left = "74%" link = "/"/>
        <Custom_navigation name = "About me" a_l = "18%" a_t = "5%" left = "87%" link = "/about"/>
        <div className = "main-bg-resume">
          <h1 className = "heading" style={{"padding-left": "58%","paddingTop": "7.5%"}}>Academic_Record:</h1>

          <div className='profile'>
            <h1 className = "heading" style={{"padding-left": "9%","paddingTop": "8%","color":"#c2a78e"}}>Profile:</h1>
            <p className= "para" style={{"padding-left": "9%","paddingTop": "2%","color":"#c2a78e","fontSize":"1.4vw"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;I chose to pursue a career in AIML. I am<br />
            eager to contribute my skills and enthusiasm to a <br />
            dynamic team, and I am confident that my fresh  <br />
            perspective and eagerness to learn will make me <br />
            an asset to any project.
            </p>
            <div className='interest'>
            <h1 className = "heading" style={{"padding-left": "20%","paddingTop": "7%",}}>Interest:</h1>
              <ul className= "para" style={{"padding-left": "25%","paddingTop": "0%","lineHeight":"200%","fontSize":"1.4vw"}}>
                <li>History</li>
                <li>Programming</li>
                <li>Trekking</li>
                <li>Reading Book</li>
              </ul>
            </div>
          </div>

          <div className='academic-record'>
            <h1 className = "heading" style={{"padding-left": "8%","paddingTop": "8%","color":"#c2a78e","fontSize":"1.4vw","lineHeight":"100%"}}>Graduated_10_std:</h1>
            <div className= "para" style={{"padding-left": "8%","color":"#c2a78e","fontSize":"1.2vw"}}>D.A.V. Boys School, Gopalapuram</div>
            <h1 className = "heading" style={{"padding-left": "8%","paddingTop": "4%","color":"#c2a78e","fontSize":"1.4vw","lineHeight":"100%"}}>Graduated_12_std:</h1>
            <div className= "para" style={{"padding-left": "8%","color":"#c2a78e","fontSize":"1.2vw"}}>D.A.V. Boys School, Gopalapuram</div>
            <div className='academic-record-half'>
              <h1 className = "heading" style={{"padding-left": "10%","paddingTop": "8%","fontSize":"1.4vw","lineHeight":"100%"}}>Ongoing_B.Tech_CSE:</h1>
              <div className= "para" style={{"padding-left": "15%","fontSize":"1.2vw"}}>V.I.T Chennai</div>
              <h1 className = "heading" style={{"padding-left": "10%","paddingTop": "4%","fontSize":"1.4vw","lineHeight":"100%"}}>Ongoing_BSc_Data_Science:</h1>
              <div className= "para" style={{"padding-left": "15%","fontSize":"1.2vw"}}>I.I.T Chennai</div>
              <FaRebel className='rebel'></FaRebel>
            </div>
          </div>

          <Skillbar />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Resume;