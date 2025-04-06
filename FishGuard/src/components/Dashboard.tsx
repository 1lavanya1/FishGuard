import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, MapPin, Route, Cloud } from 'lucide-react';

function Dashboard() {
  return (
    <div className="relative min-h-screen">
      {/* Fullscreen Video Background */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/1570919/1570919-hd_1280_720_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content*/}
      <div className="relative z-10 pt-16"> 
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-white">Welcome to FishGuard</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/fish-zones">
              <DashboardCard
                icon={<Fish size={32} className="text-blue-400" />}
                title="Fish Zone Prediction"
                description="AI-powered predictions for optimal fishing locations"
              />
            </Link>
            
            <Link to="/gps-boundary">
              <DashboardCard
                icon={<MapPin size={32} className="text-blue-400" />}
                title="GPS Boundary Alerts"
                description="Real-time territorial boundary monitoring"
              />
            </Link>
            
            <Link to="/route-optimizer">
              <DashboardCard
                icon={<Route size={32} className="text-blue-400" />}
                title="Route Optimization"
                description="Fuel-efficient route planning"
              />
            </Link>
            
            <Link to="/weather">
              <DashboardCard
                icon={<Cloud size={32} className="text-blue-400" />}
                title="Weather Updates"
                description="Real-time weather information"
              />
            </Link>
          </div>
          
          <div className="mt-12 bg-black bg-opacity-50 rounded-lg shadow-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-white">Today's Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black bg-opacity-40 p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Weather Conditions</h3>
                <p>Favorable for fishing</p>
              </div>
              <div className="bg-black bg-opacity-40 p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Recommended Zones</h3>
                <p>Zone A, Zone C</p>
              </div>
              <div className="bg-black bg-opacity-40 p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Active Vessels</h3>
                <p>12 vessels in operation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function DashboardCard({ icon, title, description }: DashboardCardProps) {
  return (
    <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition backdrop-blur-sm border border-gray-700 hover:border-blue-400">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default Dashboard;