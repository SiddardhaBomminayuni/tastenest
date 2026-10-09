import { serviceCards } from '../data/content'

export default function About() {
  return (
    <section id="about" className="pt-[90px] lg:pt-[134px]">
      <div className="container-main">
        <div className="grid gap-y-[30px] lg:grid-cols-[520fr_600fr] lg:gap-x-[80px] xl:gap-x-[180px]">
          <div>
            <p className="font-display text-[16px] leading-[30px] tracking-[2px] text-brand uppercase sm:text-[18px]">
              About The Food Restaurant
            </p>
            <h2 className="mt-[8px] max-w-[520px] font-display text-[36px] leading-[1.3] text-black sm:text-[48px] lg:text-[60px] lg:leading-[78px]">
              New Ground with Dishes to be Enjoyed
            </h2>
          </div>

          <div>
            <p className="max-w-[585px] font-body text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">
              Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte
              nascete ridiculus mus nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan ligula.
            </p>
            <div className="mt-[31px] flex items-start gap-[20px]">
              <img src="/images/author.png" alt="Willimes James" className="size-[70px] shrink-0 rounded-full object-cover sm:size-[80px]" />
              <div>
                <h3 className="font-display text-[24px] leading-[50px] tracking-[2px] text-black sm:text-[30px]">Willimes James</h3>
                <p className="mt-[5px] font-body text-[15px] leading-[16px] text-black sm:text-[16px]">
                  Director and Chief Operations Officer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] grid gap-[30px] sm:grid-cols-2 lg:mt-[48px] lg:grid-cols-3">
          {serviceCards.map((card, i) => (
            <a
              key={card.title}
              href="#menu"
              className={`group relative mx-auto block aspect-[413.33/524.22] w-full max-w-[413px] overflow-hidden rounded-[30px] ${
                i === 1 ? 'lg:mt-[65px]' : ''
              } ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-[15px] rounded-[30px] border-[5px] border-sun">
                <span className="absolute inset-x-0 bottom-0 flex h-[67px] items-center justify-center rounded-[20px] bg-sun font-display text-[26px] leading-[36px] text-black sm:text-[30px]">
                  {card.title}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
