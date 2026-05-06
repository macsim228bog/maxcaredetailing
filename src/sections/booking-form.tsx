import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

// Импортируем данные для выпадающего списка
import { pricingData } from '@/pricingData';

// Описываем типы данных нашей формы
type BookingFormInputs = {
  name: string;
  phone: string;
  package: string;
  message: string;
};

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Инициализируем react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormInputs>();

  // Эта функция сработает только если форма прошла всю валидацию
  const onSubmit: SubmitHandler<BookingFormInputs> = async (data) => {
    // Формируем данные для Web3Forms
    const formData = new FormData();
    formData.append('access_key', '3f98c2f9-662e-46a1-87b9-d2c9f3064b22');
    formData.append('subject', 'New Booking Request from MaxCare Mobile');
    
    // Добавляем данные из хука
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('package', data.package);
    formData.append('message', data.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset(); // Очищаем форму встроенной функцией react-hook-form
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('API returned an error');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="book" className="w-full bg-zinc-950 py-24 md:py-32 px-6 relative border-t border-zinc-900 overflow-hidden">
      
      {/* Декоративное свечение */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Левая колонка */}
        <div className="lg:col-span-5 relative z-10">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Let's get to <br />
            <span className="text-teal-500 not-italic">work.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
            Ready to experience the ultimate mobile detailing? Fill out the form, select your desired package, and we will contact you within 24 hours to confirm your appointment.
          </p>
          <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Правая колонка: Форма */}
        <div className="lg:col-span-7 relative z-10">
          <div className="bg-zinc-900/50 border border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-20 h-20 text-teal-500 mb-6" />
                <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-2">Request Sent!</h3>
                <p className="text-zinc-400">We will get back to you shortly to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Your Name</label>
                    <input 
                      id="name" 
                      placeholder="John Doe"
                      className={`w-full bg-zinc-950 border rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-teal-500 focus:ring-teal-500'}`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+1 (647) 000-0000"
                      className={`w-full bg-zinc-950 border rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-teal-500 focus:ring-teal-500'}`}
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\d\s\-+()]+$/,
                          message: "Invalid phone number format"
                        },
                        minLength: {
                          value: 10,
                          message: "Phone number is too short"
                        }
                      })}
                    />
                    {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone.message}</span>}
                  </div>
                </div>

                {/* Package Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="package" className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Select Package</label>
                  <select 
                    id="package" 
                    className={`w-full bg-zinc-950 border rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-1 transition-all appearance-none cursor-pointer ${errors.package ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-teal-500 focus:ring-teal-500'}`}
                    {...register("package", { required: "Please select a package" })}
                    defaultValue=""
                  >
                    <option value="" disabled>-- Choose a package --</option>
                    {Object.values(pricingData).map((category, index) => (
                      <optgroup key={index} label={category.title}>
                        {category.packages.map((pkg, pIdx) => (
                          <option key={pIdx} value={`${pkg.name} ($${pkg.price})`}>
                            {pkg.name} (${pkg.price})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {errors.package && <span className="text-red-500 text-xs font-medium">{errors.package.message}</span>}
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Vehicle Details & Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Make, model, year, and details..."
                    className={`w-full bg-zinc-950 border rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-teal-500 focus:ring-teal-500'}`}
                    {...register("message", { required: "Please provide vehicle details" })}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message.message}</span>}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold uppercase tracking-wider py-5 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;