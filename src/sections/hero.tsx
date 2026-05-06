import {  ShieldCheck, Zap,  Rocket, } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-zinc-950 flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* Мягкое фоновое свечение (Radial Gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        
        {/* Eyebrow text (надзаголовок с локацией) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[1px] w-8 bg-teal-500" />
          <p className="text-teal-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            Premium Detailing • Greater Toronto Area
          </p>
          <div className="h-[1px] w-8 bg-teal-500" />
        </div>

        {/* Главный заголовок */}
        <h1 className="text-white text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
          The ultimate <span className="text-teal-500 not-italic">shine</span> <br />
          delivered to you.
        </h1>

        {/* Подзаголовок на английском */}
        <p className="text-zinc-400 text-sm md:text-xl max-w-2xl mb-10 leading-relaxed">
          Professional auto detailing right at your doorstep. We use only premium chemicals and pay attention to every detail, treating your vehicle as if it were our own. No drive needed.
        </p>

        {/* Кнопка действия (сделал rounded-full как в хедере) */}
        <Button 
          size="lg"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold uppercase text-sm px-10 py-7 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all hover:scale-105 active:scale-95"
        >
          Explore Our Packages
        </Button>

        {/* Статы / Преимущества (локализовано под GTA) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full pt-10 border-t border-zinc-800/50">
  
  {/* Пункт 1: Безопасность */}
  <div className="flex flex-col items-center md:items-start gap-1">
    <div className="flex items-center gap-2 text-white font-black text-lg">
       <ShieldCheck size={18} className="text-teal-500" />
       <span>Secure</span>
    </div>
    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-tight text-center md:text-left">
      Fully Licensed <br/> & Insured
    </p>
  </div>

  {/* Пункт 2: Технологии (Керамика) */}
  <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-black text-lg">
               <Zap size={18} className="text-teal-500" />
               <span>100%</span>
            </div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Mobile Service</p>
          </div>

  <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-black text-lg">
               <ShieldCheck size={18} className="text-teal-500" />
               <span>Premium</span>
            </div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Products & Care</p>
          </div>

  {/* Пункт 4: Скорость/Эффективность */}
  <div className="flex flex-col items-center md:items-start gap-1">
    <div className="flex items-center gap-2 text-white font-black text-lg">
       <Rocket size={18} className="text-teal-500" />
       <span>On-Site</span>
    </div>
    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-tight text-center md:text-left">
      Full Mobile <br/> Setup
    </p>
  </div>

</div>
      </div>
    </section>
  );
};

export default Hero;