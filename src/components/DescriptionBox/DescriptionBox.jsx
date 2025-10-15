import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-24 mx-4 md:mx-20 flex flex-col md:flex-row gap-6'>
      {/* Left navigation */}
      <div className='flex flex-col gap-4 md:w-[180px]'>
        <div className="flex items-center justify-center text-[16px] font-semibold h-16 border border-solid border-gray-300">
          Description
        </div>
        <div className="flex items-center justify-center text-[16px] font-semibold h-16 border border-solid border-gray-300 bg-gray-100 text-gray-600">
          Review (122)
        </div>
      </div>

      {/* Main description */}
      <div className='flex-1 border border-solid border-gray-300 p-6 md:p-12'>
        <p className='text-gray-800 text-base md:text-lg leading-relaxed'>
          We offer a carefully curated selection of products across multiple categories, including fashion, electronics, home essentials, beauty products, gadgets, and much more. Each product is displayed with detailed descriptions, clear images, pricing information, and customer reviews, so you can make informed decisions before purchasing. 
        </p>
        <p className='mt-4 text-gray-800 text-base md:text-lg leading-relaxed'>
          Our website is built to provide a smooth, seamless, and secure shopping experience. With features like smart search, category filters, and personalized recommendations, you can easily find products that suit your preferences. Adding items to your shopping cart, adjusting quantities, and checking out is simple and fast, supported by multiple secure payment options such as credit/debit cards, digital wallets, and cash-on-delivery.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
