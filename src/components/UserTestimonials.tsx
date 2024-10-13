import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    channel: 'TechTalk with Sarah',
    quote: 'YT AI Tools has revolutionized my content creation process. I\'ve seen a 40% increase in views since I started using their SEO optimization features!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Mike Chen',
    channel: 'Foodie Adventures',
    quote: 'The analytics tools have given me incredible insights into my audience. It\'s like having a data scientist on my team!',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Emma Watson',
    channel: 'Book Lovers Unite',
    quote: 'The content planning feature has been a game-changer for me. I\'ve never been more consistent with my uploads, and my subscribers love it!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const UserTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 py-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-96 bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.channel}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;