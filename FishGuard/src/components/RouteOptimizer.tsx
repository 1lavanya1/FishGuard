
import React, { useState } from 'react';

function RouteOptimizer() {
  const [stats, setStats] = useState({
    distance: '0',
    duration: '0',
    fuelSavings: '0'
  });
  
  const calculateRoute=()=>{
    const mockStats = {
      distance: '45.2 km',
      duration: '2.5 hours',
      fuelSavings: '12.5 liters'
    };
    setStats(mockStats);
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/011/301/067/original/summer-sky-background-with-cloud-and-ray-of-light-beautiful-nature-advertising-design-template-banner-for-summer-environment-concept-vector.jpg" 
          alt="Sky background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">Route Optimizer</h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 h-[600px] relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Sea Route Map"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Route overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-0.5 bg-blue-500 animate-pulse" 
                    style={{ 
                      transform: 'rotate(-45deg)',
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                    }} 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Route Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Start Point</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Enter start location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Destination</label>
                    <input  
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Enter destination"
                    />
                  </div>
                  <button
                    onClick={calculateRoute}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
                  >
                    Calculate Optimal Route
                  </button>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Route Statistics</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Total Distance</p>
                    <p className="font-semibold">{stats.distance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estimated Duration</p>
                    <p className="font-semibold">{stats.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Projected Fuel Savings</p>
                    <p className="font-semibold text-green-600">{stats.fuelSavings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteOptimizer;