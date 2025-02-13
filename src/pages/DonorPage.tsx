import React, { useState } from 'react';
import { CreditCard, Heart } from 'lucide-react';

export function DonorPage() {
  const [amount, setAmount] = useState('');
  const predefinedAmounts = ['500', '1000', '2000', '5000'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Campaign Overview */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="h-64 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1578927648424-aa0fc255daa7?auto=format&fit=crop&q=80')"
            }}>
              <div className="h-full bg-black bg-opacity-40 flex items-end">
                <div className="p-8 text-white">
                  <h1 className="text-3xl font-bold mb-2">Campaign Title</h1>
                  <p className="text-lg">Help support this amazing initiative</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">ETB 35,000</p>
                  <p className="text-gray-600">raised of ETB 50,000 goal</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">127</p>
                  <p className="text-gray-600">supporters</p>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mb-6">
                <div className="h-2 bg-green-600 rounded-full" style={{width: '70%'}}></div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your support will help us make a real difference in our community. Every contribution,
                no matter the size, brings us closer to our goal.
              </p>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
            
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Select Amount</label>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {predefinedAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`p-4 rounded-lg border ${
                      amount === preset
                        ? 'border-green-600 bg-green-50 text-green-600'
                        : 'border-gray-200 hover:border-green-600'
                    }`}
                  >
                    ETB {preset}
                  </button>
                ))}
              </div>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">ETB</span>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-12 pr-12 py-3 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  placeholder="Enter custom amount"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Card Information</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 py-3 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    placeholder="Card number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Expiration Date</label>
                  <input
                    type="text"
                    className="block w-full py-3 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    placeholder="MM / YY"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Security Code</label>
                  <input
                    type="text"
                    className="block w-full py-3 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Name on Card</label>
                <input
                  type="text"
                  className="block w-full py-3 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="block w-full py-3 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  placeholder="you@example.com"
                />
              </div>

              <button className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Complete Donation</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                Your donation is secure and encrypted. By completing this donation, you agree to our Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}