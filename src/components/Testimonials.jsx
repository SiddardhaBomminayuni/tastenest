import { FaQuoteRight } from 'react-icons/fa'
import { testimonials } from '../data/content'
import useAutoSlide from '../hooks/useAutoSlide'
import SliderDots from './ui/SliderDots'
import Stars from './ui/Stars'

export default function Testimonials() {
  const { current: active, go, handlers } = useAutoSlide(testimonials.length, 5000)
  const review = testimonials[active]

  return (
    <section className="pt-[90px] lg:pt-[134px]">
      <div className="container-main grid gap-y-[60px] xl:grid-cols-[610fr_635fr] xl:gap-x-[55px]">
        <div>
          <p className="font-display text-[16px] leading-[30px] tracking-[2px] text-brand uppercase sm:text-[18px]">
            Testimonials &amp; Reviews
          </p>
          <h2 className="mt-[8px] max-w-[420px] font-display text-[36px] leading-[1.3] text-black sm:text-[48px] lg:text-[60px] lg:leading-[78px]">
            Our Customar Feedbacks
          </h2>

          <div
            {...handlers}
            className="relative mt-[40px] min-h-[316px] touch-pan-y select-none rounded-[30px] border-[5px] border-sun px-[25px] pt-[35px] pb-[110px] sm:px-[50px] sm:pt-[44.5px] xl:mt-[32px] xl:h-[316px] xl:pb-0"
          >
            <div key={active} className="animate-[fadeIn_0.5s_ease]">
              <p className="max-w-[500px] font-body text-[18px] leading-[32px] sm:text-[24px] sm:leading-[40px]">{review.quote}</p>
              <div className="mt-[20px] flex flex-wrap items-center gap-x-[25px] gap-y-[8px] sm:mt-[25px]">
                <h3 className="font-display text-[22px] leading-[31.2px] text-black sm:text-[26px]">{review.name}</h3>
                <Stars size={20} gap={5} />
              </div>
            </div>
            <span className="absolute right-[10px] bottom-[10px] grid size-[75px] place-items-center rounded-full bg-sun text-black">
              <FaQuoteRight size={30} />
            </span>
          </div>

          <SliderDots count={testimonials.length} active={active} onChange={go} label="review" className="mt-[66px]" />
        </div>

        <div className="relative mx-auto aspect-[635/636] w-full max-w-[635px]">
          <div className="absolute top-[38.2%] left-0 aspect-square w-[46%] overflow-hidden rounded-[30px] bg-brand">
            <img src="/images/testimonial-2.png" alt="" className="size-full object-cover opacity-20" />
          </div>
          <img
            src="/images/testimonial-3.png"
            alt="Strawberry dessert"
            className="absolute top-[51.73%] left-[54.02%] aspect-square w-[46%] rounded-[30px] object-cover"
          />
          <img
            src="/images/testimonial-1.png"
            alt="Cup of coffee"
            className="absolute top-[2.36%] left-[35%] aspect-square w-[46%] rounded-[30px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
