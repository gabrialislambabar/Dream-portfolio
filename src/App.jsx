import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Education from './components/Education/Education';
import Journey from './components/Journey/Journey';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navigation theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <h1 className="sr-only">Muaz Islam Babar — Full-Stack Developer</h1>
        <About />
        <Education />
        <Journey />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
