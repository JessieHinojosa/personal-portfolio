import {useEffect} from 'react';
import Footer from './components/Footer';
import About from "./pages/About";
import Connect from "./pages/Connect";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function App() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.replace('fadeIn', 'fadeOut');
      }
    });
  }
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const fadeElms = document.querySelectorAll('.fade');
    fadeElms.forEach(el => observer.observe(el));

  }, [observerCallback])

  return (
    <div className="
      bg-black text-white 
      pt-mobile-y-pg-padding
      " id="home">
        <Landing />
        <About />
        <Portfolio />
        <Connect />
        <Resume />
        <Footer />
    </div>
  );
}

export default App;
