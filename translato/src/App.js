
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Why from './Why/Why';
import Translators from './Translators/Translators';
import Pricing from './Pricing/Pricing';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Why />
      <Translators />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
