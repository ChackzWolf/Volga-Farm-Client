import { ChevronDown } from 'lucide-react';

export function AquariumFishSection(){
    return (
        <>

        {/* Aquarium Fish Section */}
        <section id="aquarium" className="py-16 md:py-4 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Aquarium Fish Collection</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beautiful ornamental fish species for your home aquarium
              </p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fish Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[Tropical Fish Image]</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Tropical Fish</h3>
                  <p className="text-gray-600 mb-4">
                    Vibrant freshwater tropical species perfect for community tanks
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    View Species
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
  
              {/* Fish Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[Goldfish Image]</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Goldfish Varieties</h3>
                  <p className="text-gray-600 mb-4">
                    Classic ornamental goldfish in various shapes, colors, and sizes
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    View Species
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
  
              {/* Fish Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[Aquarium Supplies Image]</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Aquarium Supplies</h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to set up and maintain a healthy aquarium ecosystem
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    View Supplies
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Inquire About Availability
              </a>
            </div>
          </div>
        </section>
  
    
        </>
    )
}