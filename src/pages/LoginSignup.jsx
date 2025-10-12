import React from 'react'

const LoginSignup = () => {
  return (
    <div className="login-signup w-full min-h-screen bg-[#fce3fe] flex items-start justify-center pt-24">
      <div className="login-signup-container w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sign Up</h1>

        {/* Input Fields */}
        <div className="login-signup-fields flex flex-col gap-6">
          <input
            className="h-16 w-full px-4 border border-gray-300 rounded-lg text-gray-700 text-lg outline-none focus:ring-2 focus:ring-pink-300"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-16 w-full px-4 border border-gray-300 rounded-lg text-gray-700 text-lg outline-none focus:ring-2 focus:ring-pink-300"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-16 w-full px-4 border border-gray-300 rounded-lg text-gray-700 text-lg outline-none focus:ring-2 focus:ring-pink-300"
            type="password"
            placeholder="Password"
          />
        </div>

        {/* Button */}
        <button className="w-full h-16 bg-[#ff4141] text-white text-2xl font-medium rounded-lg mt-6 hover:bg-[#e03b3b] transition">
          Continue
        </button>

        {/* Login Link */}
        <p className="mt-4 text-gray-600 text-lg">
          Already have an account? 
          <span className="text-[#ff4141] font-semibold ml-1 cursor-pointer">Login here</span>
        </p>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 mt-4 text-gray-600 text-sm">
          <input type="checkbox" className="w-4 h-4 mt-1 accent-pink-300" />
          <p className="leading-tight pt-[2px]">
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup
