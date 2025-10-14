export const StatsBar = () => {
  const stats = [
    { label: 'Jobs Posted', value: '10,000+' },
    { label: 'Service Providers', value: '5,000+' },
    { label: 'Happy Customers', value: '8,000+' },
    { label: 'Categories', value: '8' }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
