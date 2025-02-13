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

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">YegnaBoost</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Create Campaign</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Explore</a>
              <a href="#" className="text-gray-700 hover:text-green-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-green-600 hover:text-green-700">
                Log in
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 relative">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Users className="w-8 h-8 text-green-500" />
                <span className="text-xl font-bold">YegnaBoost</span>
              </div>
              <p className="text-gray-400">
                Empowering Ethiopian creators and entrepreneurs through community-driven crowdfunding.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">info@yegnaboost.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+251 911 123 456</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Addis Ababa, Ethiopia</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 YegnaBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;