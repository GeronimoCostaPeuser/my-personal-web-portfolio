import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import ParticlesComponent from './components/Particles';

function App() {

  let Component
  switch(window.location.pathname) {
  case "/":
    Component = Home
    break
  case "/projects":
    Component = Projects
    break
  case "/blog":
    Component = Blog
    break
  case "/certificates":
    Component = Certificates
    break
  case "/contactme":
    Component = Contact
    break
  case "/relax":
    Component = ParticlesComponent
    break

  }

  return (
    <div className="container">
      
      <div className="box1">
        
        <div className="box11">
          <a>Geronimo Costa Peuser</a>
        </div>
        
        <div className="box12">
          <Navigation />
        </div>

      </div>

      <div className="box2">
        <Component />
      </div>

      <p className="credit">Created by Geronimo Costa Peuser</p>

    </div>
  );
}

export default App;
