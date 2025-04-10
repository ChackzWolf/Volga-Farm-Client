import { useState } from "react";
import { Menu, X } from 'lucide-react';

export function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="bg-green-50 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-green-800">Volga Farm</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#home" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#about" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md font-medium">About</a>
              <a href="#plants" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md font-medium">Plants</a>
              <a href="#aquaponics" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md font-medium">Aquaponics</a>
              <a href="#products" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md font-medium">Products</a>
              <a href="#contact" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-medium">Contact Us</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-900 hover:bg-green-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-50 shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#about" className="block text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-2 rounded-md font-medium">About</a>
              <a href="#plants" className="block text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-2 rounded-md font-medium">Plants</a>
              <a href="#aquaponics" className="block text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-2 rounded-md font-medium">Aquaponics</a>
              <a href="#products" className="block text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-2 rounded-md font-medium">Products</a>
              <a href="#contact" className="block text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-2 rounded-md font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    )
}