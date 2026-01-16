import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Tour() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">TOUR</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <p className="text-lg text-gray-300">Nadchádzajúce koncerty a turné budeme postupne pridávať.</p>
          </AnimateOnScroll>
        </div>
      </main>
    </div>
  );
}
