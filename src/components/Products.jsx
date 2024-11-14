import React from 'react';
import spoon from "../assets/sppon.jpg";  // Ensure the correct image path
import plate from "../assets/plate.jpg";  // Ensure the correct image path
import bowl from "../assets/bowl.jpg";    // Ensure the correct image path

const products = [
  {
    id: 1,
    title: 'Biodegradable Plates',
    description: 'Small, eco-friendly plates made from 100% crop residue. Each plate can hold up to 500 grams of food without leaking, decomposing within 90 days. Perfect for appetizers and desserts while significantly reducing landfill waste.',
    image: plate,
    quickFact: 'Made from 100% crop residue!',
  },
  {
    id: 2,
    title: 'Biodegradable Bowl',
    description: 'Durable bowls made from renewable materials, ideal for soups, salads, and snacks. Each bowl holds up to 700 ml and is microwave-safe, breaking down naturally within three months for a healthier planet.',
    image: bowl,
    quickFact: 'Microwave-safe and 100% biodegradable!',
  },
  {
    id: 3,
    title: 'Biodegradable Spoons',
    description: 'Sustainable spoons made from natural fibers, decomposing within 90 days. Each spoon handles both hot and cold foods, reducing plastic waste by an estimated 50 spoons per user per year.',
    image: spoon,
    quickFact: 'Decomposes in just 90 days!',
  },
];

const Products = () => {
  return (
    <div className="mx-auto lg:px-16 py-8 font-montserrat bg-gray-50">
      <h1 className="text-clamp-hero-title font-extrabold text-center text-xprimary mb-4">SOLUTIONS WE CREATE</h1>
      <p className="text-center text-lg text-xsecondary mb-8">Eco-friendly products that make a difference</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mx-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden h-full transition-transform duration-300 transform relative"
          >
            <div className="relative flex justify-center items-center h-60">
              <div className="absolute inset-0 bg-xprimary z-10 opacity-60 rounded-t-lg" />
              <img
                src={product.image}
                alt={`Image of ${product.title}`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 rounded-t-lg"
              />
              <span className="relative text-white px-4 py-2 font-bold z-20 text-2xl">{product.title}</span>
            </div>
            <div className="flex flex-col justify-between p-6 flex-grow">
              <p className="text-gray-800 font-medium text-md mt-4">{product.description}</p>

             
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-gray-200">
                <span className="text-xsecondary font-semibold text-md">{product.quickFact}</span>
                <a
                  href="#"
                  className="inline-flex items-center justify-center text-white font-semibold text-lg bg-xprimary hover:bg-xsecondary py-2 px-4 rounded-lg transition duration-200"
                  title={`Learn more about ${product.title}`}
                >

                  Discover
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
