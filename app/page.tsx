import Navbar from '@/components/Navbar';
import Hero from './Home/Hero';
import AspirationsSection from './Home/AspirationsSection';
import JoinUsSection from './Home/JoinUsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AspirationsSection />
      <JoinUsSection />
      <Footer />
    </>
  );
}
