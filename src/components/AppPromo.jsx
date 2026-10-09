import { FaApple, FaDotCircle, FaGooglePlay } from 'react-icons/fa'
import { appFeatures } from '../data/content'

export default function AppPromo() {
  return (
    <section className="relative mt-[90px] overflow-hidden bg-mist py-[80px] xl:mt-[162px] xl:h-[602px] xl:bg-transparent xl:pt-[100px] xl:pb-0">
      <img
        src="/images/app-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[-2.91%] left-0 hidden h-[105.81%] w-full max-w-none object-cover xl:block"
      />

      <div className="relative mx-auto w-full max-w-[1330px] px-[15px] xl:h-[502px]">
        <div className="relative z-10 xl:pt-[14px]">
          <p className="font-display text-[16px] leading-[30px] tracking-[2px] text-brand uppercase sm:text-[18px]">
            Best App For Foods Ordering
          </p>
          <h2 className="mt-[7px] max-w-[600px] font-display text-[34px] leading-[1.3] text-black sm:text-[50px] sm:leading-[65px]">
            Manage Your Restaurant Anytime! Anywhere!
          </h2>

          <ul className="mt-[18px] space-y-[7px]">
            {appFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-[11px] font-body text-[17px] leading-[30px] sm:text-[18px]">
                <FaDotCircle size={18} className="shrink-0 text-sun" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-[40px] flex flex-wrap gap-[20px]">
            <a
              href="#"
              className="flex h-[60px] w-[202px] items-center justify-center gap-[9px] rounded-[12px] bg-brand font-display text-[18px] text-white transition-transform hover:-translate-y-0.5"
            >
              <FaGooglePlay size={17} />
              Google Play
            </a>
            <a
              href="#"
              className="flex h-[60px] w-[185px] items-center justify-center gap-[9px] rounded-[12px] bg-black font-display text-[18px] text-white transition-transform hover:-translate-y-0.5"
            >
              <FaApple size={25} />
              App Store
            </a>
          </div>
        </div>

        {/* Mobile / tablet artwork */}
        <div className="relative mx-auto mt-[50px] flex max-w-[560px] items-end justify-center xl:hidden">
          <img src="/images/app-delivery.png" alt="Delivery rider" className="w-[42%]" />
          <img src="/images/app-phone.png" alt="Food ordering app" className="-ml-[8%] w-[62%]" />
        </div>

        {/* Desktop artwork, positioned as in the design */}
        <div className="hidden xl:block" aria-hidden="true">
          <img src="/images/app-phone.png" alt="" className="absolute top-[15px] left-[872.5px] h-[487px] w-[400px]" />
          <img src="/images/app-delivery.png" alt="" className="absolute top-[180px] left-[655px] h-[242px] w-[241px]" />
          <img src="/images/app-pizza.png" alt="" className="absolute top-[-50px] left-[1121px] h-[159px] w-[279px]" />
          <img src="/images/app-salad.png" alt="" className="absolute top-[145px] left-[1240px] h-[237px] w-[285px]" />
          <img src="/images/app-leaf.png" alt="" className="absolute top-[-45px] left-[680px] h-[92px] w-[51px]" />
        </div>
      </div>
    </section>
  )
}
