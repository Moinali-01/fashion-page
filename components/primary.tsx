import { Button } from "./ui/button"
import Image from "next/image"

export default function Primary() {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 px-30">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight poppins text-black">
                LET'S
                <br />
                EXPLORE
                <br />
                <span className="bg-yellow-300 px-2">UNIQUE</span>
                <br />
                CLOTHES.
              </h1>
              <p className="text-gray-600 text-lg poppins">Live for influential and innovative fashion</p>
            </div>
            <Button className="bg-black poppins text-white px-8 py-3 text-lg hover:bg-gray-800">Shop Now</Button>
          </div>

          <div className="relative">
            <Image
              src="/images/hero-model.png"
              alt="Fashion model in pink sweater"
              width={871}
              height={784}
              className="w-[500px] h-[400px] object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
