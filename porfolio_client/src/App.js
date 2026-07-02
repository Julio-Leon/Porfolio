import { useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App_styles.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
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
        <Home />
        <Footer />
    </div>
  );
  
}

export default App;
