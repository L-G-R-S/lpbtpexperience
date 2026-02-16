import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/sections/Hero';
import { LogoCarousel } from '@/components/ui/LogoCarousel';
import { Problems } from '@/sections/Problems';
import { Positioning } from '@/sections/Positioning';
import { HowWeWork } from '@/sections/HowWeWork';
import { Authority } from '@/sections/Authority';
import { Journey } from '@/sections/Journey';
import { FinalCTA } from '@/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoCarousel />
      <Problems />
      <Positioning />
      <HowWeWork />
      <Authority />
      <Journey />
      <FinalCTA />
      <Footer />
    </main>
  );
}
