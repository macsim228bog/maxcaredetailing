import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeftRight } from 'lucide-react';

import wheelBefore from '../assets/portfolio/wheel_before.jpg';
import wheelAfter from '../assets/portfolio/wheel_after.jpg';
import interiorBefore from '../assets/portfolio/interior_before.jpg';
import interiorAfter from '../assets/portfolio/interior_after.jpg';
import trunkBefore from '../assets/portfolio/trunk_before.jpg';
import trunkAfter from '../assets/portfolio/trunk_after.jpg';
import backseatBefore from '../assets/portfolio/backseat_before.jpg';
import backseatAfter from '../assets/portfolio/backseat_after.jpg';
import driverBefore from '../assets/portfolio/driver_before.jpg';
import driverAfter from '../assets/portfolio/driver_after.jpg';
// Внутренний компонент для ползунка До/После (добавил проп aspectRatio для управления пропорциями)
const BeforeAfterSlider = ({ beforeImg, afterImg, aspectRatio = "aspect-[4/3] md:aspect-video" }: { beforeImg: string, afterImg: string, aspectRatio?: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden group bg-zinc-900 border border-zinc-800 shadow-2xl select-none`}>
      
      {/* Изображение "ПОСЛЕ" */}
      <img 
        src={afterImg} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Изображение "ДО" */}
      <img 
        src={beforeImg} 
        alt="Before" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        draggable={false}
      />

      {/* Невидимый инпут */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
      />

      {/* Линия и ползунок */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-lg transition-transform group-hover:scale-110">
          <ChevronsLeftRight size={18} strokeWidth={3} />
        </div>
      </div>

      {/* Лейблы */}
      <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded uppercase tracking-wider z-10 pointer-events-none backdrop-blur-md font-bold">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-teal-500/90 text-white text-[10px] px-2 py-1 rounded uppercase tracking-wider z-10 pointer-events-none backdrop-blur-md font-bold">
        After
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Обновленная структура данных: теперь внутри каждого проекта массив sliders
const portfolioItems = [
    {
      id: 1,
      title: 'Premium Exterior & Interior',
      car: 'BMW X5',
      // ИСПРАВЛЕНО: Описание теперь про внешку и общую чистку
      description: 'Full decontamination wash and wheel restoration followed by a deep interior refresh. Every surface brought back to a factory finish.',
      sliders: [
        {
          id: '1a',
          label: 'Wheels & Rims', 
          beforeImg: wheelBefore, 
          afterImg: wheelAfter, 
        },
        {
          id: '1b',
          label: 'Pedals Detail', // На фото 10/11 именно педали X5
          beforeImg: interiorBefore, 
          afterImg: interiorAfter, 
        }
      ]
    },
    {
      id: 2,
      title: 'Full Cabin Restoration',
      car: 'BMW 335i',
      // Описание верное
      description: 'Intensive stain removal and steam cleaning. We focused on high-traffic areas like the trunk and rear passenger seating.',
      sliders: [
        {
          id: '2a',
          label: 'Trunk Space',
          beforeImg: trunkBefore, 
          afterImg: trunkAfter, 
        },
        {
          id: '2b',
          label: 'Rear Seating',
          beforeImg: backseatBefore, 
          afterImg: backseatAfter, 
        }
      ]
    },
    {
      id: 3,
      title: 'Cockpit Detail',
      car: 'BMW 335i',
      // ИСПРАВЛЕНО: Описание теперь про руль и консоль
      description: 'Deep cleaning of the driver side, including steering wheel and center console. Removing all dust and grime from the controls.',
      sliders: [
        {
          id: '3a',
          label: 'Dashboard', // На фото 12/13 руль и торпеда
          beforeImg: driverBefore, // Подставь сюда фото 12 (до)
          afterImg: driverAfter,   // Подставь сюда фото 13 (после)
        }
      ]
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < portfolioItems.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок и управление */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col h-full">
          <div>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
              The Results. <br />
              <span className="text-teal-500 not-italic">Unfiltered.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
              Slide to see the transformation. We tackle everything from daily drivers to luxury exotics, paying attention to the smallest details.
            </p>
            <div className="w-20 h-1 bg-zinc-800 rounded-full mb-12" />
          </div>

          {/* Кнопки навигации карусели */}
          <div className="flex items-center gap-4 mt-auto">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-white transition-all hover:bg-teal-500 hover:border-teal-500 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-zinc-800 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-zinc-500 font-medium tracking-widest text-sm">
              <span className="text-white">0{activeIndex + 1}</span> / 0{portfolioItems.length}
            </div>

            <button 
              onClick={handleNext}
              disabled={activeIndex === portfolioItems.length - 1}
              className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-white transition-all hover:bg-teal-500 hover:border-teal-500 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-zinc-800 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Правая колонка: Карусель с ползунками */}
        <div className="lg:col-span-7 relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {portfolioItems.map((item) => (
              <div key={item.id} className="w-full shrink-0 px-2 md:px-0">
                <div className="bg-zinc-900/40 border border-zinc-800/50 p-4 md:p-6 rounded-3xl">
                  
                  {/* Динамическая сетка: 2 колонки если слайдеров > 1 */}
                  <div className={`grid gap-4 md:gap-6 ${item.sliders.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {item.sliders.map((slider) => (
                      <div key={slider.id} className="flex flex-col gap-3">
                        <BeforeAfterSlider 
                          beforeImg={slider.beforeImg} 
                          afterImg={slider.afterImg} 
                          // Если картинок 2, делаем их квадратными (чтобы не были слишком узкими). Если 1 - широкоформатная.
                          aspectRatio={item.sliders.length > 1 ? 'aspect-square' : 'aspect-video'} 
                        />
                        {slider.label && (
                          <div className="text-center">
                            <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                              {slider.label}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Описание работы */}
                  <div className="mt-8 px-2 md:px-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-white text-2xl font-bold uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <span className="shrink-0 px-3 py-1 rounded-full bg-zinc-800 text-teal-400 text-[10px] font-bold uppercase tracking-widest border border-zinc-700">
                        {item.car}
                      </span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;