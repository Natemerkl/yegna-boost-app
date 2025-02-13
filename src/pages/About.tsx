import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About YegnaBoost</h1>
            <p className="text-xl">
              Empowering Ethiopian creators and entrepreneurs through community-driven crowdfunding.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At YegnaBoost, we believe in the power of community to drive positive change. Our mission
              is to create a platform where Ethiopian innovators, artists, and entrepreneurs can bring
              their ideas to life through the support of their community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To become the leading crowdfunding platform in Ethiopia, fostering innovation and
                  entrepreneurship across all sectors of society.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
                <p className="text-gray-600">
                  We've helped hundreds of creators raise millions of birr, turning their dreams into
                  reality and creating lasting impact in their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: 'Community First', description: 'Building stronger communities through collective support' },
              { icon: Shield, title: 'Trust & Security', description: 'Ensuring safe and transparent transactions' },
              { icon: Users, title: 'Inclusivity', description: 'Creating opportunities for all Ethiopians' },
              { icon: Award, title: 'Excellence', description: 'Striving for the highest quality in everything we do' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400`}
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member Name</h3>
                  <p className="text-gray-600 mb-4">Position</p>
                  <p className="text-gray-600">
                    Brief bio about the team member and their role in YegnaBoost.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}