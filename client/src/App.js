import About from "./pages/About";
import Connect from "./pages/Connect";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function App() {
  return (
    <div className="
      bg-black text-white 
      py-mobile-y-pg-padding
      " id="home">
        <Landing />
        <About />
        <Portfolio />
        <Connect />
        <Resume />
    </div>
  );
}

export default App;
