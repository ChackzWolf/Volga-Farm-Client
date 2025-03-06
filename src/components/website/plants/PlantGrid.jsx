import { PlantCard } from "./PlantCard";

export const PlantsGrid = () => {
    const plantsData = [
        {
          id: 1,
          name: 'Monstera Deliciosa',
          image: '/assets/images/website/plants/monstera.jpg',
          price: 45.99,
          description: 'Popular indoor plant with distinctive split leaves. Easy to care for and air-purifying.',
          category: 'Indoor'
        },
        {
          id: 2,
          name: 'Snake Plant',
          image: '/assets/images/website/plants/snake-plant.jpg',
          price: 32.50,
          description: 'Nearly indestructible plant that thrives in low light. Perfect for beginners.',
          category: 'Indoor'
        },
        {
          id: 3,
          name: 'Peace Lily',
          image: '/assets/images/website/plants/peace-lily.jpg',
          price: 28.99,
          description: 'Elegant flowering plant that helps remove air pollutants. Prefers indirect light.',
          category: 'Flowering'
        },
        {
          id: 4,
          name: 'Aloe Vera',
          image: '/assets/images/website/plants/aloe-vera.jpg',
          price: 18.75,
          description: 'A hardy succulent known for its medicinal properties and air-purifying benefits.',
          category: 'Succulent'
        },
        {
          id: 5,
          name: 'Fiddle Leaf Fig',
          image: '/assets/images/website/plants/fiddle-leaf-fig.jpg',
          price: 60.00,
          description: 'A trendy indoor tree with large, violin-shaped leaves. Requires bright, indirect light.',
          category: 'Indoor'
        },
        {
          id: 6,
          name: 'Spider Plant',
          image: '/assets/images/website/plants/spider-plant.jpg',
          price: 22.99,
          description: 'A resilient plant that grows fast and produces small plantlets. Excellent for air purification.',
          category: 'Indoor'
        },
        {
          id: 7,
          name: 'Pothos',
          image: '/assets/images/website/plants/pothos.jpg',
          price: 19.99,
          description: 'A trailing vine that thrives in low light and is easy to propagate. Great for beginners.',
          category: 'Hanging'
        },
        {
          id: 8,
          name: 'Rubber Plant',
          image: '/assets/images/website/plants/rubber-plant.jpg',
          price: 39.99,
          description: 'An attractive indoor plant with glossy leaves. Can grow into a large statement plant.',
          category: 'Indoor'
        },
        {
          id: 9,
          name: 'Jade Plant',
          image: '/assets/images/website/plants/jade-plant.jpg',
          price: 24.99,
          description: 'A small, slow-growing succulent with thick, fleshy leaves. Symbolizes good luck.',
          category: 'Succulent'
        },
        {
          id: 10,
          name: 'Lavender',
          image: '/assets/images/website/plants/lavender.jpg',
          price: 29.50,
          description: 'A fragrant herb with calming properties. Thrives in full sun and well-draining soil.',
          category: 'Herb'
        },
        {
          id: 11,
          name: 'Bamboo Palm',
          image: '/assets/images/website/plants/bamboo-palm.jpg',
          price: 55.00,
          description: 'An elegant palm that adds a tropical vibe to interiors. Prefers indirect light and moist soil.',
          category: 'Indoor'
        },
        {
          id: 12,
          name: 'Orchid',
          image: '/assets/images/website/plants/orchid.jpg',
          price: 49.99,
          description: 'A stunning flowering plant known for its long-lasting, exotic blooms.',
          category: 'Flowering'
        }
      ];
      
      
    
    return (
      <div className="flex flex-wrap justify-start gap-4 m-11">
        {plantsData.map(plant => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            description={plant.description}
            category={plant.category}
          />
        ))}
      </div>
    );
  };