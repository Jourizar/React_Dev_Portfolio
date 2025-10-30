import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

function LandingPage(){
  return(
    <>
      <Navigation/>
      <div className="main_wrapper">
      <Profile frontPic = '\public\vite.svg' description = 'About me!' 
      paragraph = "My name is Jose I'm a front end web developer with goals to become a fullstack developer."/>
      </div>
    </>
  );
};

export default LandingPage;