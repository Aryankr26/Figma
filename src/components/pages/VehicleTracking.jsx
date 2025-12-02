import { Navigation, MapPin } from 'lucide-react';

export function VehicleTracking() {
  return (
    <div className="absolute inset-0 bg-slate-100">
      {/* Map Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 p-8 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="h-24 bg-slate-300 rounded"></div>
          ))}
        </div>
      </div>

      {/* Animated Vehicle Markers */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <div className="bg-green-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1234</p>
          <p className="text-xs text-slate-600">Moving • 45 km/h</p>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <div className="bg-green-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1236</p>
          <p className="text-xs text-slate-600">Moving • 50 km/h</p>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="bg-yellow-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1235</p>
          <p className="text-xs text-slate-600">Idle • 0 km/h</p>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <div className="bg-red-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1240</p>
          <p className="text-xs text-slate-600">Warning • Low Fuel</p>
        </div>
      </div>

      <div className="absolute top-2/3 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="bg-green-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1238</p>
          <p className="text-xs text-slate-600">Moving • 40 km/h</p>
        </div>
      </div>

      <div className="absolute top-1/5 right-1/5 animate-pulse" style={{ animationDelay: '2.5s' }}>
        <div className="bg-green-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1239</p>
          <p className="text-xs text-slate-600">Moving • 38 km/h</p>
        </div>
      </div>

      <div className="absolute bottom-1/5 right-2/5 animate-pulse" style={{ animationDelay: '3s' }}>
        <div className="bg-gray-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1237</p>
          <p className="text-xs text-slate-600">Stopped</p>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/5 animate-pulse" style={{ animationDelay: '3.5s' }}>
        <div className="bg-yellow-500 p-3 rounded-full shadow-xl">
          <Navigation className="h-5 w-5 text-white" />
        </div>
        <div className="bg-white px-3 py-1 rounded-lg shadow-lg mt-2">
          <p className="text-xs">TN-01-AB-1241</p>
          <p className="text-xs text-slate-600">Idle • Depot</p>
        </div>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl">
        <h4 className="text-sm text-slate-900 mb-3">Live Fleet Status</h4>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 p-2 rounded-full">
              <Navigation className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs text-slate-700">Moving (5)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 p-2 rounded-full">
              <Navigation className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs text-slate-700">Idle (2)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-2 rounded-full">
              <Navigation className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs text-slate-700">Warning (1)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-500 p-2 rounded-full">
              <Navigation className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs text-slate-700">Stopped (1)</span>
          </div>
        </div>
      </div>

      {/* Map Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-lg shadow-xl">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 text-[#10b981]" />
          <div>
            <h3 className="text-slate-900">Live Fleet Tracking</h3>
            <p className="text-xs text-slate-600">Real-time employee transportation monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}
