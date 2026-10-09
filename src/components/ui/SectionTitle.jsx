export default function SectionTitle({ children, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="pt-[3px] font-display text-[36px] leading-[1.3] text-black sm:text-[48px] lg:text-[60px] lg:leading-[78px]">
        {children}
      </h2>
      <span className="mx-auto mt-[6px] block h-[10px] w-[200px] rounded-[30px] bg-sun sm:w-[270px]" />
    </div>
  )
}
