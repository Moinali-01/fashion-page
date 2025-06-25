import Image from "next/image"

export default function PaydaySale() {
  return (
    <section className="bg-[#F9DF56] relative overflow-hidden">
       {/* White stars positioned around the image */}
       <div className="absolute top-12 left-32 text-white text-3xl z-2">✦</div>
      <div className="absolute top-24 left-16 text-white text-2xl z-2">✦</div>
      <div className="absolute bottom-32 left-24 text-white text-4xl z-2">✦</div>
      <div className="absolute top-16 left-130 text-white text-5xl z-2">✦</div>
      <div className="absolute bottom-16 left-72 text-white text-3xl z-2">✦</div>
      <div className="absolute top-32 left-130 text-white text-2xl z-2">✦</div>
      <div className="absolute bottom-24 left-140 text-white text-3xl z-2">✦</div>

      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left side - Full width image with no padding */}
        <div className="relative">
          <Image
            src="/images/payday-model.png"
            alt="Woman in yellow top and denim shorts"
            fill
            className="object-cover object-center z-1"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="flex items-center px-12 py-16">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight poppins">
              PAYDAY
              <br />
              SALE NOW
            </h2>

            <div className="space-y-4 text-black poppins">
              <p className="text-lg font-medium ">
                Spend minimal $100 get 30% off
                <br />
                voucher code for your next purchase
              </p>

              <div className="space-y-1">
                <p className="font-bold text-lg">1 June - 10 June 2021</p>
                <p className="text-sm">*Terms & Conditions apply</p>
              </div>
            </div>

            <button className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors poppins">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
