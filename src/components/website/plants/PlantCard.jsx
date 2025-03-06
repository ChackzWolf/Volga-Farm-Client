import { useState } from "react";

export function PlantCard ({ name, image, price, description, category }){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
        className="bg-white rounded-lg w-60 h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image || '/assets/images/website/plants/placeholder.jpg'} 
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          {category && (
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              {category}
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <span className="text-green-600 font-bold">${price}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors">
            View Details
          </button>
        </div>
      </div>    
    )
}