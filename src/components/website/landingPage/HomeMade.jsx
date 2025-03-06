export function HomeMade(){
    return(
        <>
            {/* Products Section */}
            <section id="products" className="py-16 md:py-3 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Homemade Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seasonal preserves and pickles made with ingredients from our farm
              </p>
              <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-amber-100 p-2 rounded-lg">
                  <div className="w-full h-64 md:h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Products Image]</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-4">Farm-Fresh Preserves</h3>
                <p className="text-gray-700 mb-4">
                  Our homemade pickles and preserves are crafted in small batches using traditional recipes. We source ingredients from our own farm and local producers to ensure the freshest flavor.
                </p>
                <p className="text-gray-700 mb-6">
                  Available by pre-order only, our seasonal offerings change throughout the year based on what's in harvest.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-amber-800 font-medium">Mixed Vegetable Pickle</span>
                    <span className="text-gray-600">Seasonal</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-amber-800 font-medium">Mango Preserve</span>
                    <span className="text-gray-600">Summer</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-amber-800 font-medium">Herb-Infused Vinegar</span>
                    <span className="text-gray-600">Year-round</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                    <span className="text-amber-800 font-medium">Fruit Jam Assortment</span>
                    <span className="text-gray-600">Seasonal</span>
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Place Pre-Order
                </a>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}