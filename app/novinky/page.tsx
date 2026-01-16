import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { articles } from '@/app/data/articles';

export default function Novinky() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-in-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">NOVINKY</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-right" delay={200}>
            <p className="text-lg text-gray-300 mb-12">
              Najnovšie správy a aktuality o kapele Crea Cage.
            </p>
          </AnimateOnScroll>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
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
        </div>
      </main>
    </div>
  );
}
