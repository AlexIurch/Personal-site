import './Footer.css'
import BRAND from './photoF/Group4.png';
import cv from './photoF/cv (2).png';
import git from './photoF/GitHub.png';
import linkedin from './photoF/linkIn (2).png';


function Footer() {
    return (
      <div className = 'footerBlock'>
       <img src={BRAND} className='myBrend' alt="My Image" />
       <div className="icons">
       <a href="https://alexiurch.github.io/CV/" target="_blank"  rel="noreferrer"><img src={cv} className='icons-link' alt="My Image" /></a>
       <a href="https://github.com/AlexIurch" target="_blank"  rel="noreferrer"><img src={git} className='icons-link' alt="My Image" /></a>
       <a href="https://www.linkedin.com/in/oleksii-iurchenko-58046421b/" target="_blank"  rel="noreferrer"><img src={linkedin} className='icons-link' alt="My Image" /></a>
       
       </div>
      </div>
    );
  }
  
  export default Footer;

