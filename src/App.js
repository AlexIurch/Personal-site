import './App.css';
import Navigation from './components/navbar/Navbar'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import ScrollButton from './components/scrollButton/ScrollButton'
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';

import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container-wrap">
      <Navigation/>
        <Routes>
          <Route exact path = "/" element={<Main />}> </Route>
          <Route exact path = "/projects" element={<Projects/>}> </Route>
          <Route exact path = "/about" element={<About/>}> </Route>
          <Route exact path = "/contact" element={<Contact />}> </Route>
        </Routes>
     <ScrollButton/>
     <Footer/>
    </div>
  );
}

export default App;
