import React from 'react';
import { MousePointerClick, Car, Key } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Schedule in Seconds',
      description: 'Forget about waiting in lines or playing phone tag. Pick your package, date, and time through our fast online system. It literally takes less than a minute.',
      icon: <MousePointerClick className="w-6 h-6 text-teal-400" />,
    },
    {
      number: '02',
      title: 'We Handle The Rest',
      description: 'Our fully-equipped detailing van arrives at your driveway or office anywhere in the GTA. You just hand us the keys, and we get straight to work.',
      icon: <Car className="w-6 h-6 text-teal-400" />,
    },
    {
      number: '03',
      title: 'Experience the Difference',
      description: 'Step into a flawlessly clean vehicle that smells and feels brand new. No driving to a shop, no hassle—just pure, showroom-quality results.',
      icon: <Key className="w-6 h-6 text-teal-400" />,
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок (Sticky на десктопе) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Zero effort. <br />
            <span className="text-teal-500 not-italic">Maximum shine.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
            Your time is valuable. We’ve completely streamlined the detailing experience so you can get a pristine car without lifting a finger or leaving your home.
          </p>
          <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Правая колонка: Вертикальные карточки шагов */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 md:p-10 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden hover:bg-zinc-900 transition-colors group"
            >
              {/* Фоновая цифра (Watermark) */}
              <div className="absolute -top-6 -right-4 text-[120px] font-black text-zinc-800/20 italic group-hover:text-teal-900/10 transition-colors pointer-events-none select-none z-0">
                {step.number}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start">
                {/* Иконка */}
                <div className="w-14 h-14 shrink-0 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>

                {/* Текст шага */}
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;