export const productsData = [
  {
    id: "ioh-terra-1",
    name: "IOH Terra-1 Agricultural Rover",
    tagline: "Autonomous Precision Farming & Robotic Crop Care",
    category: "Agriculture",
    badge: "Flagship Agriculture",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    description: "Engineered for high-yield precision agriculture, the IOH Terra-1 combines RTK-GPS centimeter-accurate navigation with multi-spectral computer vision for autonomous crop health monitoring, targeted micro-spraying, and mechanical weed removal.",
    highlights: [
      "Ultra-precise targeted chemical spraying (-85% herbicide usage)",
      "Autonomous row-following and headland turns",
      "Real-time weed detection via edge AI vision",
      "All-weather high-clearance 4x4 independent suspension"
    ],
    specs: {
      "Dimensions": "1,450 x 980 x 850 mm",
      "Curb Weight": "115 kg (chassis + power unit)",
      "Payload Capacity": "85 kg (Liquid tank / Module)",
      "Speed Range": "0.5 - 6.5 km/h (Adjustable field speed)",
      "Power System": "48V 60Ah LiFePO4 Quick-Swap Battery",
      "Runtime": "8 to 11 hours continuous field operation",
      "Navigation": "RTK-GNSS + Dual Stereo Vision + 3D LiDAR",
      "Spraying Width": "Up to 3.5 meters with variable boom",
      "Protection Rating": "IP66 Dust and Water Resistant",
      "Connectivity": "4G LTE / 5G / LoRaWAN / Wi-Fi Mesh"
    },
    applications: [
      "Targeted Herbicide & Pesticide Micro-spraying",
      "Mechanical High-Speed Intra-Row Weeding",
      "Soil Moisture & Thermal Crop Canopy Mapping",
      "Automated Fertilizer Dispensing & Seedbed Monitoring"
    ],
    features: [
      {
        title: "Sub-Centimeter RTK Accuracy",
        description: "Zero drift even in dense canopy environments with dual-band RTK GNSS and IMU dead reckoning."
      },
      {
        title: "Intelligent Spray Boom",
        description: "Electro-pneumatic nozzles actuate within 15ms of weed classification to prevent overspray."
      },
      {
        title: "Solar Assist Auxiliary Roof",
        description: "Optional 180W high-efficiency solar roof panel extends daily runtime by up to 25%."
      }
    ]
  },
  {
    id: "ioh-cargobot-x",
    name: "IOH CargoBot-X Industrial AGV",
    tagline: "Heavy-Duty Autonomous Logistics & Material Transport",
    category: "Industrial & Logistics",
    badge: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    description: "The CargoBot-X is an autonomous heavy-payload transport platform engineered for intra-facility logistics, manufacturing floors, campus deliveries, and outdoor distribution yards with multi-layered safety certifications.",
    highlights: [
      "350 kg payload capacity with automated roller/lift attachment",
      "360-degree Safety LiDAR with dynamic collision prevention zone",
      "Indoor/Outdoor seamless transition (SLAM to GNSS)",
      "Automated magnetic/inductive wireless fast charging"
    ],
    specs: {
      "Dimensions": "1,200 x 800 x 420 mm (Euro-pallet compatible)",
      "Curb Weight": "160 kg",
      "Payload Capacity": "350 kg flatbed load",
      "Max Speed": "12 km/h (governed for industrial safety)",
      "Power System": "48V 100Ah LFP Battery Pack",
      "Runtime": "12 - 14 hours per single charge cycle",
      "Charge Time": "1.2 hours (Fast Charge 80%)",
      "Turning Radius": "Zero-turn (Mecanum/Differential options)",
      "Protection Rating": "IP65 Industrial Grade",
      "Control Protocol": "ROS2 / Modbus / MQTT / REST API"
    },
    applications: [
      "Warehouse Pallet & Tote Autonomous Transport",
      "Hospital & Campus Sterile Supply Distribution",
      "Factory Assembly Line Material Feeding",
      "Port & Cargo Yard Ground Logistics"
    ],
    features: [
      {
        title: "ISO 3691-4 Safety Compliant",
        description: "Dual safety laser scanners with programmable safety fields guarantee worker safety."
      },
      {
        title: "Multi-Floor Elevator Interface",
        description: "Automated API integration with smart building elevators and automatic door systems."
      },
      {
        title: "Fleet Fleet-Manager™",
        description: "Centralized fleet dispatching with intelligent task allocation and congestion mitigation."
      }
    ]
  },
  {
    id: "ioh-aeroscan",
    name: "IOH AeroScan Inspection Drone System",
    tagline: "High-Altitude Autonomous Aerial Surveillance & Inspection",
    category: "Aerial Robotics",
    badge: "New Release",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80",
    description: "A commercial-grade autonomous quad-copter featuring AI edge processing, dual thermal/RGB 4K gimbal, and automated tethered dock integration for continuous aerial surveillance and infrastructure integrity inspection.",
    highlights: [
      "45-minute untethered flight time (unlimited with tether dock)",
      "4K 30x Optical Zoom with 640x512 Radiometric Thermal Sensor",
      "Automated BVLOS (Beyond Visual Line of Sight) missions",
      "Encrypted AES-256 telemetry link with 15km range"
    ],
    specs: {
      "Diagonal Wheelbase": "880 mm",
      "Max Takeoff Weight": "9.5 kg",
      "Payload Capacity": "2.8 kg gimbal payload",
      "Max Wind Resistance": "14 m/s (Level 7)",
      "Max Flight Time": "48 minutes (no payload) / 38 min (full payload)",
      "Operating Temp": "-20°C to +50°C",
      "Camera Sensor": "1/2-inch CMOS 48MP + Flir Boson LWIR",
      "Transmission Range": "15 km FCC / 8 km CE",
      "Ingress Protection": "IP54 Weather-sealed",
      "Emergency Safety": "Dual IMU redundancy + Parachute recovery"
    },
    applications: [
      "Solar Farm Thermal Defect Scanning",
      "Powerline & Wind Turbine Blade Inspection",
      "Agricultural Canopy & Yield Estimation",
      "Disaster Management & Emergency Search"
    ],
    features: [
      {
        title: "AI Thermal Hotspot Detection",
        description: "Auto-flags defective solar cells or overheated transformers with geotagged anomaly alerts."
      },
      {
        title: "Autonomous Drone-in-a-Box",
        description: "Weatherproof charging nest with automated battery swapping and precision RTK landing."
      },
      {
        title: "Cloud Photogrammetry 3D Meshing",
        description: "Direct cloud sync for point cloud and digital twin generation within minutes."
      }
    ]
  },
  {
    id: "ioh-modular-agv",
    name: "IOH Custom Modular Rover Platform",
    tagline: "Bespoke OEM Robotics Chassis & Developer Sandbox",
    category: "Custom OEM",
    badge: "Custom Engineering",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    description: "Designed specifically for universities, industrial R&D teams, and specialized contractors requiring a heavy-duty, open-architecture ground robot with customizable chassis length, power rails, and sensor mounting points.",
    highlights: [
      "Fully open ROS2 / micro-ROS hardware abstraction layer",
      "Modular extruded aluminum mounting rails with 12V/24V/48V taps",
      "NVIDIA Jetson AGX Orin™ on-board AI computing option",
      "Selectable 4WD, 6WD, or Tracked crawler drive trains"
    ],
    specs: {
      "Chassis Config": "4WD Skid-steer / 6WD Rocker-Bogie / Tracked",
      "Chassis Material": "Aerospace 6061-T6 Aluminum + Carbon Fiber",
      "Payload Capacity": "50 kg to 200 kg (Modular options)",
      "Max Incline": "35 degrees obstacle climbing",
      "Onboard Compute": "Intel i7 Industrial / NVIDIA Orin NX / Jetson Orin",
      "Bus Interfaces": "CAN bus, RS485, USB 3.2, Gigabit Ethernet (PoE+)",
      "Battery Pack": "Modular Swappable 24V/48V Lithium-Ion",
      "Ground Clearance": "180 mm (standard) up to 260 mm (high-clearance)",
      "SDK & Tools": "C++, Python, ROS2 Humble/Iron, Gazebo Sim package",
      "Warranty": "2 Years Full Industrial OEM Support"
    },
    applications: [
      "Pipeline & Tunnel Hazardous Inspection",
      "Security Perimeter Patrol with PTZ Cameras",
      "Academic & Defense Robotics Research",
      "Custom Mining & Geo-surveying Attachments"
    ],
    features: [
      {
        title: "Plug-and-Play Sensor Mounting",
        description: "Pre-calibrated quick mounts for Ouster, Velodyne, Livox LiDARs, and RealSense cameras."
      },
      {
        title: "Sim2Real Gazebo Package",
        description: "Full digital URDF and physics model for rapid algorithm testing before hardware deployment."
      },
      {
        title: "Over-The-Air Software Updates",
        description: "Encrypted fleet management gateway for instantaneous remote patch and algorithm rollout."
      }
    ]
  }
];
