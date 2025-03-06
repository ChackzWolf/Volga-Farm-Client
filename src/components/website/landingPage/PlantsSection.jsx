import { ChevronDown } from 'lucide-react';
import { ROUTES } from '../../../routes/routes';

export function PlantsSection() {
    return (
        <>
            {/* Plants Section */}
            <div id="plants" className="md:h-screen py-5 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Plants Collection</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our wide variety of decorative plants for your home, garden, or office
                        </p>
                        <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Plant Card 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">[Indoor Plant Image]</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-green-700 mb-2">Indoor Plants</h3>
                                <p className="text-gray-600 mb-4">
                                    Beautiful houseplants that purify the air and bring nature into your home
                                </p>
                                <a
                                    href={ROUTES.plantCollections}
                                    className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                                >
                                    View Collection
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Plant Card 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">[Ornamental Plants Image]</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-green-700 mb-2">Ornamental Plants</h3>
                                <p className="text-gray-600 mb-4">
                                    Decorative species with unique foliage and blooms to enhance your landscape
                                </p>
                                <a
                                    href={ROUTES.plantCollections}
                                    className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                                >
                                    View Collection
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Plant Card 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">[Custom Pots Image]</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-green-700 mb-2">Custom Pots</h3>
                                <p className="text-gray-600 mb-4">
                                    Handcrafted containers in various designs to complement your plants perfectly
                                </p>
                                <a
                                    href={ROUTES.plantCollections}
                                    className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                                >
                                    View Collection
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="#contact"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Request Plant Catalog
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}