import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer(){
    return(
        <>
              {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Volga Farm</h3>
              <p className="mb-4">
                Your local source for decorative plants, aquaponics systems, aquarium fish, and homemade treats.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-green-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-green-200">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-green-200">Home</a></li>
                <li><a href="#about" className="hover:text-green-200">About Us</a></li>
                <li><a href="#plants" className="hover:text-green-200">Plants</a></li>
                <li><a href="#aquaponics" className="hover:text-green-200">Aquaponics</a></li>
                <li><a href="#aquarium" className="hover:text-green-200">Aquarium Fish</a></li>
                <li><a href="#products" className="hover:text-green-200">Products</a></li>
                <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe to receive updates about new plants, products, and farm events.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Volga Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
    )
}