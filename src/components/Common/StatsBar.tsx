import React from 'react';
import { Users, Briefcase, Star, TrendingUp } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Active Users',
      color: 'text-primary-600'
    },
    {
      icon: Briefcase,
      value: '10K+',
      label: 'Jobs Posted',
      color: 'text-green-600'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating',
      color: 'text-yellow-600'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
