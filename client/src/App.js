import About from "./pages/About";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div className="
      bg-black text-white 
      py-mobile-y-pg-padding 
      ">
        <Landing />
        <About />
        <Portfolio />
    </div>
  );
}

export default App;
