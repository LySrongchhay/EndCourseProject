import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems max-w-[1200px] mx-auto px-4 md:px-8 my-20">
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-8 py-5 text-[#454545] text-lg font-semibold border-b border-[#e2e2e2]">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p className="text-center">Remove</p>
      </div>

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div
              key={e.id}
              className="grid grid-cols-2 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-6 md:gap-8 py-5 border-b border-[#e2e2e2] text-[#454545]"
            >
              <img
                className="h-[60px] w-[60px] object-contain"
                src={e.image}
                alt={e.name}
              />
              <p className="font-medium text-[15px] md:text-[17px]">{e.name}</p>
              <p className="hidden md:block">${e.new_price}</p>

              {/* Quantity Buttons */}
              <div className="flex items-center justify-center ml-[-60px]">
                <button
                  onClick={() => removeFromCart(e.id)}
                  className="px-3 py-1 border border-gray-300 cursor-pointer"
                >
                  -
                </button>
                <span className="w-[50px] text-center border-t border-b border-gray-300 py-1">
                  {cartItems[e.id]}
                </span>
                <button
                  onClick={() => addToCart(e.id)}
                  className="px-3 py-1 border border-gray-300 cursor-pointer"
                >
                  +
                </button>
              </div>

              <p className="hidden md:block">
                ${e.new_price * cartItems[e.id]}
              </p>

              {/* Remove icon aligned under "Remove" text */}
              <div className="flex justify-center">
                <img
                  className="w-[20px] cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Bottom Section */}
      <div className="cartitem-down flex flex-col md:flex-row justify-between gap-10 mt-20">
        {/* Totals */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Cart Totals</h1>
          <div className="text-[16px]">
            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-2 font-semibold">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-full md:w-[262px] h-[58px] bg-[#ff5a5a] text-white text-[16px] font-semibold rounded-md hover:bg-[#e14d4d] transition cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 text-[16px] font-medium">
          <p className="text-[#555]">
            If you have a promo code, enter it here:
          </p>
          <div className="flex w-full md:w-[504px] mt-4 bg-[#eaeaea] rounded-md overflow-hidden h-[64px]">
            <input
              className="flex-1 px-4 bg-transparent outline-none text-[16px]"
              type="text"
              placeholder="Promo code"
            />
            <button className="w-[130px] bg-black text-white text-[16px] font-medium hover:bg-gray-800 transition cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
