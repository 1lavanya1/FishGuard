import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Shield, Fish, Map, Compass, Cloud, Waves } from 'lucide-react';
import Dashboard from './components/Dashboard';
import FishZonePredictor from './components/FishZonePredictor';
import GPSBoundary from './components/GPSBoundary';
import RouteOptimizer from './components/RouteOptimizer';
import WeatherUpdates from './components/WeatherUpdates';

function App() {
  return (
    <Router>
      {/* Enhanced Navigation Bar */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with Fish Icon */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Shield size={32} className="text-blue-300 group-hover:text-blue-200 transition" />
                <Fish 
                  size={16} 
                  className="absolute -right-1 -bottom-1 text-yellow-400 animate-bounce"
                />
              </div>
              <span className="text-2xl font-bold flex items-center">
                Fish
                <span className="text-yellow-400">Guard</span>
                <Waves size={20} className="ml-1 text-blue-300" />
              </span>
            </NavLink>

            {/* Navigation Links with Icons */}
            <div className="flex gap-4">
              <NavLink
                to="/fish-zones"
                className={({ isActive }) => `
                  flex items-center gap-1 px-3 py-2 rounded-lg transition
                  ${isActive 
                    ? 'bg-blue-800 shadow-inner text-yellow-400' 
                    : 'hover:bg-blue-800/50 hover:text-blue-200'}
                `}
              >
                <Fish size={20} className="transition-transform hover:scale-110" />
                <span className="font-medium">Fish Zones</span>
              </NavLink>
              <NavLink
                to="/gps-boundary"
                className={({ isActive }) => `
                  flex items-center gap-1 px-3 py-2 rounded-lg transition
                  ${isActive 
                    ? 'bg-blue-800 shadow-inner text-yellow-400' 
                    : 'hover:bg-blue-800/50 hover:text-blue-200'}
                `}
              >
                <Map size={20} className="transition-transform hover:scale-110" />
                <span className="font-medium">GPS Boundary</span>
              </NavLink>
              <NavLink
                to="/route-optimizer"
                className={({ isActive }) => `
                  flex items-center gap-1 px-3 py-2 rounded-lg transition
                  ${isActive 
                    ? 'bg-blue-800 shadow-inner text-yellow-400' 
                    : 'hover:bg-blue-800/50 hover:text-blue-200'}
                `}
              >
                <Compass size={20} className="transition-transform hover:scale-110" />
                <span className="font-medium">Route Optimizer</span>
              </NavLink>
              <NavLink
                to="/weather"
                className={({ isActive }) => `
                  flex items-center gap-1 px-3 py-2 rounded-lg transition
                  ${isActive 
                    ? 'bg-blue-800 shadow-inner text-yellow-400' 
                    : 'hover:bg-blue-800/50 hover:text-blue-200'}
                `}
              >
                <Cloud size={20} className="transition-transform hover:scale-110" />
                <span className="font-medium">Weather</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="pt-20"> {/* Slightly increased padding to account for new navbar height */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fish-zones" element={<FishZonePredictor />} />
          <Route path="/gps-boundary" element={<GPSBoundary />} />
          <Route path="/route-optimizer" element={<RouteOptimizer />} />
          <Route path="/weather" element={<WeatherUpdates />} />
          <Route path="*" element={
            <div className="text-center text-red-600 text-xl font-semibold mt-20">
              404 - Page Not Found
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
