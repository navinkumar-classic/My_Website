import './App.css';
import Custom_navigation from './assets/custom_navigation';
import {FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'


function About() {
  return (
    <div>
      <div className = "bg-r" />
      <div className = "bg-l" />  

      <div className = "main-body">
      <h className = "window-head">About me</h>
        <Custom_navigation name = "Resume" a_l = "25%" a_t = "18%" left = "74%" link = "/resume"/>
        <Custom_navigation name = "Home" a_l = "27%" a_t = "18%" left = "87%" link = "/"/>
        <div className = "main-bg-about">
          <h1 className = "heading" style={{"position": "absolute","padding-left": "5%","paddingTop": "2.5%"}}> Hi, so who am I?</h1>
          <p className= "para" style={{"position": "absolute","padding-left": "5%","paddingTop": "8%"}}>
          Hello there! I'm Navin Kumar hailing from Chennai Tamil Nadu , <br />
          currently pursuing a degree in Computer Science. As a passionate <br />
          and ambitious individual, I am excited to embark on a journey <br />
          into the professional world.
          </p>
          <h1 className = "heading" style={{"position": "absolute","padding-left": "5%","paddingTop": "18%"}}>Details: </h1>
          <table className='para' style = {{"position": "absolute","paddingTop": "24%","padding-left": "1%","width": "70%"}}>
            <tr>
              <th>Name: </th>
              <td>Navin Kumar A.O.</td>
            </tr>
            <tr>
              <th>Age: </th>
              <td>19 years</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>navinkumar.ao2022@vitstudent.ac.in</td>
            </tr>
            <tr>
              <th>Phone: </th>
              <td>9080928560</td>
            </tr>
          </table>
            <div className='flap-container'>
                <div className='flap-container-bottom'>
                  <h1 className = "heading" style={{"position": "absolute","padding-left": "36%","paddingTop": "12%"}}>Navin_Kumar</h1>
                  <a href = "https://www.instagram.com/66navin_kumar99/" target='_blank'><FaInstagram className='insta'/></a>
                  <a href = "https://www.linkedin.com/in/navin-kumar-383017248/" target='_blank'><FaLinkedin className='linkdin'/></a>
                  <a href = "https://github.com/navinkumar-classic" target='_blank'><FaGithub className='git'/></a>
                </div>
                <img src ="https://4kwallpapers.com/images/wallpapers/rick-and-morty-rick-2048x2048-9494.png" className='my-photo'></img>
            </div>

        </div>
      </div>
    </div>
  );
}

export default About;