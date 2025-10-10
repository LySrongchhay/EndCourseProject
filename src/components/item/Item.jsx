import React from 'react'

const Item = (props) => {
  return (
    <div className="item bg-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden w-full max-w-[320px]">
      {/* Product Image */}
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-auto object-cover rounded-t-2xl"
      />

      {/* Product Info */}
      <div className="p-4">
        <p className="my-[6px] text-[#171717] font-medium">{props.name}</p>

        <div className="flex items-center gap-4">
          <span className="text-[#374151] font-semibold">${props.new_price}</span>
          <span className="text-[#8c8c8c] text-[16px] font-medium line-through">
            ${props.old_price}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Item
