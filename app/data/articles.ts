export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: '2',
    slug: 'crea-cage-su-spat-navrat-po-piatich-rokoch',
    title: 'Crea Cage sú späť: návrat po piatich rokoch prinesie päť nových skladieb',
    excerpt: 'Gelnická rocková kapela Crea Cage chýbala na koncertných pódiách dlhých päť rokov, počas ktorých netvorila ani nové piesne. S príchodom roka 2025 však chalani oznámili svoj návrat a fanúšikom sľubujú ambicióznu výzvu – päť nových skladieb za 5 mesiacov.',
    content: `
      <p>Gelnická rocková kapela Crea Cage chýbala na koncertných pódiách dlhých päť rokov, počas ktorých netvorila ani nové piesne. S príchodom roka 2025 však chalani oznámili svoj návrat a fanúšikom sľubujú ambicióznu výzvu – päť nových skladieb za 5 mesiacov.</p>
      
      <p>„Číslo päť má pre nás hlboký význam. Päť rokov sme nehrali, a preto sa chceme ľuďom pripomenúť piatimi novými songami, ktorými by sme spolu opäť oživili Crea Cage rodinu," vysvetľuje basgitarista kapely Tomáš Thur.</p>
      
      <p>Kapela zároveň sľubuje aj žánrovú pestrosť, ktorá sa nebude držať výlučne metalových koreňov. „Ako každá kapela, aj my sme sa rokmi vyvíjali. Od metalu sme sa postupne dostali k rocku, kde sa cítime doma. Päť nových skladieb tak prinesie všetko od tvrdšieho rocku až po romantickú baladu," dodáva gitarista a spevák Martin Hudák.</p>
      
      <p>Prvá skladba bude oficiálne predstavená 1. marca, ďalšie budú pribúdať v desaťdňových intervaloch. Posledná, špeciálna skladba, má naplánovaný dátum vydania na 1. júla. „Táto pieseň má pre nás výnimočný význam. Naspieval nám ju legendárny Spoko z kapely Smola a Hrušky, čo je pre nás obrovská česť. Veríme, že sa bude ľuďom páčiť," uzatvára Martin Hudák.</p>
      
      <p>Či sa Crea Cage podarí túto výzvu splniť, ukážu najbližšie mesiace.</p>
    `,
    image: '/images/5_in_5.png',
    date: '16 JAN 2026',
  },
  {
    id: '1',
    slug: 'mame-novy-web',
    title: 'Máme nový web',
    excerpt: 'Reštart kapely so sebou prináša nie len 5 in 5 challenge, ale aj nový web, kde Vám budeme pravidelne prinášať tie najnovšie informácie o koncertoch, či dianí v kapele.',
    content: `
      <p>Reštart kapely so sebou prináša nie len 5 in 5 challenge, ale aj nový web, kde Vám budeme pravidelne prinášať tie najnovšie informácie o koncertoch, či dianí v kapele.</p>
      
      <p>Časom plánujeme spustiť aj predaj vlastného merchu. Stay tuned, Crea Cage je späť!</p>
      
      <p>Na našom novom webe nájdete:</p>
      <ul>
        <li>Aktuality a novinky</li>
        <li>Informácie o koncertoch</li>
        <li>Našu históriu</li>
        <li>A čoskoro aj merch!</li>
      </ul>
      
      <p>Ďakujeme za vašu podporu a tešíme sa, že môžeme byť späť!</p>
    `,
    image: '/images/cc_logo.png',
    date: '16 JAN 2026',
  },
];
