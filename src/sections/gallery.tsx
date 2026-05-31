import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Исключительно ваши импорты
import car1_img1 from '../assets/gallery/cadillac-escalade.jpg';
import car1_img2 from '../assets/gallery/cadillac-escalade2.jpg';

import car2_img1 from '../assets/gallery/porsch-panamera-turbo1.jpg';
import car2_img2 from '../assets/gallery/porsch-panamera-turbo2.jpg';
import car2_img3 from '../assets/gallery/porsch-panamera-turbo3.jpg';

import car3_img1 from '../assets/gallery/porsche-cayenne.jpg';

import car4_img1 from '../assets/gallery/tesla-model-3-1.jpg';
import car4_img3 from '../assets/gallery/tesla-model-3-3.jpg';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Ваша структура данных
  const galleryItems = [
    {
      id: 1,
      carName: 'Cadillac Escalade',
      images: [
        car1_img1, 
        car1_img2, 
      ]
    },
    {
      id: 2,
      carName: 'Porsche Panamera Turbo',
      images: [
        car2_img1,
        car2_img2,
        car2_img3
      ]
    },
    {
      id: 3,
      carName: 'Porsche Cayenne',
      images: [
        car3_img1
      ]
    },
    {
      id: 4,
      carName: 'Tesla Model 3',
      images: [
        car4_img1,
        car4_img3
      ]
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок, информация о машине и управление */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col h-full">
          <div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
              The Gallery. <br />
              <span className="text-teal-500 not-italic">Showcase.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
              A closer look at our latest projects. Browse through the collection of vehicles that have received the signature MDC treatment.
            </p>
            <div className="w-20 h-1 bg-zinc-800 rounded-full mb-12" />
          </div>

          {/* Инфо об активной машине */}
          <div className="mb-12">
            <div 
              key={activeIndex} 
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
                {galleryItems[activeIndex].carName}
              </h3>
            </div>
          </div>

          {/* Кнопки навигации */}
          <div className="flex items-center gap-4 mt-auto">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-white transition-all hover:bg-teal-500 hover:border-teal-500 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-zinc-800 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-zinc-500 font-medium tracking-widest text-sm">
              <span className="text-white">0{activeIndex + 1}</span> / 0{galleryItems.length}
            </div>

            <button 
              onClick={handleNext}
              disabled={activeIndex === galleryItems.length - 1}
              className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-white transition-all hover:bg-teal-500 hover:border-teal-500 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-zinc-800 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Правая колонка: Карусель с фото */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-3xl pb-4">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {galleryItems.map((item) => (
              <div key={item.id} className="w-full min-w-full shrink-0 px-2 md:px-0">
                
                {/* Динамическая сетка. Если фото 1 - одна колонка, если больше - две колонки */}
                <div className={`grid gap-3 md:gap-4 ${item.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  
                  {/* Главное фото */}
                  <div className={`
                    ${item.images.length === 1 ? 'aspect-video' : ''} 
                    ${item.images.length === 2 ? 'col-span-1 aspect-square' : ''} 
                    ${item.images.length > 2 ? 'col-span-2 aspect-[2/1]' : ''} 
                    bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden relative group border border-zinc-800/50 shadow-2xl
                  `}>
                    <img 
                      src={item.images[0]} 
                      alt={`${item.carName} Main`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Второе фото */}
                  {item.images[1] && (
                    <div className="col-span-1 aspect-square bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden relative group border border-zinc-800/50 shadow-2xl">
                      <img 
                        src={item.images[1]} 
                        alt={`${item.carName} Detail 1`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        draggable={false}
                      />
                    </div>
                  )}

                  {/* Третье фото */}
                  {item.images[2] && (
                    <div className="col-span-1 aspect-square bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden relative group border border-zinc-800/50 shadow-2xl">
                      <img 
                        src={item.images[2]} 
                        alt={`${item.carName} Detail 2`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        draggable={false}
                      />
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;