import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold poppins">FASHION</h3>
            <p className="text-gray-400 text-sm poppins">
              Complete your style with awesome
              <br />
              clothes from us.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-black text-sm" />
              </div>
              <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                <FaInstagram className="text-black text-sm" />
              </div>
              <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                <FaTwitter className="text-black text-sm" />
              </div>
              <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                <FaLinkedinIn className="text-black text-sm" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-300">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-300">Quick Link</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Share Location</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orders Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-300">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms & conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
