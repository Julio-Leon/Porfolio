import { Route, Switch , useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App_styles.css'

import Header from './components/Header/Header'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {

  const [contactModal, setContactModal] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/home')
    }
  }, [history])


  return (
    <div className='app flex-container'>
      <div className="half-color"></div>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
    </div>
  );
  
}

export default App;
