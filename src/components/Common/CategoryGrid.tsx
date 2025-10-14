import React from 'react';
import { categories } from '../../data/categories';
import * as Icons from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <p className="text-lg text-gray-600">
            Explore services across various categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/jobs?category=${category.id}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary-500 transition cursor-pointer group"
            >
              <div className="text-primary-600 mb-4 group-hover:scale-110 transition">
                {getIcon(category.icon)}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {category.description}
              </p>
              <p className="text-sm text-primary-600 font-medium">
                {category.count} jobs available
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
