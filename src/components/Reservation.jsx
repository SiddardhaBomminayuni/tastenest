import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import OutlineButton from './ui/OutlineButton'

const fieldClass =
  'h-[60px] w-full rounded-[7px] bg-white px-[30px] font-body text-[16px] font-semibold text-body outline-none placeholder:text-body focus:ring-2 focus:ring-sun'

// Shows the placeholder text until focused, then switches to the native picker.
function PickerInput({ type, placeholder, name }) {
  const [inputType, setInputType] = useState('text')
  return (
    <input
      name={name}
      type={inputType}
      placeholder={placeholder}
      aria-label={placeholder}
      required
      onFocus={() => setInputType(type)}
      onBlur={(e) => !e.target.value && setInputType('text')}
      className={fieldClass}
    />
  )
}

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <section id="contact" className="bg-[linear-gradient(to_bottom,#fff_230px,var(--color-mist)_230px)] pt-[80px] lg:bg-[linear-gradient(to_bottom,#fff_305px,var(--color-mist)_305px)] lg:pt-[155px]">
      <div className="mx-auto w-full max-w-[1300px] px-[15px] lg:px-0">
        <div
          className="flex flex-col gap-[35px] rounded-[30px] bg-brand bg-cover bg-top px-[25px] py-[45px] sm:px-[45px] lg:h-[375px] lg:flex-row lg:gap-0 lg:bg-[length:100%_122.96%] lg:px-[60px] lg:pt-[70px] lg:pb-0"
          style={{ backgroundImage: 'url(/images/reserve-bg.png)' }}
        >
          <div className="lg:w-[403px] lg:shrink-0">
            <h2 className="font-display text-[40px] leading-[50px] text-white uppercase sm:text-[50px]">
              Reserve
              <br />
              <span className="mt-[10px] inline-block border-b-[3px] border-sun">a Table</span>
            </h2>
            <p className="mt-[20px] font-body text-[18px] leading-[30px] text-white lg:mt-[29px]">Discover our New Menu !</p>
          </div>

          <form onSubmit={handleSubmit} className="grid flex-1 content-start gap-[20px] sm:grid-cols-2 lg:grid-cols-[373.33fr_171.67fr_171.67fr] lg:gap-[30px]">
            <div className="relative sm:col-span-2 lg:col-span-1">
              <select name="guests" required defaultValue="" aria-label="No of Guest" className={`${fieldClass} appearance-none pr-[50px]`}>
                <option value="" disabled>
                  No of Guest
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Person' : 'People'}
                  </option>
                ))}
              </select>
              <FaAngleDown className="pointer-events-none absolute top-1/2 right-[20px] -translate-y-1/2 text-[#737879]" size={12} />
            </div>
            <PickerInput type="date" name="date" placeholder="Date" />
            <PickerInput type="time" name="time" placeholder="Time" />
            <input name="name" type="text" placeholder="Full Name" aria-label="Full Name" required className={`${fieldClass} sm:col-span-2 lg:col-span-1`} />
            <input
              name="phone"
              type="tel"
              placeholder="Phone No"
              aria-label="Phone No"
              required
              pattern="[0-9+\-\s]{7,15}"
              className={`${fieldClass} sm:col-span-2`}
            />
            <div className="flex items-center justify-between gap-[20px] sm:col-span-2 lg:col-span-3">
              <p className="font-body text-[15px] text-white" role="status">
                {submitted && "Thanks! We'll call you to confirm your table."}
              </p>
              <OutlineButton type="submit" variant="sun" className="h-[60px] w-[130px] text-[18px]">
                Submit
              </OutlineButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
