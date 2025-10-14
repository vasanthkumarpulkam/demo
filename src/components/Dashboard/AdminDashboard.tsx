import React from 'react';
import { Users, Briefcase, DollarSign, TrendingUp, AlertCircle, CheckCircle, Clock, Star } from 'lucide-react';
import { useJobs } from '../../hooks/useJobs';

const AdminDashboard: React.FC = () => {
  const { jobs } = useJobs();

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Total Jobs',
      value: jobs.length.toString(),
      change: '+8%',
      changeType: 'positive',
      icon: Briefcase,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: '$45,230',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'yellow'
    }
  ];

  const recentJobs = jobs.slice(0, 5);
  const pendingJobs = jobs.filter(job => job.status === 'open').length;
  const completedJobs = jobs.filter(job => job.status === 'completed').length;
  const inProgressJobs = jobs.filter(job => job.status === 'in_progress').length;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-purple-100">Monitor and manage your Service Hub platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${
                stat.color === 'blue' ? 'bg-blue-100' :
                stat.color === 'purple' ? 'bg-purple-100' :
                stat.color === 'green' ? 'bg-green-100' :
                'bg-yellow-100'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'purple' ? 'text-purple-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  'text-yellow-600'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Job Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Job Status Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                <span className="font-medium text-gray-900">Pending Jobs</span>
              </div>
              <span className="text-2xl font-bold text-yellow-600">{pendingJobs}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                <span className="font-medium text-gray-900">In Progress</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">{inProgressJobs}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="font-medium text-gray-900">Completed</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{completedJobs}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentJobs.map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{job.title}</p>
                  <p className="text-sm text-gray-500">Posted by {job.posterName}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    job.status === 'open' ? 'bg-green-100 text-green-800' :
                    job.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {job.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">${job.budget}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <h4 className="font-semibold text-gray-900">Manage Users</h4>
            <p className="text-sm text-gray-500">View and manage user accounts</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Briefcase className="h-8 w-8 text-purple-600 mb-2" />
            <h4 className="font-semibold text-gray-900">Moderate Jobs</h4>
            <p className="text-sm text-gray-500">Review and moderate job postings</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-900">Analytics</h4>
            <p className="text-sm text-gray-500">View detailed platform analytics</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;