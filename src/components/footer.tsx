import { Phone, Mail, MapPin } from 'lucide-react';
// Импортируем логотип (убедись, что путь правильный, как в Header)
import logo from './logo.jpg'; 

// Кастомная иконка Instagram в стиле Lucide
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Кастомная иконка TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const contacts = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call or Text',
      value: '(437) 993-3005',
      href: 'tel:4379933005',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Us',
      value: 'maxcare.toronto@gmail.com',
      href: 'mailto:maxcare.toronto@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Service Area',
      value: 'Greater Toronto Area',
      href: '#',
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      label: 'Instagram',
      value: '@maxcare.detailing',
      href: 'https://instagram.com/maxcare.detailing',
    },
    {
      icon: <TikTokIcon className="w-5 h-5" />,
      label: 'TikTok',
      value: '@maxcare.detailing',
      href: 'https://tiktok.com/@maxcare.detailing',
    },
  ];

  const footerLinks = [
    { name: 'Services', href: '#pricing' },
    { name: 'Gallery', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Book', href: '#book' },
  ];

  return (
    <footer className="w-full bg-zinc-950 pt-24 md:pt-32 pb-8 px-6 relative border-t border-zinc-900 overflow-hidden" id='footer'>
      
      {/* Декоративный фоновый свет */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
          
          {/* Левая колонка: Брендинг с круглым лого */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="MaxCare Mobile Logo" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-800 shadow-xl" 
                />
                <div className="absolute inset-0 bg-teal-500/10 blur-xl rounded-full -z-10" />
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                MaxCare <br />
                <span className="text-teal-500 not-italic text-3xl md:text-4xl">Mobile.</span>
              </h2>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
              Premium mobile detailing services delivered directly to your location. Experience the ultimate shine with MaxCare.
            </p>
            <div className="w-20 h-1 bg-zinc-800 rounded-full" />
          </div>

          {/* Правая колонка: Карточки контактов */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex flex-col gap-3 p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl hover:bg-zinc-900 hover:border-teal-500/40 transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-teal-400 group-hover:border-teal-500/30 transition-colors shadow-sm">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-1">
                      {contact.label}
                    </p>
                    <p className="text-zinc-200 font-medium group-hover:text-white transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя часть: Копирайт и ссылки */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="text-zinc-500 text-sm text-center md:text-left font-medium">
            © {new Date().getFullYear()} MaxCare Mobile — Premium Car Detailing. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;