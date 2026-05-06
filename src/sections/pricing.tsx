// src/sections/Pricing.tsx
import { useState } from 'react';
import { Check, Sparkles, Plus } from 'lucide-react';

// Импортируем наши данные из отдельного файла
import { pricingData, categories } from '@/pricingData.ts';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('full-detail');
  
  // Достаем активные данные на основе выбранной вкладки
  const activeData = pricingData[activeTab as keyof typeof pricingData];

  return (
    <section id="pricing" className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок и Меню (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
            Our <br />
            <span className="text-teal-500 not-italic">Packages.</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            Transparent pricing. No hidden fees. Select a category below to see our detailed service options.
          </p>
          
          <div className="w-16 h-1 bg-zinc-800 rounded-full mb-8" />

          {/* Навигация по категориям */}
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.1)]' 
                    : 'bg-zinc-900/30 text-zinc-500 border border-transparent hover:bg-zinc-900 hover:text-zinc-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Примечание */}
          <div className="mt-8 p-5 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
            <p className="text-zinc-400 text-xs leading-relaxed">
              * Prices shown are starting points for standard 5-seat sedans. An additional fee may apply for 7-seaters, trucks, or excessively dirty vehicles.
            </p>
          </div>
        </div>

        {/* Правая колонка: Карточки с ценами */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="mb-4">
            <h3 className="text-white text-2xl font-bold">{activeData.title}</h3>
            <p className="text-zinc-400 mt-2">{activeData.description}</p>
          </div>

          {activeData.isGrid ? (
            // Сетка для Add-ons
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeData.packages.map((pkg, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl hover:border-teal-500/30 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white font-bold uppercase tracking-wide text-sm pr-4">{pkg.name}</h4>
                    <span className="text-teal-400 font-black text-lg">${pkg.price}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400 text-xs">
                        <Plus size={14} className="text-zinc-600 shrink-0 mt-0.5 group-hover:text-teal-500/50 transition-colors" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // Широкие карточки для основных пакетов
            <div className="flex flex-col gap-6">
              {activeData.packages.map((pkg, idx) => (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row gap-8 p-8 rounded-3xl overflow-hidden transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-zinc-900 border border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.05)]' 
                      : 'bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/60'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-8 bg-teal-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-b-lg flex items-center gap-1 shadow-lg">
                      <Sparkles size={12} /> Most Popular
                    </div>
                  )}

                  <div className="md:w-1/3 shrink-0 flex flex-col items-start border-b md:border-b-0 md:border-r border-zinc-800/80 pb-6 md:pb-0 md:pr-8">
                    <h4 className="text-white text-xl font-black uppercase tracking-tight mb-2">
                      {pkg.name}
                    </h4>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-zinc-500 font-bold">$</span>
                      <span className={`text-4xl font-black tracking-tighter ${pkg.popular ? 'text-teal-400' : 'text-white'}`}>
                        {pkg.price}
                      </span>
                    </div>
                    {/* Кнопка теперь ведет на якорь формы бронирования */}
                    <a 
                      href="#book"
                      className={`w-full py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all active:scale-95 text-center block ${
                        pkg.popular 
                          ? 'bg-teal-500 text-white hover:bg-teal-400 shadow-lg shadow-teal-500/20' 
                          : 'bg-zinc-100 text-zinc-900 hover:bg-white'
                      }`}
                    >
                      Book Now
                    </a>
                  </div>

                  <div className="md:w-2/3">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${pkg.popular ? 'bg-teal-500/20 text-teal-400' : 'bg-zinc-800 text-zinc-400'}`}>
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-zinc-300 text-sm leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Pricing;