import { FaPlay } from 'react-icons/fa'
import { heroSlides } from '../data/content'
import useAutoSlide from '../hooks/useAutoSlide'
import OutlineButton from './ui/OutlineButton'
import Stars from './ui/Stars'

function WeeklySpecial({ className = '' }) {
  return (
    <div
      className={`relative h-[192px] w-full max-w-[399px] rounded-[30px] border-[3px] border-sun bg-black/80 ${className}`}
    >
      <span className="absolute top-[-15px] right-[38px] rounded-[5px] bg-brand px-[10px] font-body text-[14px] leading-[26px] font-semibold text-white">
        Weekly Special
      </span>

      <div className="absolute top-[43px] left-[25px]">
        <p className="font-display text-[28px] leading-[28px] text-white">
          <span className="text-brand">$</span>90.85
        </p>
        <h3 className="mt-[5px] font-display text-[22px] leading-[36.67px] text-white">Sicilian Pizza</h3>
        <Stars size={15} gap={6} className="mt-[6px]" />
      </div>

      <img
        src="/images/pizza-special.png"
        alt="Sicilian pizza"
        className="absolute top-1/2 right-[25px] size-[120px] -translate-y-1/2 sm:size-[150px]"
      />
    </div>
  )
}

export default function Hero() {
  const { current, go, handlers } = useAutoSlide(heroSlides.length, 6000, { pauseOnHover: false })
  const slide = heroSlides[current]

  return (
    <section
      id="home"
      {...handlers}
      className="relative touch-pan-y overflow-hidden bg-[#141414] bg-cover bg-[position:70%_center] lg:bg-center"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/45 lg:hidden" />
      <div className="relative container-main">
        <div className="relative pt-[90px] pb-[70px] md:pt-[130px] lg:h-[710px] lg:px-[45px] lg:pt-[210px] lg:pb-0">
          <div key={current} className="animate-[fadeIn_0.6s_ease]">
            <h1 className="font-display text-[38px] leading-[1.25] text-white sm:text-[50px] lg:text-[60px] lg:leading-[75px]">
              {slide.title[0]} <br className="hidden sm:block" />
              {slide.title[1]}
            </h1>
            <p className="mt-[20px] max-w-[581px] font-body text-[18px] leading-[25px] text-white lg:mt-[30px] lg:text-[20px]">
              {slide.text[0]} <br className="hidden md:block" />
              {slide.text[1]}
            </p>
          </div>

          <div className="mt-[45px] flex items-center lg:mt-[50px]">
            <OutlineButton as="a" href="#menu" className="h-[55px] w-[190px] text-[18px] leading-[25px]">
              See Our Menus
            </OutlineButton>
            <button
              type="button"
              aria-label="Play video"
              className="ml-[45px] grid size-[75px] place-items-center rounded-full border-[3px] border-white text-white transition-colors hover:bg-white hover:text-brand"
            >
              <FaPlay size={17} className="ml-[3px]" />
            </button>
            <span className="ml-[25px] font-display text-[16px] leading-[25px] text-white sm:ml-[45px]">VIDEO</span>
          </div>

          <div className="mt-[60px] flex gap-[20px] lg:absolute lg:top-[650px] lg:left-[45px] lg:mt-0">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to banner ${i + 1}`}
                aria-current={i === current}
                onClick={() => go(i)}
                className={`size-[15px] rounded-full transition-colors ${
                  i === current ? 'border-[5px] border-sun' : 'bg-white hover:bg-sun'
                }`}
              />
            ))}
          </div>

          <WeeklySpecial className="mt-[50px] lg:absolute lg:top-[474px] lg:right-0 lg:mt-0" />
        </div>
      </div>
    </section>
  )
}
