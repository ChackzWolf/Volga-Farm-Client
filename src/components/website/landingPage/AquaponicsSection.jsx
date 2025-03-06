
export function AquaponicSection(){
    return(
        <>        
        {/* Aquaponics Section */}
        <section id="aquaponics" className="py-13 md:py-3 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Aquaponics Systems</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sustainable ecosystems combining fish farming with plant cultivation
              </p>
              <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Farm-to-Table Aquaponics</h3>
                <p className="text-gray-700 mb-4">
                  Our aquaponics systems create a perfect symbiotic relationship between fish and plants. The fish provide nutrient-rich water that feeds the plants, while the plants naturally filter the water for the fish.
                </p>
                <p className="text-gray-700 mb-4">
                  We offer a variety of consumable fish species raised in our aquaponics setup, including tilapia and catfish. All our fish are raised without antibiotics or harmful chemicals.
                </p>
                <p className="text-gray-700 mb-6">
                  We also provide consultations for setting up your own aquaponics system at home, whether for small-scale food production or as an educational project.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Sustainable and chemical-free</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Uses 90% less water than traditional farming</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-1">
                      <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Year-round production of fish and vegetables</span>
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Schedule a Consultation
                </a>
              </div>
              <div>
                <div className="bg-blue-50 p-2 rounded-lg">
                  <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Aquaponics System Image]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}