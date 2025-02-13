import React from 'react';
import { BarChart3, Settings, Users } from 'lucide-react';

export function CampaignManagement() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Campaign Header */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Campaign Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Amount Raised</h3>
                <p className="text-3xl font-bold text-green-600">ETB 35,000</p>
                <p className="text-sm text-gray-500 mt-1">of ETB 50,000 goal</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Supporters</h3>
                <p className="text-3xl font-bold text-gray-900">127</p>
                <p className="text-sm text-gray-500 mt-1">people have donated</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Days Left</h3>
                <p className="text-3xl font-bold text-gray-900">15</p>
                <p className="text-sm text-gray-500 mt-1">until campaign ends</p>
              </div>
            </div>
          </div>

          {/* Management Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Recent Donations */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Donations</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Donor Name {item}</p>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <p className="font-medium text-green-600">ETB 1,000</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center space-x-3 hover:bg-gray-100">
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">View Analytics</span>
                  </button>
                  <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center space-x-3 hover:bg-gray-100">
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Campaign Settings</span>
                  </button>
                  <button className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Post Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}