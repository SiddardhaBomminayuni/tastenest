import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { footerLinks, socialLinks } from '../data/content'
import OutlineButton from './ui/OutlineButton'

function ColumnTitle({ children }) {
  return (
    <h3 className="inline-block border-b-[5px] border-sun font-display text-[26px] leading-[31px] text-black xl:mt-[36px]">
      {children}
    </h3>
  )
}

function LinkList({ items }) {
  return (
    <ul className="mt-[30px] space-y-[12.16px] xl:mt-[47.5px]">
      {items.map((item) => (
        <li key={item}>
          <a href="#" className="flex items-center font-body text-[16px] leading-[27.5px] text-black transition-colors hover:text-brand">
            <FaChevronRight size={10} className="mr-[8.5px] ml-[4px] text-[#616161]" />
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    e.target.reset()
  }

  return (
    <footer className="relative mt-[100px] overflow-hidden bg-mist pt-[80px] pb-[15px] lg:mt-[217px] lg:pt-[100px]">
      <img
        src="/images/footer-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden h-[517px] w-[290px] min-[1880px]:block"
      />
      <img
        src="/images/footer-right.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 hidden h-[440px] w-[274px] min-[1880px]:block"
      />

      <div className="relative mx-auto w-full max-w-[1300px] px-[15px] xl:px-0">
        <div className="grid gap-[45px] sm:grid-cols-2 xl:grid-cols-[437fr_231fr_257fr_375fr] xl:gap-0">
          <div className="flex h-[365px] w-full max-w-[390px] flex-col rounded-[30px] bg-brand pr-[15px] pb-[32px] pl-[45px] font-display text-[16px] leading-[26.67px] text-white">
            <img src="/images/footer-logo.svg" alt="TasteNest" className="-ml-[45px] h-[114px] w-[174px]" />
            <p className="mt-[31px]">Tuesday – Saturday: 12:00pm – 23:00pm</p>
            <p className="mt-[13px] underline">Closed on Sunday</p>
            <p className="mt-auto">5 star rated on TripAdvisor</p>
          </div>

          <div>
            <ColumnTitle>About</ColumnTitle>
            <LinkList items={footerLinks.about} />
          </div>

          <div>
            <ColumnTitle>Menu</ColumnTitle>
            <LinkList items={footerLinks.menu} />
          </div>

          <div className="xl:pr-[15px]">
            <ColumnTitle>Newsletter</ColumnTitle>
            <p className="mt-[30px] font-body text-[16px] leading-[26.67px] text-black xl:mt-[47.5px]">Get recent news and updates.</p>
            <form onSubmit={handleSubscribe} className="mt-[15px] max-w-[360px]">
              <input
                type="email"
                required
                placeholder="Email Address"
                aria-label="Email Address"
                className="h-[63px] w-full rounded-[10px] border border-[#dedede] bg-white px-[35px] font-body text-[16px] text-black outline-none placeholder:text-[#c6c6c6] focus:border-brand"
              />
              <div className="mt-[26px] flex items-center gap-[30px]">
                <OutlineButton type="submit" className="h-[60px] w-[159px] text-[16px]">
                  Subscribe
                </OutlineButton>
                {subscribed && (
                  <p className="font-body text-[15px] text-black" role="status">
                    Thanks for subscribing!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-[60px] flex flex-col gap-[15px] border-t-[10px] border-sun pt-[24px] pb-[10px] md:flex-row md:items-center md:justify-between lg:mt-[100px] lg:h-[92.66px] lg:pt-[33.66px] lg:pb-0">
          <p className="pl-[10px] font-display text-[16px] leading-[26.67px] text-black md:items-start">
            <span className="font-fugaz text-brand">© 2025 TesteNest</span> | All shawonetc3 Themes.
          </p>
          <ul className="flex flex-wrap gap-x-[40px] gap-y-[8px] pl-[10px] md:pr-[10px] md:pl-0">
            {socialLinks.map((link) => (
              <li key={link}>
                <a href="#" className="font-display text-[16px] leading-[26.67px] text-black underline hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <img
        src="/images/footer-shape.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[4px] left-1/2 hidden h-[22px] w-[62px] lg:block"
      />
    </footer>
  )
}
