import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const ProviderDashboard: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Jobs Applied</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Jobs Won</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Earned</h3>
          <p className="text-3xl font-bold text-purple-600">$0</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Available Jobs</h2>
        </div>
        <div className="p-6 text-center text-gray-500">
          <p>No jobs available at the moment.</p>
          <p className="text-sm mt-2">Check back later for new opportunities!</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;