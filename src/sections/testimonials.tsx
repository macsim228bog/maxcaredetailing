import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Top-notch service! The ceramic coating made my paint look like liquid glass. Very professional guys, arrived exactly on time with all their own equipment. Highly recommend for high-end vehicles.",
      name: "Alexey V.",
      location: "Richmond Hill",
    },
    {
      text: "I booked the full interior package before selling my Honda, and it looks so good I almost want to keep it now. Super easy booking process and fantastic results. Worth every cent.",
      name: "Rahul S.",
      location: "Brampton",
    },
    {
      text: "With two toddlers, my SUV's backseat was a disaster zone. MDC worked an absolute miracle. They got stains out that I thought were permanent. The car smells incredible!",
      name: "Emily C.",
      location: "Etobicoke",
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900" id="reviews">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Левая колонка: Заголовок (Sticky на десктопе) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Real results. <br />
            <span className="text-teal-500 not-italic">Real clients.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
            Don't just take our word for it. Read what car owners across the Greater Toronto Area have to say about the MDC experience.
          </p>
          <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Правая колонка: Вертикальные карточки отзывов */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="relative p-8 md:p-10 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden hover:bg-zinc-900 transition-colors group"
            >
              {/* Фоновая иконка кавычек (Watermark) */}
              <Quote className="absolute -top-6 -right-6 w-48 h-48 text-zinc-800/10 group-hover:text-teal-900/10 transition-colors pointer-events-none -rotate-12 z-0" />

              <div className="relative z-10 flex flex-col">
                
                {/* Звезды */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                  ))}
                </div>

                {/* Текст отзыва */}
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  "{review.text}"
                </p>

                {/* Автор и локация (с разделителем) */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-teal-500 shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base uppercase tracking-wide">{review.name}</h4>
                    <p className="text-zinc-500 text-sm">{review.location}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;