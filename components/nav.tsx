import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <div className="text-xl font-bold">
          <span className="text-black">
            <div className="flex justify-center">
              <Image
                src={"/images/vector.png"}
                alt={"Logo"}
                width={30}
                height={2}
                
              /> 
              &nbsp;
              <Image
                src={"/images/fashion.png"}
                alt={"Logo"}
                width={160}
                height={2}
              />
            </div>
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-8 poppins">
        <Link
          href="/catalogue"
          className="text-gray-600 hover:text-black transition-colors"
        >
          CATALOGUE
        </Link>
        <Link
          href="/fashion"
          className="text-gray-600 hover:text-black transition-colors"
        >
          FASHION
        </Link>
        <Link
          href="/favourite"
          className="text-gray-600 hover:text-black transition-colors"
        >
          FAVOURITE
        </Link>
        <Link
          href="/lifestyle"
          className="text-gray-600 hover:text-black transition-colors"
        >
          LIFESTYLE
        </Link>
        <Button className="bg-black text-white px-6 py-2 hover:bg-gray-800">
          LOGIN
        </Button>
      </div>
    </nav>
  );
}
