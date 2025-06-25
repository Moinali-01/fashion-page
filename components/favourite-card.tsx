import Image from "next/image"

interface FavouriteItem {
  id: number
  title: string
  image: string
  bgColor: string
}

interface FavouriteCardProps {
  item: FavouriteItem
}

export default function FavouriteCard({ item }: FavouriteCardProps) {
  return (
    <div className={`${item.bgColor} rounded-lg overflow-hidden relative h-80 group cursor-pointer`}>
      <div className="absolute inset-0 flex items-end p-6">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
          <div className="transform group-hover:translate-x-2 transition-transform duration-300">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={300}
          height={320}
          className="object-cover h-full w-auto"
        />
      </div>
    </div>
  )
}
