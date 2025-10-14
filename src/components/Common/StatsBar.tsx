import React from 'react';

const StatsBar: React.FC = () => {
  const stats = [
    { label: 'Active Jobs', value: '1,234' },
    { label: 'Service Providers', value: '567' },
    { label: 'Happy Customers', value: '2,890' },
    { label: 'Jobs Completed', value: '4,567' }
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;