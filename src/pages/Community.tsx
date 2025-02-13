import React from 'react';
import { MessageSquare, ThumbsUp, Users } from 'lucide-react';

export function Community() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Community Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">YegnaBoost Community</h1>
          <p className="text-xl text-gray-600">
            Connect with creators, share ideas, and support each other in bringing dreams to life.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {[
            { icon: Users, label: 'Members', value: '5,234' },
            { icon: MessageSquare, label: 'Discussions', value: '1,423' },
            { icon: ThumbsUp, label: 'Successful Campaigns', value: '342' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <Icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        {/* Featured Members */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="p-6 text-center">
                  <div className="relative -mt-16 mb-4">
                    <img
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100`}
                      alt="Member"
                      className="w-24 h-24 rounded-full border-4 border-white mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Member Name</h3>
                  <p className="text-gray-600 mb-4">Campaign Creator</p>
                  <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Discussions */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Discussions</h2>
          <div className="space-y-4">
            {[1, 2,  3, 4, 5].map((discussion) => (
              <div key={discussion} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100`}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Discussion Title</h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Posted by John Doe</span>
                      <span>2 hours ago</span>
                      <span>23 replies</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}