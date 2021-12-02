import './App.css';
import Head from './header';
import Login from './login/login';
import { BrowserRouter as Router, Routes, Route,ExternalRedirect, Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';



function App() {
  return (
    <Router>
      <div className="App" style={{height:'100%',backgroundColor:'lightgrey'}}>
        <div style={{ position: 'sticky',top:'0',zIndex:1 }}>
          <Head />
        </div>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />          
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
