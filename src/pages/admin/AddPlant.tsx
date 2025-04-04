import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

// Types
interface Category {
  _id: string;
  name: string;
}

interface PlantFormData {
  name: string;
  scientificName: string;
  category: string;
  description: string;
  commonNames: string;
  origin: string;
  climate: string;
  sunlight: string;
  water: string;
  soilType: string;
  height: string;
  lifespan: string;
  floweringSeason: string;
  toxicity: boolean;
  pestsDiseases: string;
  benefits: string;
  images: FileList | null;
}

const PlantAddForm: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const { 
    register, 
    handleSubmit, 
    control,
    reset,
    formState: { errors } 
  } = useForm<PlantFormData>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        console.log("API Response:", response.data); // Debugging log
  
        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else if (Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          console.error("Unexpected API response format:", response.data);
          setCategories([]); // Ensure an empty array to prevent map() crash
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
  
        // Fallback sample categories for demo
        setCategories([
          { _id: '1', name: 'Indoor Plants' },
          { _id: '2', name: 'Ornamental Plants' },
          { _id: '3', name: 'Succulents' },
          { _id: '4', name: 'Flowering Plants' }
        ]);
      }
    };
  
    fetchCategories();
  }, []);
  

  const onSubmit = async (data: PlantFormData) => {
    setIsLoading(true);
    try {
      // Create form data to handle file uploads
      const formData = new FormData();
      
      // Add all text fields
      Object.keys(data).forEach(key => {
        if (key !== 'images') {
          if (key === 'commonNames' || key === 'pestsDiseases' || key === 'benefits') {
            // Convert comma-separated strings to arrays
            formData.append(key, JSON.stringify((data[key as keyof PlantFormData] as string).split(',')));
          } else {
            formData.append(key, data[key as keyof PlantFormData]?.toString() || '');
          }
        }
      });
      
      // Add images if they exist
      if (data.images) {
        for (let i = 0; i < data.images.length; i++) {
          formData.append('images', data.images[i]);
        }
      }
      
      // Replace with your actual API endpoint
      await axios.post('/api/plants', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setMessage({ type: 'success', text: 'Plant added successfully!' });
      reset();
      setImagePreview([]);
      
      // Reset message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Error adding plant:', error);
      setMessage({ type: 'error', text: 'Failed to add plant. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newPreviews: string[] = [];
    for (let i = 0; i < files.length; i++) {
      newPreviews.push(URL.createObjectURL(files[i]));
    }
    setImagePreview(newPreviews);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Add New Plant</h1>
      
      {message && (
        <div className={`p-4 mb-4 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700 border-b border-green-200 pb-2">Basic Information</h2>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Plant Name*</label>
              <input
                type="text"
                {...register('name', { required: 'Plant name is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Scientific Name*</label>
              <input
                type="text"
                {...register('scientificName', { required: 'Scientific name is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
              {errors.scientificName && <p className="text-red-500 text-sm mt-1">{errors.scientificName.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Category*</label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Common Names (comma separated)</label>
              <input
                type="text"
                placeholder="E.g. Mother-in-law's tongue, Snake plant"
                {...register('commonNames')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Origin</label>
              <input
                type="text"
                placeholder="E.g. Africa, Asia"
                {...register('origin')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Climate</label>
              <input
                type="text"
                placeholder="E.g. Tropical, Temperate"
                {...register('climate')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          
          {/* Care Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700 border-b border-green-200 pb-2">Care Information</h2>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Sunlight Requirements*</label>
              <select
                {...register('sunlight', { required: 'Sunlight info is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select sunlight needs</option>
                <option value="Full Sun">Full Sun</option>
                <option value="Partial Sun">Partial Sun</option>
                <option value="Indirect Light">Indirect Light</option>
                <option value="Shade">Shade</option>
              </select>
              {errors.sunlight && <p className="text-red-500 text-sm mt-1">{errors.sunlight.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Watering Needs*</label>
              <select
                {...register('water', { required: 'Watering info is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select watering frequency</option>
                <option value="Daily">Daily</option>
                <option value="Twice Weekly">Twice Weekly</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-weekly">Bi-weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.water && <p className="text-red-500 text-sm mt-1">{errors.water.message}</p>}
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Soil Type</label>
              <input
                type="text"
                placeholder="E.g. Well-draining soil"
                {...register('soilType')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Height</label>
              <input
                type="text"
                placeholder="E.g. Up to 3 feet"
                {...register('height')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Lifespan</label>
              <input
                type="text"
                placeholder="E.g. 10+ years"
                {...register('lifespan')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Flowering Season</label>
              <input
                type="text"
                placeholder="E.g. Spring, Summer"
                {...register('floweringSeason')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>
        
        {/* Full-width fields */}
        <div className="space-y-4">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows={3}
              {...register('description')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Provide a detailed description of the plant..."
            />
          </div>
          
          <div className="form-group">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="toxicity"
                {...register('toxicity')}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="toxicity" className="ml-2 block text-sm text-gray-700">
                Toxic to pets/humans
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Common Pests & Diseases (comma separated)</label>
            <input
              type="text"
              placeholder="E.g. Spider mites, Root rot"
              {...register('pestsDiseases')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Benefits (comma separated)</label>
            <input
              type="text"
              placeholder="E.g. Air purification, Stress reduction"
              {...register('benefits')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Plant Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500 
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-green-50 file:text-green-700
                hover:file:bg-green-100"
            />
            <p className="text-xs text-gray-500 mt-1">Upload multiple images (JPG, PNG) of the plant</p>
            
            {imagePreview.length > 0 && (
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {imagePreview.map((src, index) => (
                  <div key={index} className="relative h-24 w-full">
                    <img 
                      src={src} 
                      alt={`Preview ${index}`} 
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => {
              reset();
              setImagePreview([]);
            }}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-green-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Saving...' : 'Add Plant'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlantAddForm;