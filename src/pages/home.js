import './App.css';
import Custom_navigation from './assets/custom_navigation';


function Home() {
  return (
    <div>
      <div className = "bg-r" />
      <div className = "bg-l" />  

      <div className = "main-body">
        <h className = "window-head">Portfolio</h>
        <Custom_navigation name = "Resume" a_l = "25%" a_t = "18%" left = "74%" link = "/resume"/>
        <Custom_navigation name = "About me" a_l = "18%" a_t = "18%" left = "87%" link = "/About"/>
        <div className = "main-bg-r">
        <h1 className = "heading" style={{"padding-left": "40%","paddingTop": "5%","color": "#c2a78e"}}> "Do or do not. <br/> There is no try."</h1>
        <img src = "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147509972/images/3acd38b-d081-2f5d-f785-a173c6bdab21_Indian-Floral.jpg"
             className='floral-img'>

        </img>

        </div>
        <div className = "main-bg-l">
          <h1 className = "heading" style={{"padding-left": "9%","paddingTop": "8%"}}> Hello There!! I'm <br />Navin. Its Nice <br/> to see you</h1>
          <p className= "para" style={{"padding-left": "9%","paddingTop": "3%"}}>
          As young and motivated Computer Science<br />
          student at VIT, I am eager to contribute<br />
          my skills and passion for technology to a<br />
          challenging and rewarding professional<br />
          opportunity. With a solid foundation in<br />
          computer science principles I am<br />
          well-equipped to thrive in a dynamic<br />
          and fast-paced work  environment.<br />
          </p>

        </div>
      </div>
    </div>
  );
}

export default Home;