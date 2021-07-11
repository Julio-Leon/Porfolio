import { Route, Switch , useHistory} from 'react-router-dom'
import { useEffect } from 'react';

import './styles/styles.css'

import Header from './components/Header/Header'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

  const history = useHistory()

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/about')
    }
  }, [history])


  return (
    <div className="h-screen border-8 border-red-900 bg-gradient-to-r from-blue-600 to-blue-400">
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
