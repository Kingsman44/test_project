import React from 'react';
import AnimatedElement from '../animations/AnimatedElement';

const VideoSection = () => {
  return (
    <div className="py-20">
      <AnimatedElement direction="up" delay={0.4}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Text Content (25%) */}
              <div className="lg:w-1/4 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Experience Co-Living Excellence
                </h2>
                <p className="text-gray-600">
                  Discover how CoBrother is revolutionizing property ownership through innovative co-living solutions and community-focused developments.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-500"></span>
                    <span className="text-gray-600">Premium locations in thriving communities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-500"></span>
                    <span className="text-gray-600">Professional property management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-500"></span>
                    <span className="text-gray-600">Sustainable living practices</span>
                  </li>
                </ul>
              </div>

              {/* Video Content (75%) */}
              <div className="lg:w-3/4">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
                  >
                    <source src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1732740935&f=py9l06j0DsPlMzII8b0Ztg&d=0&m=p&r=360p&volume=100&start_res=720p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8 max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Building Communities, Creating Homes
                      </h3>
                      <p className="text-lg text-white/90">
                        Join us in shaping the future of residential living
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default VideoSection;