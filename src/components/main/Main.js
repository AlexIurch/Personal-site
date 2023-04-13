import './Main.css'
import {Link} from "react-router-dom"

function Main() {
    return (
      <div className = 'mainBlock'>
         <div className="infoBlock">
        <h5 className='frontEd'>FRONT-END DEVELOPER</h5>
        <h1 className = "helloEverybody">Hello. I am looking for new <span className="colorText"> challenges</span> and interesting <span className="colorText">projects</span></h1>
       </div>
       <div className="projectCardsBlock">
        <div className="projectBlockLeft">
        <p className="full_cycle">Full-cycle designing and creating beautiful digital products</p>
        <div className="projectCard block1 ">

          <div className="photo-site site1" >
          <div className = "button"><a href="https://alexiurch.github.io/Frontend-task-Techyon/" target="_blank"  rel="noreferrer">View work</a></div>
          </div> 
            
        </div>
        <div className="projectCard block2">
          <div className="photo-site site2"><div className = "button"><a href="https://alexiurch.github.io/CV/" target="_blank"  rel="noreferrer">View work</a></div></div>   
        </div>
        </div>
        <div className="projectBlockRight">
        <div className="projectCard block3">
        <div className="photo-site site3">
          <div className = "button"><a href="https://alexiurch.github.io/Christmas-timer/" target="_blank"  rel="noreferrer">View work</a></div></div>
        </div>

        <div className="projectCard block4">
        <div className="photo-site site4">
          <div className = "button"><a href="https://alexiurch.github.io/Inna-clothes/" target="_blank"  rel="noreferrer">View work</a></div></div>
        </div>


         <div className='link_div'>
            <Link to ="/projects" className='link_to'>view all projects <span>&#8594;</span></Link>
        </div> 

        </div>
       </div>

      </div>
    );
  }
  
  export default Main;

  