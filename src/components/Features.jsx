import React from 'react';
import { 
  Navigation, 
  Droplets, 
  ShieldAlert, 
  Truck, 
  Cpu, 
  Activity, 
  Check,
  Zap
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

const iconMap = {
  Navigation: Navigation,
  Droplets: Droplets,
  ShieldAlert: ShieldAlert,
  Truck: Truck,
  Cpu: Cpu,
  Activity: Activity,
};

export default function Features({ darkMode }) {
  const { features } = siteContent;

  return (
    <section id="features" className={`py-24 relative overflow-hidden ${
      darkMode ? 'bg-black text-white' : 'bg-white text-gray-900 clean-dot-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 border ${
            darkMode ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-gray-100 text-black border-gray-300 shadow-sm'
          }`}>
            <Zap className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">
            Core Engineering & Robotics Features
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Precision-engineered hardware and neural edge intelligence designed for high performance, zero downtime, and extreme field conditions.
          </p>
        </div>

        {/* Feature Grid - Clean White and Black Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const IconComponent = iconMap[feat.icon] || Cpu;
            return (
              <div
                key={feat.id}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  darkMode 
                    ? 'bg-gray-950 border-gray-800 hover:border-gray-600' 
                    : 'bg-white border-gray-200 shadow-sm hover:border-black hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wide uppercase bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-black dark:text-white">
                    {feat.title}
                  </h3>

                  {/* Feature Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Spec Badge */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1.5 font-semibold text-black dark:text-white">
                    <Check className="w-3.5 h-3.5" />
                    <span>Real-time Active</span>
                  </span>
                  <span>ROS2 / RTK Sync</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner Strip - Clean Minimalist */}
        <div className={`mt-16 p-8 rounded-2xl border text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6 ${
          darkMode 
            ? 'bg-gray-950 border-gray-800 text-white' 
            : 'bg-gray-50 border-gray-200 text-black shadow-sm'
        }`}>
          <div>
            <h4 className="text-xl font-bold mb-1">
              Need a Custom Sensor or Kinematic Attachment?
            </h4>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Our modular mechanical chassis supports custom robotic arms, LiDAR masts, and thermal imaging cameras.
            </p>
          </div>
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-sm shrink-0"
          >
            <span>Open Payload Configurator</span>
          </a>
        </div>

      </div>
    </section>
  );
}
