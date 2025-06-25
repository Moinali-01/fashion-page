import Image from "next/image"

const products = [
  {
    id: 1,
    title: "Hoodies & Sweetshirt",
    subtitle: "Explore Now!",
    image: "/images/products/hoodie.png",
    bgColor: "bg-white",
  },
  {
    id: 2,
    title: "Coats & Parkas",
    subtitle: "Explore Now!",
    image: "/images/products/coat.png",
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "Tees & T-Shirt",
    subtitle: "Explore Now!",
    image: "/images/products/t-shirt.png",
    bgColor: "bg-white",
  },
]

export default function NewArrival() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black poppins">NEW ARRIVALS</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} rounded-2xl overflow-hidden relative h-[450px] group cursor-pointer transition-transform hover:scale-105`}
            >
              {/* Product Image */}
              <div className="flex justify-center items-end pb-16 ">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={480}
                  height={700}
                  className="object-cover h-[350px] w-auto"
                />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1 poppins">{product.title}</h3>
                    <p className="text-black/70 text-sm poppins">{product.subtitle}</p>
                  </div>

                  {/* Arrow */}
                  <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
