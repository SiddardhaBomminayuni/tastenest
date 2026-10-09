import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { experts } from '../data/content'
import SectionTitle from './ui/SectionTitle'

const socials = [
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaInstagram, label: 'Instagram' },
]

export default function Experts() {
  return (
    <section id="experts" className="pt-[90px] lg:pt-[71px]">
      <div className="container-main">
        <SectionTitle>Meet Our Experts</SectionTitle>

        <div className="mt-[30px] grid gap-[30px] sm:grid-cols-2 lg:mt-[9px] lg:grid-cols-3">
          {experts.map((chef, i) => (
            <article
              key={chef.name}
              className={`mx-auto w-full max-w-[413px] pb-[10px] ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img src={chef.image} alt={chef.name} className="aspect-[413.33/544.12] w-full object-contain" />
              <div className="relative z-10 mx-auto -mt-[43.58%] flex aspect-square w-[91.94%] flex-col items-center justify-center rounded-full border-[5px] border-line bg-white pb-[2px] text-center">
                <p className="font-display text-[16px] leading-[30px] text-brand sm:text-[18px]">{chef.role}</p>
                <h3 className="mt-[1px] font-display text-[28px] leading-[42px] text-black sm:text-[35px]">{chef.name}</h3>
                <div className="mt-[20px] flex gap-[11.5px] sm:mt-[24.5px]">
                  {socials.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`${chef.name} on ${label}`}
                      className="grid size-[50px] place-items-center rounded-full bg-mist text-[#373737] transition-colors hover:bg-brand hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
                <img src="/images/signature.png" alt="" className="mt-[18.7px] h-[27px] w-[139px]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
