import Image from "next/image"

const brands = [
  { name: "H&M", logo: "/images/brands/hm-logo-rmb.png" },
  { name: "OBEY", logo: "/images/brands/obey-rmb.png" },
  { name: "Shopify", logo: "/images/brands/shopify-rmb.png" },
  { name: "LACOSTE", logo: "/images/brands/lacoste-rmb.png" },
  { name: "Levis", logo: "/images/brands/levis-rmb.png" },
  { name: "Amazon", logo: "/images/brands/amazon-rmb.png" },
]

export default function Collab() {
  return (
    <section className="bg-yellow-300 py-8">
      <div className=" mx-auto px-6">
        <div className="flex flex-wrap items-center justify-evenly gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={160}
                height={80}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
