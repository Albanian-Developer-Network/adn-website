import Navbar from '@/components/Navbar';
import Hero from './Home/Hero';
import AspirationsSection from './Home/AspirationsSection';
import JoinUsSection from './Home/JoinUsSection';
import Footer from '@/components/Footer';
import Alert from '@/components/Alert';

export default function Home() {
  return (
    <>
      <Alert title='June 23rd' message='meet & greet in Prishtina' />
      <Navbar />
      <Hero />
      <AspirationsSection />
      <JoinUsSection />
      <Footer />
    </>
  );
}
