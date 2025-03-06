import { ChevronDown } from 'lucide-react';

export function About() {
    return (
        <>
            {/* About Section */}
            <div id="about" className="py-16 md:py-16 bg-white ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Our Farm</h2>
                        <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-green-100 p-2 rounded-lg h-64 md:h-96">
                                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                                    <span className="text-gray-500 overflow-hidden">
                                        <img src="/Images/plantsImage2.jpg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Story</h3>
                            <p className="text-gray-700 mb-4">
                                Volga Farm is a small but vibrant family farm dedicated to bringing nature's beauty and bounty to our community. What started as a hobby has grown into a passion project that allows us to share our love for plants and sustainable farming practices.
                            </p>
                            <p className="text-gray-700 mb-4">
                                We specialize in a variety of decorative plants, custom pots, aquaponics systems with edible fish, ornamental aquarium species, and seasonal homemade pickles and preserves.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Our farm combines traditional growing methods with modern sustainable practices, ensuring that everything we produce is environmentally friendly and of the highest quality.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                            >
                                Learn more about our practices
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}