import React from 'react';
import { CATEGORIES } from '../../data/categories';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Service Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map(cat => (
          <div key={cat.id} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-2">{cat.icon}</div>
            <div className="font-medium text-gray-900">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;