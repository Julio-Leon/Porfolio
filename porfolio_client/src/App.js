import { Route, Switch , useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App_styles.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';


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
        <Switch>
          <Route path='/home' render={() => <Home />} />
          <Route path='/contact' render={() => <Contact />} />
        </Switch>
    </div>
  );
  
}

export default App;
