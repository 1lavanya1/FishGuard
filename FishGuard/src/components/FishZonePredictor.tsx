import React,{ useState } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width:'100%',
  height:'600px',
};
// Default location is Tamil Nadu
const defaultCenter = { lat: 11.1271, lng: 78.6569 }; 

function FishZonePredictor() {
  const [predictions, setPredictions] = useState<{ lat: number; lng: number }[]>([]);
  const [loading, setLoading] = useState(false);

  const predictZones = async () => {
    setLoading(true);
    try {
      // Mock prediction data
      const mockPredictions = [
        { lat: 11.1271, lng: 78.6569 },
        { lat: 11.1371, lng: 78.6669 },
        { lat: 11.1471, lng: 78.6769 },
      ];
      setPredictions(mockPredictions);
    } catch (error) {
      console.error('Error predicting zones:', error);
    }
    setLoading(false);
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
          <h1 className="text-3xl font-bold mb-6 text-white">Fish Zone Prediction</h1>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Current Conditions</h2>
                <p className="text-gray-600">Based on weather and historical data</p>
              </div>
              <button
                onClick={predictZones}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
              >
                {loading ? 'Analyzing...' : 'Predict Zones'}
              </button>
            </div>

            {/* Google Map with Fish Zones */}
            <LoadScript googleMapsApiKey="currently not added. We will add it later">
              <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={defaultCenter} 
                zoom={8}
                options={{
                  styles: [
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [
                        { color: "#1e88e5" },
                        { lightness: 17 }
                      ]
                    }
                  ]
                }}
              >
                {predictions.map((zone, index) => (
                  <Circle
                    key={index}
                    center={zone}
                    radius={5000} 
                    options={{
                      strokeColor: '#008000',
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor: '#00FF00',
                      fillOpacity: 0.3,
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">Predicted Catch</h3>
              <p className="text-gray-600">High probability in marked zones</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">Species Distribution</h3>
              <p className="text-gray-600">Mixed school of commercial species</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">Confidence Level</h3>
              <p className="text-gray-600">85% based on current data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FishZonePredictor;