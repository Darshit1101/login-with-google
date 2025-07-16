import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '@utils/auth';
import Header from '../components/Header';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUser();
    if (userData) {
      setUser(userData);
    } else {
      // Redirect to home if no user data
      navigate('/');
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Welcome to your Dashboard!
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        You have successfully logged in with Google. This is your personal dashboard
                        where you can manage your account and access various features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">Profile</h4>
                  <p className="text-sm text-gray-600 mt-1">Manage your account settings</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">Settings</h4>
                  <p className="text-sm text-gray-600 mt-1">Configure your preferences</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">Activity</h4>
                  <p className="text-sm text-gray-600 mt-1">View your recent activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
