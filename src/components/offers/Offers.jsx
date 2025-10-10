import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <section className="offers w-11/12 max-w-[1300px] h-[60vh] md:h-[70vh] mx-auto mb-10 md:mb-8 flex flex-col md:flex-row bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22] to-transparent rounded-xl overflow-hidden">
      
      {/* Left Content */}
      <div className="offers-left flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-16 py-8 md:py-12 text-center md:text-left">
        <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-semibold leading-tight">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-semibold leading-tight">
          Offer For You
        </h1>
        <p className="text-[#171717] text-base sm:text-lg md:text-[22px] font-semibold mt-2 sm:mt-4">
          ONLY ON BEST SELLER PRODUCT
        </p>
        <button className="mt-4 sm:mt-6 md:mt-8 w-48 sm:w-60 md:w-72 h-12 sm:h-14 md:h-[70px] rounded-full bg-[#ff4141] text-white text-sm sm:text-lg md:text-[22px] font-medium hover:bg-[#e03a3a] transition-colors mx-auto md:mx-0">
          Check Now
        </button>
      </div>

      {/* Right Content */}
<div className="offers-right flex-1 flex items-center justify-center px-4 sm:px-6 md:px-16 py-6 md:py-12">
  <img 
    src={exclusive_image} 
    alt="Exclusive Offer" 
    className="w-3/4 sm:w-2/3 md:w-full max-h-[200px] sm:max-h-[300px] md:max-h-full object-contain"
  />
</div>

    </section>
  )
}

export default Offers
