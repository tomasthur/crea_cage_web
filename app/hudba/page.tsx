import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const songs = [
  {
    id: 1,
    title: 'Nesprávny smer',
    videoId: 'cl-IY9jf32g',
    year: '2023',
  },
  {
    id: 2,
    title: 'Otázka času',
    videoId: 'gU766vNkYvU',
    year: '2020',
  },
  {
    id: 3,
    title: 'Chceme viac',
    videoId: 'IsU2S07InJ4',
    year: '',
  },
  {
    id: 4,
    title: 'Dorian Gray',
    videoId: 'UrrSuOrfXCU',
    year: '',
  },
  {
    id: 5,
    title: 'Falošný úsmev',
    videoId: 'Su9LYCBvmdA',
    year: '',
  },
  {
    id: 6,
    title: 'Kruh',
    videoId: 'OWF0oaQaGhA',
    year: '',
  },
];

export default function Hudba() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">HUDBA</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <p className="text-lg text-gray-300 mb-12">
              Naše najnovšie skladby a videoklipy.
            </p>
          </AnimateOnScroll>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {songs.map((song, index) => (
              <AnimateOnScroll 
                key={song.id}
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                delay={index * 100}
              >
                <div 
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                >
                  {/* YouTube Video */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${song.videoId}`}
                      title={song.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Song Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {song.title.toUpperCase()}
                    </h3>
                    {song.year && (
                      <p className="text-gray-400 text-sm">{song.year}</p>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Spotify/Apple Music CTA */}
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                POČÚVAJTE NÁS AJ NA
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/@creacage" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#ff0000] text-white font-bold text-lg rounded hover:bg-[#cc0000] transition-colors"
                >
                  YOUTUBE →
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>
    </div>
  );
}
