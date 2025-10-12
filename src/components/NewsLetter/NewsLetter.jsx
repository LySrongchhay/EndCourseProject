import React from 'react';

const NewsLetter = () => {
  return (
    <section className="w-[90%] md:w-[65%] mx-auto my-[80px] py-12 px-6 flex flex-col items-center justify-center gap-8
                        bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-3xl">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 text-center">
        Get Exclusive Offers On Your Email
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-600 text-center">
        Subscribe to our newsletter and stay updated
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-3xl bg-white rounded-full border border-gray-300 overflow-hidden">
        <input 
          type="email" 
          placeholder="Your Email id" 
          className="flex-1 px-6 py-4 text-gray-700 text-base sm:text-lg font-serif focus:outline-none" 
        />
        <button className="w-full sm:w-[200px] py-4 sm:py-0 bg-black text-white font-semibold text-base sm:text-lg 
                           rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;
