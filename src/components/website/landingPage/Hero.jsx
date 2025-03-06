export function Hero(){
    return (
        <>
        {/* Hero Section */}
        <div id="home" className="relative bg-cover bg-center max-h-screen"
        style={{ backgroundImage: "url('/Images/plantsImage2.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex justify-start">
            <div className="md:w-2/3 bg-opacity-40 bg-white p-8 rounded-lg shadow-lg ">
              <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4">
                Welcome to Volga Farm
              </h1>
              <p className="text-xl md:text-2xl text-green-800 mb-8">
                Your local source for decorative plants, aquaponics systems, and homemade treats
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#products"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center"
                >
                  Explore Our Products
                </a>
                <a
                  href="#contact"
                  className="inline-block bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-6 rounded-lg border border-green-600 text-center"
                >
                  Visit Our Farm
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </div>
        </>
    )
}