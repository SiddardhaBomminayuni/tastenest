import { FaShoppingBag } from 'react-icons/fa'
import { featuredDishes } from '../data/content'
import useAutoSlide from '../hooks/useAutoSlide'
import useItemsPerView from '../hooks/useItemsPerView'
import SectionTitle from './ui/SectionTitle'
import SliderDots from './ui/SliderDots'
import Stars from './ui/Stars'

const GAP = 30

function DishCard({ dish }) {
  return (
    <article className="relative h-[459px] overflow-hidden rounded-[30px] border-[5px] border-sun">
      <span aria-hidden="true" className="absolute inset-x-[35px] top-[89.6px] h-[149.25px] rounded-[100px] bg-brand" />
      <img src={dish.image} alt={dish.name} className="absolute inset-x-[35px] top-[15px] h-[298.5px] w-[calc(100%-70px)] object-contain" />

      <span className="absolute top-[10px] left-[10px] grid size-[70px] place-items-center rounded-full bg-sun font-display text-[18px] leading-[30px] text-black">
        SALE
      </span>

      <div className="absolute top-[313.5px] left-[35px]">
        <Stars size={18} gap={4.3} />
        <h3 className="mt-[10px] font-display text-[20px] leading-[24px] text-black">{dish.name}</h3>
        <p className="mt-[5px] flex items-center gap-[6px] font-display">
          <del className="text-[18px] leading-[30px] text-body">{dish.oldPrice}</del>
          <span className="text-[28px] leading-[46.66px] text-body">
            <span className="text-brand">$</span>
            {dish.price}
          </span>
        </p>
      </div>

      <button
        type="button"
        aria-label={`Add ${dish.name} to cart`}
        className="absolute right-[25px] bottom-[15px] grid size-[50px] place-items-center rounded-[7px] bg-sun text-black transition-colors hover:bg-brand hover:text-white"
      >
        <FaShoppingBag size={17} />
      </button>
    </article>
  )
}

export default function FeaturedDishes() {
  const perView = useItemsPerView()
  const pages = featuredDishes.length - perView + 1
  const { current, go, handlers } = useAutoSlide(pages)

  return (
    <section id="featured" className="bg-mist pt-[80px] pb-[110px] lg:pt-[90px] lg:pb-[178px]">
      <div className="mx-auto w-full max-w-[1300px] px-[15px] lg:px-0">
        <SectionTitle>Featured Dishes</SectionTitle>

        <div className="mt-[40px] touch-pan-y overflow-hidden select-none lg:mt-[9px]" {...handlers}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: GAP,
              transform: `translateX(calc(${-current} * (100% + ${GAP}px) / ${perView}))`,
            }}
          >
            {featuredDishes.map((dish) => (
              <div key={dish.name} className="shrink-0" style={{ width: `calc((100% - ${(perView - 1) * GAP}px) / ${perView})` }}>
                <DishCard dish={dish} />
              </div>
            ))}
          </div>
        </div>

        <SliderDots count={pages} active={current} onChange={go} label="dish" className="mt-[70px] justify-center" />
      </div>
    </section>
  )
}
