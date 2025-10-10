import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row w-full bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]/60 to-[#e1ffea22] overflow-hidden">

      {/* Hero Left */}
      <div className="flex-1 flex flex-col justify-center gap-5 px-6 md:pl-36 leading-[1.1] text-center md:text-left">
        <h2 className="text-[#090909] text-xl md:text-2xl font-semibold tracking-wide">
          NEW ARRIVALS ONLY
        </h2>

        <div>
          {/* Hero Hand Icon */}
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-5">
            <p className="text-[#171717] text-6xl md:text-[100px] font-bold">new</p>
            <img className="w-16 md:w-[105px]" src={hand_icon} alt="hand icon" />
          </div>

          <p className="text-[#171717] text-6xl md:text-[100px] font-bold">collections</p>
          <p className="text-[#171717] text-6xl md:text-[100px] font-bold">for everyone</p>
        </div>

        {/* Latest Collection Button */}
        <button className="group flex items-center justify-center gap-3 md:gap-4 w-[240px] md:w-[310px] h-[60px] md:h-[70px] rounded-full mt-6 md:mt-8 bg-[#ff4141] text-white text-lg md:text-[22px] font-medium cursor-pointer shadow-lg hover:bg-[#e63b3b] transition-all duration-300">
          <span>Latest Collection</span>
          <img
            src={arrow_icon}
            alt="arrow"
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Hero Right */}
      <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
        {/* subtle glow behind image */}
        <div className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-to-tr from-pink-200 to-green-200 rounded-full blur-3xl opacity-40"></div>
        <img
          src={hero_image}
          alt="hero"
          className="relative z-10 w-[300px] md:w-[500px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  )
}

export default Hero
