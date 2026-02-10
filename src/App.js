import React from 'react';
import { 
  Navbar, 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience, 
  Contact, 
  Footer 
} from './components/sections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;