import React from 'react';
import FormBg from '../assets/images/formbg.webp';

const fields = [
  {
    id: 'name',
    label: 'Individual Name',
    placeholder: 'Enter Individual Name',
    type: 'text',
  },
  {
    id: 'company',
    label: 'Company Name',
    placeholder: 'Enter Company Name',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
    type: 'email',
  },
  {
    id: 'phone',
    label: 'Phone No.',
    placeholder: 'Enter Phone No.',
    type: 'tel',
  },
  {
    id: 'schedule',
    label: 'Schedule a Meet',
    placeholder: 'mm/dd/yyyy --:-- --',
    type: 'datetime-local',
  },
];

function SponsorshipForm() {
  return (
    <section className="w-full flex justify-center px-4 py-12 md:py-16">
      <div
        className="w-full max-w-[980px] rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden border-2 border-black/20 shadow-[0_10px_0_#a88a2a]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FormBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-[#f3d89a]/90" />

        <div className="relative z-10">
          <h2 className="text-center font-[superMario] text-2xl sm:text-3xl md:text-4xl text-black">
            Sponsor Us!
          </h2>

          <form className="mt-6 md:mt-8 flex flex-col gap-4">
            {fields.map((field) => (
              <label key={field.id} className="w-full">
                <div className="w-full bg-[#C7C300] rounded-xl px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-4 items-center border-2 border-black/20 shadow-[0_4px_0_#9b9016] focus-within:ring-2 focus-within:ring-black/30">
                  <span className="font-[superMario] text-black text-base sm:text-lg whitespace-nowrap">
                    {field.label}
                  </span>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none text-black placeholder:text-black/60 text-base sm:text-lg"
                  />
                </div>
              </label>
            ))}

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="font-[superMario] text-black bg-[#E0B83A] px-8 sm:px-12 py-3 rounded-full border-2 border-black/30 shadow-[0_4px_0_#8A6A12] active:translate-y-[2px] active:shadow-[0_2px_0_#8A6A12] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SponsorshipForm;