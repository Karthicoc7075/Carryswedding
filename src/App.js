import logo from './logo.svg';
import './styles/global.css';
import Header from './components/header';
import Hero from './sections/hero';
import About from './sections/about';
import Whychoose from './sections/whychoose';
import Service from './sections/service';
import Highlight from './sections/highlight';
import Package from './sections/package';
import Contact from './sections/contact';
import Footer  from './sections/footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />  
      <About />
      <Whychoose />
      <Service />
      <Highlight />
      <Package />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
