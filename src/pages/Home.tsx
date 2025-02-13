import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Users,
} from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578927648424-aa0fc255daa7?auto=format&fit=crop&q=80')"
          }}
        >
          <div className="container mx-auto px-4 h-full relative z-20">
            <div className="flex flex-col justify-center h-full max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Welcome to YegnaBoost: Empowering Ethiopian Creators and Entrepreneurs
              </h1>
              <p className="text-xl mb-8">
                Join our community to fund your dreams and support others in their journey to success.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 w-fit flex items-center space-x-2">
                <span>Create Your Campaign Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={`https://images.unsplash.com/photo-1578927648424-aa0fc255daa7?auto=format&fit=crop&q=80&w=500`} 
                  alt="Campaign" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Campaign Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Help support this amazing initiative to make a difference in our community.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-600 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">70% funded</p>
                    </div>
                    <span className="text-green-600 font-semibold">ETB 50,000</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
              <span>View More Campaigns</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Create a Campaign', icon: '🎯' },
              { title: 'Share Your Story', icon: '📢' },
              { title: 'Receive Donations', icon: '💰' },
              { title: 'Achieve Your Goal', icon: '🎉' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-xl mb-2">Step {index + 1}</h3>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">
                  Simple and easy process to bring your ideas to life.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100`}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Abebe Kebede</h4>
                    <p className="text-gray-600 text-sm">Campaign Creator</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "YegnaBoost helped me turn my dream into reality. The community support was incredible!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a growing community of creators, entrepreneurs, and supporters making a difference in Ethiopia.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-md hover:bg-gray-100 inline-flex items-center space-x-2">
            <span>Explore Community</span>
            <Users className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}