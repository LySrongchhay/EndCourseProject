import React from 'react'
import data_product from '../assets/data'
import Item from '../item/Item'

const Popular = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-16 bg-white">
      {/* Title */}
      <h1 className="text-[#171717] text-3xl md:text-[50px] font-semibold text-center">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[180px] h-[6px] rounded-[10px] bg-[#252525]" />

      {/* Product List */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-[30px] px-6 md:px-0">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  )
}

export default Popular
