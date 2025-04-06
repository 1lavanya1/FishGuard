import React, { useState, useEffect } from 'react';
import { Cloud, Wind, Droplets, Sun } from 'lucide-react';

function WeatherUpdates() {
  const [weather, setWeather] = useState({
    temperature: '28°C',
    windSpeed: '15 km/h',
    humidity: '75%',
    visibility: '10 km',
    waveHeight: '1.2m',
    forecast: [
      { day: 'Today', temp: '28°C', condition: 'Clear' },
      { day: 'Tomorrow', temp: '27°C', condition: 'Partly Cloudy' },
      { day: 'Wednesday', temp: '29°C', condition: 'Sunny' },
    ]
  });

  useEffect(() => {
    // In production, fetch real weather data here
    //we will add it later
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.hdqwalls.com/wallpapers/clouds-summer-weather-5k-1b.jpg" 
          alt="Cloud background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="relative z-10 p-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Weather Updates</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Current Conditions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <WeatherCard
                  icon={<Sun size={32} className="text-yellow-500" />}
                  title="Temperature"
                  value={weather.temperature}
                />
                <WeatherCard
                  icon={<Wind size={32} className="text-blue-500" />}
                  title="Wind Speed"
                  value={weather.windSpeed}
                />
                <WeatherCard
                  icon={<Droplets size={32} className="text-blue-500" />}
                  title="Humidity"
                  value={weather.humidity}
                />
                <WeatherCard
                  icon={<Cloud size={32} className="text-gray-500" />}
                  title="Visibility"
                  value={weather.visibility}
                />
              </div>
            </div>

            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Marine Conditions</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Wave Height</span>
                  <span>{weather.waveHeight}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Sea State</span>
                  <span>Moderate</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Current Direction</span>
                  <span>North-East</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">3-Day Forecast</h2>
            <div className="space-y-4">
              {weather.forecast.map((day, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">{day.day}</p>
                    <p className="text-sm text-gray-600">{day.condition}</p>
                  </div>
                  <p className="text-xl">{day.temp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 bg-opacity-90">
          <h3 className="font-semibold text-yellow-800">Weather Advisory</h3>
          <p className="text-yellow-700 mt-1">
            Favorable conditions for fishing. Best time window: 6 AM - 2 PM
          </p>
        </div>
      </div>
    </div>
  );
}

function WeatherCard({ icon, title, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

export default WeatherUpdates;