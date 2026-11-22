import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation/Navigation';
import Masthead from './components/Masthead/Masthead';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div id="top" className="page">
      <div className="page-background" aria-hidden="true" />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navigation theme={theme} onToggleTheme={toggle} />

      <main id="main" tabIndex={-1}>
        <Masthead />
        <About />
        <Education />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
