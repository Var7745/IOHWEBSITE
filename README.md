# IOH Engineer — Next-Gen Autonomous Robotics & Engineering Solutions

An enterprise-grade, high-performance web platform built for **IOH Engineer** (`ioh-engineer.com`), inspired by [rov-era.com](https://www.rov-era.com/) and featuring interactive robotics tools, real-time ROI calculation, modular vehicle configuration, and high-tech UI components.

---

## 🌟 Key Features

1. **Interactive 2D Rover Simulator & Arena (`RoverSimulator.jsx`)**
   - Direct manual drive with keyboard controls (W/A/S/D or Arrow keys) and touch D-Pad.
   - Click-to-Waypoint Autonomous Pathfinding mode with obstacle detection.
   - Auto-Patrol mode looping through predefined field waypoints.
   - Real-time HUD showing speed, heading, distance, battery level, and LiDAR proximity.
   - Dynamic Modular Payload Configurator: Swap attachments (Spray boom, 3D LiDAR, Robotic Arm, Thermal Cam) to see real-time recalculations of vehicle mass, runtime, and telemetry.

2. **Robotics Catalog & Detailed Specification Sheets (`Products.jsx` & `ProductModal.jsx`)**
   - **IOH Terra-1**: Autonomous Agricultural Rover for smart precision spraying & weeding.
   - **IOH CargoBot-X**: Heavy-duty 350kg autonomous factory & logistics AGV.
   - **IOH AeroScan**: Commercial aerial inspection drone with radiometric thermal + 4K zoom.
   - **IOH Modular Platform**: Custom OEM research and industrial developer sandbox.
   - Interactive modal with complete engineering matrices and datasheet download links.

3. **Autonomous Technology Matrix (`Features.jsx`)**
   - AI-Powered SLAM & RTK-GNSS Navigation.
   - Automated Precision Micro-Spraying (-85% chemical waste).
   - 360° Safety Envelopes (<0.2s obstacle stop).
   - Edge AI neural inference with NVIDIA Jetson Orin integration.
   - Cloud Telemetry & 24/7 OTA updates.

4. **Fleet-as-a-Service (FaaS) & Solutions (`Services.jsx`)**
   - Turnkey rover leasing with operator training and spare parts.
   - Custom OEM mechanical, PCB, and ROS2 software development.
   - Industrial WMS and ERP automation integration.
   - 24/7 Field Maintenance with SLA guarantees.

5. **Operational Savings & ROI Calculator (`CostCalculator.jsx`)**
   - Real-time calculations of monthly and annual savings, workforce efficiency boost, and payback duration based on land/facility size and labor wages.

6. **Interactive Consultation & Inquiries (`Contact.jsx`)**
   - Direct contact cards (Headquarters, Phone numbers, Email).
   - Interactive technical inquiry form with automated prefill options and celebration feedback.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### Run the Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### Create Production Build
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

- **Company Info & Contact Numbers:** Edit `src/data/siteContent.js` to change phone numbers, email addresses, office locations, and stats.
- **Product Models & Specs:** Edit `src/data/productsData.js` to add new rovers, drones, or industrial vehicles.
- **Services & Pricing Models:** Edit `src/data/servicesData.js`.

---

## 🌐 Deploying to the Web

You can easily deploy this website to any static hosting provider in under 2 minutes:

### Option A: Vercel (Recommended)
1. Install the Vercel CLI: `npm install -g vercel`
2. In this folder, run: `vercel`
3. Follow the quick prompts to deploy. You can attach your custom domain (`ioh-engineer.com`) directly in the Vercel dashboard.

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist/` folder into [Netlify Drop](https://app.netlify.com/drop) or link your repository.

---

## 📄 License
© 2026 IOH Engineer. All rights reserved.
