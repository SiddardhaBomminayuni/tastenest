import { useEffect, useState } from 'react'
import { FaAngleDown, FaShoppingBasket } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { navLinks } from '../data/content'

function Logo() {
  return (
    <a href="#home" className="relative block h-[60px] w-[123px] shrink-0 overflow-hidden lg:h-[73px] lg:w-[150px]" aria-label="TasteNest home">
      <img
        src="/images/logo.png"
        alt="TasteNest - Fast Food Restaurant"
        className="absolute top-[-46.17%] left-[-22.93%] h-[196.17%] w-[143.15%] max-w-none"
      />
    </a>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_0_31px_rgba(0,22,89,0.17)]">
      <div className="mx-auto flex h-[80px] max-w-[1300px] items-center px-[15px] lg:h-[97px]">
        <Logo />

        <nav className="ml-[184px] hidden xl:block" aria-label="Main">
          <ul className="flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center font-nav text-[18px] leading-[28px] font-medium text-ink capitalize transition-colors hover:text-brand"
                >
                  {link.label}
                  {link.hasDropdown && <FaAngleDown className="mt-[6px] ml-[3px] text-[#5c5c5b]" size={13} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-[25px]">
          <a href="#featured" className="relative text-[#00a149]" aria-label="Cart, 0 items">
            <FaShoppingBasket size={19} />
            <span className="absolute -top-[8px] -right-[9px] grid size-[16px] place-items-center rounded-full bg-ink font-nav text-[12px] leading-none font-medium text-white">
              0
            </span>
          </a>

          <a
            href="#contact"
            className="hidden h-[57px] w-[182px] items-center justify-center rounded-[7px] bg-amber font-nav text-[17px] font-semibold tracking-[0.8px] text-white capitalize transition-colors hover:bg-brand sm:flex"
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-[18px] w-[31px] flex-col justify-between"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="h-[2px] w-[15px] self-end bg-ink" />
            <span className="h-[2px] w-[30px] bg-ink" />
            <span className="h-[2px] w-[15px] bg-ink" />
          </button>
        </div>
      </div>

      {/* Off-canvas menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white p-[30px] transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-ink hover:text-brand">
            <IoClose size={30} />
          </button>
        </div>
        <ul className="mt-[40px] space-y-[18px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-nav text-[20px] font-medium text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-auto flex h-[57px] items-center justify-center rounded-[7px] bg-amber font-nav text-[17px] font-semibold tracking-[0.8px] text-white"
        >
          Contact Us
        </a>
      </aside>
    </header>
  )
}
