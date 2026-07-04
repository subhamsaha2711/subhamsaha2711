import { Analytics } from '@vercel/analytics/react';
import Navbar        from '@/components/Navbar';
import Hero          from '@/components/Hero';
import About         from '@/components/About';
import Experience    from '@/components/Experience';
import Projects      from '@/components/Projects';
import Skills        from '@/components/Skills';
import Publications  from '@/components/Publications';
import Testimonials  from '@/components/Testimonials';
import Footer        from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Testimonials />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
