import React from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay flex mx-[170px]'>
        <div className="productdisplay-left flex gap-[17px]">
            <div className="productdisplay-img-list flex flex-col gap-[16px] ">
                <img className=' h-[163px] ' src={product.image} alt="" />
                <img className=' h-[163px] ' src={product.image} alt="" />
                <img className=' h-[163px]' src={product.image} alt="" />
                <img className=' h-[163px]' src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img w-[586px] h-[700px]' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right mx-70px flex flex-col">
            <h1 className=' text-[#3d3d3d] text-[40px] font-bold'>{product.name}</h1>
            <div className="productdisplay-right-star flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <div className='productdisplay-right-price flex my-[40px] gap-[30px] text-2xl font-bold '>
                <div className="productdisplay-right-price-old text-[#818181] line-through">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new text-[#ff4141]">
                    ${product.new_price}
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment
                </div>
                <div className="productdisplay-right-size">
                    <h1 className='mt-[55px] text-[#656565] text-xl font-semibold'>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div className=' py-[18px] px-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                        <div className=' py-[18px] px-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                        <div className=' py-[18px] px-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                        <div className=' py-[18px] px-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                        <div className=' py-[18px] px-[24px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
                    </div>   
                </div>
                <button className=' py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer'>ADD TO CART</button>
                <p className='productdisplay-right-category mt-[10px] '><span className=' font-semibold'>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category mt-[10px]'><span className=' font-semibold'>Tag :</span>Modern, Latest</p>

            </div>
        </div>
    </div>
  )
}

export default ProductDisplay