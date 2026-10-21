import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import BentoGrid from './components/BentoGrid';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import AdvisoryIntake from './components/AdvisoryIntake';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased selection:bg-[var(--color-accent)] selection:text-[var(--color-on-accent)] transition-colors duration-200">
      <Header />
      <main className="w-full pt-16 bg-[var(--color-canvas)] flex-1 max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col w-full text-[var(--color-text-primary)]">
          <Hero />
          <Metrics />
          <BentoGrid />
          <CaseStudies />
          <Testimonials />
          <AdvisoryIntake />
        </div>
      </main>
      <Footer />
    </div>
  );
}
