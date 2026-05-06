import { CalendarClock, MapPin, Truck, Sparkles } from 'lucide-react';

const Difference = () => {
  const features = [
    {
      number: '01',
      title: 'Effortless Scheduling',
      description: 'Skip the endless phone tag. Reserve your slot online in seconds. Just pick your ideal package and time, and we will lock it in.',
      icon: <CalendarClock className="w-6 h-6 text-teal-400" />,
    },
    {
      number: '02',
      title: 'Anywhere in the GTA',
      description: 'Your driveway, your office parking lot, or even the gym. We bring the ultimate detailing experience directly to your location.',
      icon: <MapPin className="w-6 h-6 text-teal-400" />,
    },
    {
      number: '03',
      title: 'Pro Shop On Wheels',
      description: 'We arrive fully independent with our own spot-free water tanks, power generators, and a premium detailing arsenal. Zero setup needed from you.',
      icon: <Truck className="w-6 h-6 text-teal-400" />,
    },
    {
      number: '04',
      title: 'Flawless Finish Guarantee',
      description: 'We are absolutely obsessed with perfection. If the final result doesn’t make you say "wow", we will make it right, no questions asked.',
      icon: <Sparkles className="w-6 h-6 text-teal-400" />,
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок (Sticky на десктопе) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            The MDC <br />
            <span className="text-teal-500 not-italic">Difference.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
            Why do drivers across the Greater Toronto Area trust us with their vehicles? Because we go beyond the standard wash to deliver a premium, hassle-free experience.
          </p>
          <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Правая колонка: Вертикальные карточки преимуществ */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 md:p-10 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden hover:bg-zinc-900 transition-colors group"
            >
              {/* Фоновая цифра (Watermark) */}
              <div className="absolute -top-6 -right-4 text-[120px] font-black text-zinc-800/20 italic group-hover:text-teal-900/10 transition-colors pointer-events-none select-none z-0">
                {feature.number}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start">
                {/* Иконка */}
                <div className="w-14 h-14 shrink-0 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>

                {/* Текст преимущества */}
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-lg">
                    {feature.description}
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

export default Difference;