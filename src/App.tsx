import FadeIn from "./components/fade-in"
import Footer from "./components/footer"
import Header from "./components/header"
import BookingForm from "./sections/booking-form"
import Difference from "./sections/difference"
import Hero from "./sections/hero"
import HowItWorks from "./sections/how-it-works"
import Portfolio from "./sections/portfolio"
import Pricing from "./sections/pricing"
import ServiceArea from "./sections/service-area"
import Testimonials from "./sections/testimonials"

export function App() {
  return (
    // min-h-screen - минимальная высота во весь экран
    // flex-col - элементы идут сверху вниз
    // bg-zinc-950 - задаем базовый темный фон для всего сайта
    // antialiased - делает шрифты более гладкими
    <div className="min-h-screen flex flex-col bg-zinc-950 font-sans text-zinc-50 antialiased selection:bg-teal-500/30">
      <Header />
      
      {/* Оборачиваем остальной контент в main для семантики */}
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <FadeIn>
          <HowItWorks/>
        </FadeIn>
        <FadeIn>
        <Difference/>

        </FadeIn>
        <FadeIn>
        <Testimonials/>

        </FadeIn>
        <FadeIn>
        <Pricing/>

        </FadeIn>
        {/* <FadeIn>
        <VideoSection/>

        </FadeIn> */}
        <FadeIn>
        <Portfolio/>

        </FadeIn>
        <FadeIn>
        <ServiceArea/>
        </FadeIn>
        <FadeIn>
        <BookingForm/>
        </FadeIn>
      </main>
      <Footer/>
    </div>
  )
}

export default App