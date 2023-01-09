
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work/>
      <Contact />
    </div>
  );
}

export default App;
