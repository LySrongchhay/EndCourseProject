import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../contexts/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
    <div className="flex flex-col lg:flex-row mx-auto max-w-[1200px] gap-4 lg:gap-6 p-2 md:p-4 lg:p-0">
      {/* Left Side: Images */}
      <div className="flex gap-2 md:gap-4">
        {/* Thumbnail List */}
        <div className="flex flex-col space-y-2 md:space-y-4 flex-shrink-0 w-[80px]">
          {[1,2,3,4].map((_, i) => (
            <img
              key={i}
              className="h-[80px] sm:h-[85px] md:h-[90px] lg:h-[92px] w-full object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-red-500 transition"
              src={product.image}
              alt={`Thumbnail ${i + 1}`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            className="
              md:w-[50%] w-full object-cover rounded-lg
              lg:h-[420px]       /* Desktop */
              md:h-[410px]       /* Tablet */
              h-[360px]          /* Mobile taller than thumbnails */
              transition
            "
            src={product.image}
            alt="Main Product"
          />
        </div>
      </div>

      {/* Right Side: Details */}
      <div className="flex-1 flex flex-col gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">{product.name}</h1>
        
        <div className="flex items-center gap-1">
          {[1,2,3,4].map((_, i) => <img key={i} src={star_icon} alt="Star" className="h-4 w-4 md:h-5 md:w-5" />)}
          <img src={star_dull_icon} alt="Star Dull" className="h-4 w-4 md:h-5 md:w-5" />
          <span className="ml-2 text-gray-600 text-xs sm:text-sm">(4 Reviews)</span>
        </div>

        <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold mt-1 md:mt-2">
          <span className="text-gray-400 line-through">${product.old_price}</span>
          <span className="text-red-500">${product.new_price}</span>
        </div>

        <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>

        <div>
          <h2 className="text-gray-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Select Size</h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {['S','M','L','XL','XXL'].map(size => (
              <div
                key={size}
                className="py-1 sm:py-2 px-3 sm:px-4 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-red-100 hover:border-red-300 transition text-xs sm:text-sm"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button onClick={()=>{addToCart(product.id)}} className="w-full lg:w-52 py-2 sm:py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 mt-2 sm:mt-4 transition text-sm sm:text-base cursor-pointer">
          ADD TO CART
        </button>

        <p className="text-gray-700 mt-1 text-xs sm:text-sm">
          <span className="font-semibold">Category:</span> Women, T-Shirt, Crop Top
        </p>
        <p className="text-gray-700 text-xs sm:text-sm">
          <span className="font-semibold">Tag:</span> Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
