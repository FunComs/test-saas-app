import React from 'react';
import { Calendar, Search, BarChart2, Repeat, MessageCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-12 w-12 text-blue-500" />,
    title: 'Content Planning',
    description: 'AI-powered content calendar and topic suggestions.',
    link: '/features/content-planning'
  },
  {
    icon: <Search className="h-12 w-12 text-blue-500" />,
    title: 'Video SEO Optimization',
    description: 'Optimize titles, descriptions, and tags for better visibility.',
    link: '/features/seo-optimization'
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-blue-500" />,
    title: 'Analytics & Performance Tracking',
    description: 'In-depth insights and performance metrics for your channel.',
    link: '/features/analytics'
  },
  {
    icon: <Repeat className="h-12 w-12 text-blue-500" />,
    title: 'Video Repurposing',
    description: 'Automatically create shorts and clips from your long-form content.',
    link: '/features/video-repurposing'
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-blue-500" />,
    title: 'Community Engagement',
    description: 'AI-assisted comment management and audience interaction.',
    link: '/features/community-engagement'
  }
];

const FeatureHighlights: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features to Grow Your Channel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;