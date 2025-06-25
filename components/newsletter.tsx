"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="bg-yellow-300 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 poppins">
          JOIN SHOPPING COMMUNITY TO
          <br />
          GET MONTHLY PROMO
        </h2>

        <p className="text-white/90 text-lg mb-8 poppins">Type your email down below and be young wild generation</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto poppins">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add your email here"
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 bg-white"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}
