import { offerBanners } from '../data/content'
import SectionTitle from './ui/SectionTitle'

export default function OfferBanners() {
  return (
    <section className="pt-[80px] lg:pt-[100px]">
      <div className="container-main">
        <SectionTitle>Discover Menu</SectionTitle>

        <div className="mt-[60px] grid gap-[70px] lg:mt-[116px] lg:grid-cols-2 xl:grid-cols-[630px_630px] lg:gap-[35px]">
          {offerBanners.map((banner) => (
            <article key={banner.title} className="relative h-[300px] sm:h-[335px]">
              <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                <img src={banner.image} alt={banner.title} className="size-full object-cover" />
              </div>
              <div className="relative pt-[40px] pl-[30px] sm:pt-[55px] sm:pl-[50px]">
                <h3 className="font-display text-[38px] leading-[60px] text-white sm:text-[50px]">{banner.title}</h3>
                <p className="mt-[9px] font-body text-[16px] leading-[30px] text-white sm:text-[18px]">
                  {banner.text[0]}
                  <br />
                  {banner.text[1]}
                </p>
              </div>
              <div className="absolute -bottom-[30px] left-[30px] flex size-[120px] flex-col items-center justify-center rounded-full bg-sun font-display sm:left-[50px] sm:size-[140px]">
                <span className="text-[28px] leading-[32px] text-brand sm:text-[32px]">{banner.price}</span>
                <span className="text-[16px] leading-[19.2px] text-black">person</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
