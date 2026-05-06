import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900" id="portfolio">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок (Sticky на десктопе) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Watch us <br />
            <span className="text-teal-500 not-italic">work.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
            We believe in complete transparency. No studio lighting or camera tricks — just real cars, real driveways, and real results across the GTA.
          </p>
          <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Правая колонка: Карточка с видео */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative p-4 md:p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden group hover:bg-zinc-900 transition-colors">
            
            {/* Фоновая иконка (Watermark) */}
            <PlayCircle className="absolute -top-10 -right-10 w-64 h-64 text-zinc-800/10 group-hover:text-teal-900/10 transition-colors pointer-events-none z-0" />

            {/* Контейнер видеоплеера */}
            <div className="relative z-10 w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-800 group-hover:ring-teal-500/30 transition-all duration-500">
              <video 
                className="w-full h-full object-cover outline-none"
                controls
                preload="metadata"
                // Вставь сюда красивый кадр из видео друга
                poster="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2000&auto=format&fit=crop" 
              >
                {/* Путь к файлу видео */}
                <source src="/promo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Описание под видео (как кейс) */}
            <div className="relative z-10 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2 md:px-4">
               <div>
                 <h3 className="text-white font-bold text-xl uppercase tracking-tight">Full Transformation</h3>
                 <p className="text-zinc-400 text-sm mt-1">Corvette C8 • Exterior Detail & Ceramic Wash</p>
               </div>
               
               {/* Теги */}
               <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[11px] font-bold uppercase tracking-widest border border-teal-500/20">
                    Raw Footage
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-[11px] font-bold uppercase tracking-widest">
                    4K
                  </span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;