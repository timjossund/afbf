import Header from './components/header/Header';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import WelcomeTabs from './components/welcome/WelcomeTabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Hero />
        <WelcomeTabs />
        <About />
      </header>
    </div>
  );
}

export default App;
