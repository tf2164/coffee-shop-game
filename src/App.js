import './styling/App.css';
import Intro from './intro';
import git from './images/gitlogo.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Test from './test';
// import Game from './tic-tac';
// import Cappuccino from './cappuccin';


function App() {
  return (
    <Router>
    <div className="App">

    <Routes> 
          <Route path="/Test" element={<Test />} />
          <Route path="/" element={<Intro />} /> 
        </Routes>
        
<footer className='cof-footer'> Made by Tyra Fair

<div className='links'>
<a href='https://github.com/tf2164' alt='mygithub'>
<img src={git} alt="github-logo" className="gitlogo"/>
</a>
</div>

</footer>
    </div>
    </Router>
  );
}

export default App;
