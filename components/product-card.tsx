import Image from "next/image"

interface Product {
  id: number
  title: string
  subtitle: string
  image: string
  bgColor: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={`${product.bgColor} rounded-lg overflow-hidden relative h-96`}>
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{product.title}</h3>
          <p className="text-white/80">{product.subtitle}</p>
        </div>

        <div className="flex justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={200}
            height={250}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
