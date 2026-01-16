import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ONas() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navigation />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">O NÁS</h1>
          </AnimateOnScroll>
          
          {/* História kapely */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <AnimateOnScroll animation="fade-in-right" delay={200}>
              <p>
              Crea Cage je projekt muzikantov z okolia Gelnice. Jeho začiatky siahajú do roku 2013. 
              Kapela za ten čas odohrala desiatky koncertov, medzi inými aj ako predskokan kapely 
              Smola a Hrušky na turné Topfest best of tour.
            </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-left" delay={350}>
              <p>
              V roku 2016 vystúpila aj na dvoch festivaloch pod taktovkou rádia Anténa Rock s názvom 
              Rock Shock, kde sa dostala na základe súťaže, ktorú vyhrala. V roku 2017 mala kapela 
              pauzu počas ktorej vyriešila viaceré personálne otázky.
            </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-right" delay={500}>
              <p>
              Rok 2020 priniesol nový singel kapely s názvom <span className="text-[#ff0000] font-semibold">Otázka času</span>, 
              ktorý mal svoju premiéru v Rádiu Anténa Rock v rámci Gzovej rubriky Objav slovenskej 
              rockovej scény. O tri roky neskôr kapela vydala svoj ďalší singel s názvom 
              <span className="text-[#ff0000] font-semibold"> Nesprávny smer</span>.
            </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-left" delay={650}>
              <p>
              Crea Cage až na pár výnimiek nekoncertovala dlhých 5 rokov, no všetko sa to zmení už 
              v tomto roku. V rámci svojho návratu si kapela pre svojich fanúšikov pripravila 
              <span className="text-[#ff0000] font-semibold"> 5 nových piesní</span>, ktoré vydá v priebehu 
              50 dní (<span className="text-[#ff0000] font-semibold">5 in 50 challenge</span>). 
              Prvý song uzrie svetlo sveta už 1. marca.
            </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-right" delay={800}>
              <p>
              Produkčne sa o nové skladby stará <span className="font-semibold text-white">Norbert Ferencz (OMP)</span>, 
              ktorý ich mixuje a tvorí aj sample.
            </p>
            </AnimateOnScroll>
          </div>

          {/* Členovia kapely */}
          <div className="mt-16">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#ff0000]">ZLOŽENIE KAPELY</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <div className="bg-[#2a2a2a] p-6 rounded-lg hover:bg-[#333] transition-colors">
                  <h3 className="text-2xl font-bold mb-2">Martin Hudák</h3>
                  <p className="text-gray-400">Gitara / Spev</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in-up" delay={350}>
                <div className="bg-[#2a2a2a] p-6 rounded-lg hover:bg-[#333] transition-colors">
                  <h3 className="text-2xl font-bold mb-2">Tomáš Thúr</h3>
                  <p className="text-gray-400">Basgitara</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in-up" delay={500}>
                <div className="bg-[#2a2a2a] p-6 rounded-lg hover:bg-[#333] transition-colors">
                  <h3 className="text-2xl font-bold mb-2">Patrik Halász</h3>
                  <p className="text-gray-400">Bicie</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in-up" delay={650}>
                <div className="bg-[#2a2a2a] p-6 rounded-lg hover:bg-[#333] transition-colors">
                  <h3 className="text-2xl font-bold mb-2">Tibor Kurilla</h3>
                  <p className="text-gray-400">Gitara</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* CTA tlačidlá */}
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/hudba"
                className="px-8 py-4 bg-[#ff0000] text-white font-bold text-lg rounded hover:bg-[#cc0000] transition-colors text-center hover:scale-105 transform duration-200"
              >
                NAŠA HUDBA →
              </Link>
              
              <Link 
                href="/novinky"
                className="px-8 py-4 bg-[#2a2a2a] text-white font-bold text-lg rounded hover:bg-[#333] transition-colors text-center hover:scale-105 transform duration-200"
              >
                NOVINKY →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </main>
    </div>
  );
}
