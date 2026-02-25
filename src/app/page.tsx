import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/sections/Hero';
import { Problems } from '@/sections/Problems';
import { Positioning } from '@/sections/Positioning';
import { HowWeWork } from '@/sections/HowWeWork';
import { Authority } from '@/sections/Authority';
import { Stats } from '@/sections/Stats';
import { Journey } from '@/sections/Journey';
import { FinalCTA } from '@/sections/FinalCTA';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Positioning />
      <HowWeWork />
      <Authority />
      <Stats />
      <Journey />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
