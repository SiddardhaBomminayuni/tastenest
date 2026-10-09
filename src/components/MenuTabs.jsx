import { useState } from 'react'
import { menuCategories } from '../data/content'

function CategoryTab({ category, active, onSelect }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={`relative flex size-[150px] flex-col items-center justify-start rounded-[20px] border-[5px] pt-[22px] transition-colors sm:size-[135px] sm:pt-[16px] md:size-[165px] md:pt-[26px] lg:size-[190px] lg:pt-[35px] ${
        active ? 'border-brand bg-brand text-white' : 'border-line bg-white text-black hover:border-brand'
      }`}
    >
      <span
        aria-hidden="true"
        className={`block size-[54px] sm:size-[48px] md:size-[60px] lg:size-[70px] ${active ? 'bg-white' : 'bg-brand'}`}
        style={{
          WebkitMaskImage: `url(${category.icon})`,
          maskImage: `url(${category.icon})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
      <span className="mt-[5px] font-display text-[20px] leading-[36.67px] capitalize sm:text-[18px] md:text-[20px] lg:text-[22px]">{category.label}</span>
      {active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-[23px] left-1/2 h-[40px] w-[89%] -translate-x-1/2 bg-brand [clip-path:polygon(0_0,100%_0,100%_50%,50%_100%,0_50%)]"
        />
      )}
    </button>
  )
}

export default function MenuTabs() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const active = menuCategories.find((c) => c.id === activeId)

  return (
    <section id="menu" className="pt-[90px] lg:pt-[110px]">
      <div className="mx-auto w-full max-w-[1300px] px-[15px] lg:px-0">
        <div role="tablist" aria-label="Menu categories" className="mx-auto grid w-fit grid-cols-2 gap-[20px] sm:grid-cols-4">
          {menuCategories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              active={category.id === activeId}
              onSelect={() => setActiveId(category.id)}
            />
          ))}
        </div>

        <div
          role="tabpanel"
          className="relative mt-[50px] rounded-[30px] bg-mist px-[20px] pt-[10px] pb-[30px] sm:px-[40px] lg:mt-[60px] lg:grid lg:grid-cols-[620fr_680fr] lg:rounded-none lg:bg-transparent lg:p-0"
        >
          <div aria-hidden="true" className="absolute inset-y-0 right-0 left-[26%] hidden rounded-[30px] bg-mist lg:block" />

          <img
            src="/images/menu-bbq.png"
            alt="Grilled chicken platter"
            className="relative mx-auto w-full max-w-[460px] lg:mt-[50px] lg:max-w-none"
          />

          <div className="relative lg:pt-[105px] lg:pr-[100px] lg:pb-[55px] lg:pl-[40px]">
            <h3 className="font-display text-[34px] leading-[48px] text-black lg:text-[40px]">{active.heading}</h3>
            <ul className="mt-[16px] lg:mt-[22px]">
              {active.items.map((item, i) => (
                <li
                  key={item.name}
                  className={i < active.items.length - 1 ? 'mb-[12px] border-b-2 border-dashed border-black pb-[19px]' : ''}
                >
                  <div className="flex h-[36.6px] items-center justify-between gap-[15px]">
                    <h4 className="font-display text-[19px] leading-[26.4px] text-black sm:text-[22px]">{item.name}</h4>
                    <span className="font-display text-[19px] leading-[36.67px] text-brand sm:text-[22px]">{item.price}</span>
                  </div>
                  <p className="mt-[1.5px] font-body text-[15px] leading-[26.67px] sm:text-[16px]">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
