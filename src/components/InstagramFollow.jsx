import { FaInstagram } from 'react-icons/fa'

export default function InstagramFollow() {
  return (
    <section className="relative mt-[90px] overflow-hidden lg:mt-[120px]">
      <img
        src="/images/instagram-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover lg:left-[-1.28%] lg:w-[102.55%] lg:max-w-none"
      />
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative flex flex-col items-center px-[15px] py-[100px] text-center lg:h-[574px] lg:pt-[165px] lg:pb-0">
        <a
          href="#"
          aria-label="Follow us on Instagram"
          className="grid size-[100px] place-items-center rounded-full bg-brand text-white transition-transform hover:scale-105"
        >
          <FaInstagram size={50} />
        </a>
        <h2 className="mt-[20px] font-display text-[32px] leading-[1.4] text-black sm:text-[50px] lg:mt-[26px] lg:leading-[83.33px]">
          Follow @shawonetc3
        </h2>
        <p className="font-body text-[16px] leading-[30px] sm:text-[18px] lg:-mt-[1px]">Join our community to inspire your desires</p>
      </div>
    </section>
  )
}
