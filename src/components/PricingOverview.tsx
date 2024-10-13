import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      'Content Planning',
      'Basic SEO Optimization',
      'Limited Analytics',
      'Community Management'
    ]
  },
  {
    name: 'Pro',
    price: '$24.99',
    features: [
      'Advanced Content Planning',
      'Full SEO Optimization',
      'Comprehensive Analytics',
      'Video Repurposing',
      'Priority Support'
    ]
  },
  {
    name: 'Premium',
    price: '$49.99',
    features: [
      'All Pro Features',
      'Custom AI Training',
      'Dedicated Account Manager',
      'API Access',
      'White-label Options'
    ]
  }
];

const PricingOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOverview;