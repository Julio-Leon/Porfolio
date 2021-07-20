import { Route, Switch , useHistory} from 'react-router-dom'
import { useEffect } from 'react';

// import './styles/App_styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// import {  }

function App() {

  const history = useHistory()

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/about')
    }
  }, [history])


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw'
    }}>
      <Header />
        <Switch>
          <Route path='/about' render={() => <About />} />
          <Route path='/skills' render={() => <Skills />} />
          <Route path='/projects' render={() => <Projects />} />
          <Route path='/contact' render={() => <Contact />} />
        </Switch>
    </div>
  );
}

export default App;
