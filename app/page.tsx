import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { articles } from '@/app/data/articles';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="w-full h-[calc(100vh-5rem)] pt-52 pb-8 flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden">
        <Image
          src="/images/crea_cage_2.png"
          alt="Crea Cage"
          width={1200}
          height={800}
          className="h-[85vh] w-auto object-contain opacity-50 animate-float"
          priority
        />
        <Image
          src="/images/5_in_50.png"
          alt="5 in 50"
          width={100}
          height={100}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-auto -rotate-12"
        />
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-in-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">NOVINKY</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-right" delay={200}>
            <p className="text-lg text-gray-300 mb-12">
              Najnovšie správy o našich koncertoch a udalostiach! Vitajte vo svete CC!
            </p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article, index) => (
              <AnimateOnScroll 
                key={article.id}
                animation="fade-in-up"
                delay={index * 150}
              >
                <article className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-[#333] flex items-center justify-center p-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={200}
                    height={100}
                    className="object-contain max-h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {article.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/novinky/${article.slug}`}
                    className="text-[#ff0000] hover:text-[#ff3333] font-semibold"
                  >
                    ČÍTAŤ VIAC →
                  </Link>
                  <p className="text-sm text-gray-500 mt-4">{article.date}</p>
                </div>
              </article>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 bg-[#2a2a2a] hover:bg-[#ff0000] rounded flex items-center justify-center transition-colors">
              <span className="text-white">←</span>
            </button>
            <button className="w-10 h-10 bg-[#2a2a2a] hover:bg-[#ff0000] rounded flex items-center justify-center transition-colors">
              <span className="text-white">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-in-right">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#8B4513]">NÁŠ PRÍBEH</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={200}>
            <p className="text-lg text-white mb-8 max-w-3xl">
              Kto sú Crea Cage? Spoznaj kapelu a náš dlhoročný muzikantský príbeh.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={400}>
            <Link 
              href="/o-nas" 
              className="inline-block text-[#ff0000] hover:text-[#ff3333] font-semibold text-lg"
            >
              O CREA CAGE →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] border-t border-[#333]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Crea Cage. Všetky práva vyhradené.
          </p>
        </div>
      </footer>
    </div>
  );
}
