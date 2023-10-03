import './App.css';
import Main from './components/Main'
// import { MediaQuery } from 'react-responsive';
import WhySwift from './components/WhySwift'
import Services from './components/Services';
import News from './components/News';
import Contact from './components/Contact';
import Company from './components/Company';
import Company1 from './components/Company1';
import Footer from './components/Footer';
function App() {
  const screenWidth = window.innerWidth;
  return (
    <>
       {screenWidth > 720 && <Main />}
      <WhySwift/>
      <Services/>
      <News/>
      <Contact/>
      <Company/>
      <Company1/>
      <Footer/>
    </>
  );
}

export default App;
