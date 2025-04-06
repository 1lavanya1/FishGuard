import React, { useState } from 'react';

function GPSBoundary() {
  const [vesselPosition] = useState({ lat: 11.1271, lng: 78.6569 });
  const [alerts, setAlerts] = useState([]);

  const checkBoundary = () => {
    const alert = {
      id: Date.now(),
      message: 'Approaching territorial boundary. Please maintain distance.',
      type: 'warning',
      timestamp: new Date().toLocaleTimeString()
    };
    setAlerts([alert, ...alerts].slice(0, 5));
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
      <div className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">GPS Boundary Monitor</h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 h-[600px] relative overflow-hidden">
                <img 
                  src="https://www.researchgate.net/publication/334715053/figure/fig1/AS:784409535041536@1563992636584/Map-of-Tamil-Nadu-showing-the-coastal-districts-and-their-coastline-length.png" 
                  alt="Tamil Nadu Coastal Map with Boundaries"
                  className="w-full h-full object-contain rounded-lg"
                />
                {/* Boundary line */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full">
                    <path 
                      d="M20,100 C100,50 200,150 300,100 S500,50 600,100" 
                      stroke="#FF0000" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
                {/* Vessel marker */}
                <div 
                  className="absolute w-6 h-6 bg-blue-500 rounded-full animate-pulse"
                  style={{ 
                    left: '55%', 
                    top: '45%',
                    boxShadow: '0 0 0 6px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Your Vessel
                  </div>
                </div>
                <button
                  onClick={checkBoundary}
                  className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-md transition flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Check Boundary
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Vessel Status</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Current Position
                    </p>
                    <p className="font-semibold mt-1">
                      {vesselPosition.lat.toFixed(4)}°N, {vesselPosition.lng.toFixed(4)}°E
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Distance to Boundary
                    </p>
                    <p className="font-semibold mt-1">2.5 nautical miles</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Status
                    </p>
                    <p className="text-green-600 font-semibold mt-1 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Within safe zone
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Recent Alerts
                </h2>
                <div className="space-y-3">
                  {alerts.map(alert => (
                    <div key={alert.id} className="bg-yellow-50/80 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                          <p className="text-yellow-800 font-medium">{alert.message}</p>
                          <p className="text-xs text-yellow-600 mt-1">{alert.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {alerts.length === 0 && (
                    <div className="text-center py-4 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="mt-2">No recent alerts</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GPSBoundary