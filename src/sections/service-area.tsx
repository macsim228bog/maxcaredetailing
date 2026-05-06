import { Map } from 'lucide-react';

const ServiceArea = () => {
  // Те же ровные ряды
  const regionRows = [
    ['Mississauga', 'Oakville', 'Toronto', 'Hamilton'],
    ['Scarborough', 'Vaughan', 'Milton', 'North York'],
    ['Richmond Hill', 'Ajax', 'Etobicoke', 'Brampton'],
    ['Newmarket', 'Pickering', 'Markham', 'Oshawa']
  ];

  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Левая колонка: Заголовок */}
        <div className="lg:col-span-5 relative z-10">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            We come <br />
            <span className="text-teal-500 not-italic">to you.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
            Proudly serving the Greater Toronto Area. Our fully equipped mobile units bring the showroom experience directly to your driveway, office, or gym parking lot.
          </p>
          <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Правая колонка: Облако городов */}
        <div className="lg:col-span-7 relative flex items-center">
          
          {/* Фоновая иконка (Watermark) */}
          <Map className="absolute -top-10 -right-10 w-72 h-72 text-zinc-800/10 pointer-events-none z-0 -rotate-6" />

          {/* Карточки регионов */}
          <div className="relative z-10 flex flex-col gap-3 md:gap-4">
            {regionRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-3 md:gap-4 justify-start">
                {row.map((region, idx) => (
                  <div 
                    key={idx}
                    className="group relative flex items-center gap-3 px-5 py-3 md:py-3.5 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl hover:bg-zinc-900 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden shadow-lg"
                  >
                    {/* Легкий градиентный блик при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    
                    {/* Точка-индикатор (имитация карты) */}
                    <div className="relative w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-teal-400 transition-colors duration-300 shadow-[0_0_0_rgba(20,184,166,0)] group-hover:shadow-[0_0_12px_rgba(20,184,166,0.8)]" />
                    
                    {/* Текст */}
                    <span className="relative z-10 text-zinc-400 text-sm md:text-base font-bold tracking-wide group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {region}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceArea;