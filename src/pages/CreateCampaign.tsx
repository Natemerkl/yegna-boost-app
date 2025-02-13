import React, { useState } from 'react';
import { ArrowRight, Upload } from 'lucide-react';

export function CreateCampaign() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Campaign Title</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                placeholder="Enter your campaign title"
              />
            </label>
            <p className="text-sm text-gray-500">
              Choose a clear, descriptive title that will catch people's attention.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Fundraising Goal</span>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">ETB</span>
                </div>
                <input
                  type="number"
                  className="block w-full pl-12 pr-12 rounded-md border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  placeholder="0.00"
                />
              </div>
            </label>
            <p className="text-sm text-gray-500">
              Set a realistic goal that covers your needs and project costs.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Campaign Story</span>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                rows={6}
                placeholder="Share your story"
              />
            </label>
            <p className="text-sm text-gray-500">
              Tell your story in a compelling way. What inspired you? What will you achieve?
            </p>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Upload Media
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Upload photos or videos that showcase your campaign
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Category</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              >
                <option>Select a category</option>
                <option>Technology</option>
                <option>Arts & Culture</option>
                <option>Education</option>
                <option>Community</option>
                <option>Business</option>
              </select>
            </label>
            <p className="text-sm text-gray-500">
              Choose the category that best fits your campaign.
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Review Your Campaign</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Campaign Title</h4>
                  <p className="text-gray-600">Sample Campaign Title</p>
                </div>
                <button className="text-green-600 hover:text-green-700">Edit</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Goal Amount</h4>
                  <p className="text-gray-600">ETB 50,000</p>
                </div>
                <button className="text-green-600 hover:text-green-700">Edit</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Category</h4>
                  <p className="text-gray-600">Technology</p>
                </div>
                <button className="text-green-600 hover:text-green-700">Edit</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <div
                className="h-full bg-green-600 transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Campaign</h2>
              <p className="text-gray-600 mb-8">Step {step} of {totalSteps}</p>

              {renderStepContent()}

              {/* Navigation */}
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={() => step < totalSteps ? setStep(step + 1) : null}
                  className="ml-auto px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center space-x-2"
                >
                  <span>{step === totalSteps ? 'Create Campaign' : 'Next'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}