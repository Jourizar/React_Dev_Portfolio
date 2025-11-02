import './App.css';
import Navigation from './components/Navigation';
//react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages to route
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

function LandingPage(){
  return(
  <BrowserRouter>
  <Navigation/>

  <Routes>
    <Route path = '/About' element={<About/>}/>
    <Route path = '/Projects' element={<Projects/>}/>
    <Route path = '/Blog' element={<Blog/>}/>
  </Routes>

</BrowserRouter>
  );
};

export default LandingPage;