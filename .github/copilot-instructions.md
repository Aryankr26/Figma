# Fleet Management Dashboard - Copilot Instructions

## Project Overview
This is a **React + TypeScript + Vite** fleet management dashboard ("FleetMaster Pro") originally exported from Figma. It tracks vehicles, fuel, geofencing, complaints, and provides insights for **owner** and **supervisor** roles.

## Quick Start
```bash
npm i          # Install dependencies
npm run dev    # Start dev server at localhost:3000
npm run build  # Build to /build directory
```

## Architecture

### Navigation & State Flow
The app uses **prop-based navigation** (not a router). `App.tsx` manages:
- `currentPage` - string identifier for current view
- `userRole` - 'owner' | 'supervisor' | null  
- Navigation via `onNavigate(page: string, vehicleId?: string)` prop drilling

```tsx
// Navigation example - pass through DashboardLayout to child pages
onNavigate('dashboard', vehicleId)  // Navigate with optional vehicle selection
onNavigate('vehicles')              // Navigate to geofencing page
```

### Key Component Structure
```
src/
├── App.tsx                    # Root: auth state, navigation, role-based rendering
├── components/
│   ├── DashboardLayout.tsx    # Sidebar + main content wrapper
│   └── pages/                 # Feature pages (each self-contained)
│       ├── OwnerDashboard.tsx     # Map view with vehicle tracking (owner role)
│       ├── SupervisorDashboard.tsx # Similar map view (supervisor role)
│       ├── FuelReports.tsx        # Fuel tracking with charts/tables
│       ├── InsightsPage.tsx       # Analytics with Recharts
│       └── ...
└── components/ui/             # shadcn/ui primitives (don't modify directly)
```

### Role-Based Rendering Pattern
```tsx
// In App.tsx - dashboards differ by role
return userRole === 'owner' 
  ? <OwnerDashboard onNavigate={handleNavigate} selectedVehicleId={selectedVehicleId} /> 
  : <SupervisorDashboard onNavigate={handleNavigate} selectedVehicleId={selectedVehicleId} />;
```

## Styling Conventions

### Design System Colors
Use these exact hex values for consistency with Figma designs:
```tsx
// Status colors
'#27AE60'  // Moving/Valid/Success (green)
'#E53935'  // Stopped/Error/Expired (red)  
'#F2B233'  // Idle/Warning/Expiring (yellow/amber)
'#0D47A1'  // Primary blue (headers, links, active states)
'#67727E'  // Secondary text
'#2A3547'  // Primary text
'#E1E6EF'  // Borders
'#F5F7FA'  // Light backgrounds
```

### Inline Styles Pattern
Dashboard pages use **inline `style` objects** (not just Tailwind) for pixel-perfect Figma matching:
```tsx
<p style={{
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: 600,
  color: '#2A3547'
}}>
  {vehicle.number}
</p>
```

### Tailwind + CSS Variables
Global styles are in `src/styles/globals.css` with CSS custom properties. Use Tailwind for layout, inline styles for typography when matching designs.

## Data Patterns

### Vehicle Data Structure
All vehicle data is **mock data defined inline** in dashboard components. When adding vehicles:
```tsx
const vehicles: Vehicle[] = [{
  id: string,
  number: string,                    // e.g., 'HR55AN2175'
  manufacturer: 'tata' | 'ashok' | 'militrack',
  status: 'moving' | 'stopped' | 'idling',
  position: { top: string, left: string },  // CSS percentages for map
  insurance: { status: 'valid' | 'expiring' | 'expired', expiryDate: string, daysRemaining: number },
  // ... see OwnerDashboard.tsx for full interface
}];
```

### Status Color Helper Pattern
Reuse this pattern across components:
```tsx
const getStatusColor = (status: 'moving' | 'stopped' | 'idling') => {
  switch (status) {
    case 'moving': return '#27AE60';
    case 'stopped': return '#E53935';
    case 'idling': return '#F2B233';
  }
};
```

## UI Components

### shadcn/ui Integration
Components in `src/components/ui/` are from shadcn/ui. Import with path aliases:
```tsx
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
```

### Animation with Framer Motion
Vehicle animations use `motion/react`:
```tsx
import { motion, AnimatePresence } from 'motion/react';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
/>
```

### Charts with Recharts
InsightsPage uses Recharts for analytics:
```tsx
import { BarChart, LineChart, PieChart, AreaChart, ResponsiveContainer } from 'recharts';
```

## Asset Handling
Figma assets use special import syntax resolved by Vite:
```tsx
import mapImage from 'figma:asset/494a3e5749234580c611bc616000d2fd7d637deb.png';
```
These map to files in `src/assets/` via `vite.config.ts` aliases.

## Common Tasks

### Adding a New Page
1. Create component in `src/components/pages/NewPage.tsx`
2. Add case to `renderPage()` switch in `App.tsx`
3. Add nav item to `navItems` array in `DashboardLayout.tsx`
4. Handle in conditional rendering block in `DashboardLayout.tsx`

### Adding Vehicle Popup/Modal
Use the established pattern with `AnimatePresence` + `motion.div`:
```tsx
<AnimatePresence>
  {selectedVehicle && (
    <motion.div className="fixed inset-0 z-50 bg-black/40">
      {/* Modal content */}
    </motion.div>
  )}
</AnimatePresence>
```

## Testing Credentials
- **Owner**: username `owner`, password `owner`
- **Supervisor**: username `supervisor`, password `supervisor`
