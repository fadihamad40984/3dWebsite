import Layout from './components/ui/Layout';
import SceneContainer from './components/canvas/SceneContainer';
import ParticlesBackground from './components/canvas/ParticlesBackground';
import SceneManager from './components/canvas/SceneManager';
import Hero from './components/ui/Hero';
import Features from './components/ui/Features';
import HowItWorks from './components/ui/HowItWorks';
import Testimonials from './components/ui/Testimonials';
import SectionWrapper from './components/ui/SectionWrapper';

function App() {
  return (
    <Layout>
      <SceneContainer>
        <ParticlesBackground />
        <SceneManager />
      </SceneContainer>

      <div className="relative z-10">
        <SectionWrapper id="hero" sectionIndex={0} className="pt-0">
          <Hero />
        </SectionWrapper>

        <Features />

        <HowItWorks />

        <Testimonials />
      </div>
    </Layout>
  );
}

export default App;
