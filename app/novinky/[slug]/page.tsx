import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/app/data/articles';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/novinky" 
            className="inline-flex items-center text-gray-400 hover:text-[#ff0000] mb-8 transition-colors"
          >
            ← Späť na novinky
          </Link>

          {/* Article header */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            {article.title.toUpperCase()}
          </h1>
          <p className="text-gray-400 mb-8">{article.date}</p>

          {/* Article image */}
          <div className="mb-8 bg-[#2a2a2a] rounded-lg overflow-hidden flex items-center justify-center p-8">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={300}
              className="object-contain max-h-64"
            />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-300 prose-ul:list-disc prose-ul:ml-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Back button bottom */}
          <div className="mt-12 pt-8 border-t border-[#333]">
            <Link 
              href="/novinky" 
              className="inline-block px-6 py-3 bg-[#ff0000] text-white font-semibold rounded hover:bg-[#cc0000] transition-colors"
            >
              ← Späť na novinky
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
