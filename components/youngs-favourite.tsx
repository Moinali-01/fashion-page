import Image from "next/image"

const favouriteItems = [
  {
    id: 1,
    title: "Trending on instagram",
    image: "/images/trending-instagram.png",
    bgColor: "bg-orange-200",
  },
  {
    id: 2,
    title: "All under $40",
    image: "/images/under-40.png",
    bgColor: "bg-pink-200",
  },
]

export default function YoungsFavourite() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-black poppins">Young's Favourite</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {favouriteItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden cursor-pointer">
          
              <div className={`${item.bgColor} rounded-2xl m-4 overflow-hidden relative h-100`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

         
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-black poppins">{item.title}</h3>
                  <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <h5 className=" text-[#7F7F7F] poppins">Explore More!</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
