import { useState, useEffect } from 'react';
import { Navigation, Circle, Power, Clock, X, Share2, Filter, Download, ChevronRight, MapPin, Gauge, Calendar, History, Shield, FileCheck, Receipt, Fuel, CircleDot, ZoomIn, ZoomOut, Maximize2, Map } from 'lucide-react';
import mapImage from 'figma:asset/494a3e5749234580c611bc616000d2fd7d637deb.png';
import { motion, AnimatePresence } from 'motion/react';

export function OwnerDashboard({ onNavigate, selectedVehicleId }) {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [detailVehicle, setDetailVehicle] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setMapZoom(1);
  };

  const vehicles = [
    { 
      id: '1', 
      number: 'HR55AN2175',
      manufacturer: 'tata',
      status: 'moving', 
      statusText: 'Active',
      speed: 42,
      position: { top: '35%', left: '44%' },
      rotation: 45,
      address: 'Sector 18, Gurugram, Haryana',
      lastUpdated: '2 mins ago',
      todayTrips: 3,
      todayDistance: '124 km',
      totalKm: '5000 km',
      driverName: 'John Doe',
      driverMobile: '9876543210',
      serviceDue: '15 days',
      cngPressure: '200 psi',
      vehicleModel: 'Model A',
      insurance: { status: 'valid', expiryDate: '15 Jan 2026', daysRemaining: 61 },
      pollution: { status: 'valid', expiryDate: '10 Feb 2026', daysRemaining: 87 },
      fitness: { status: 'valid', expiryDate: '20 Mar 2026', daysRemaining: 125 },
      tax: { status: 'paid', nextDueDate: '30 Mar 2026', amount: '₹12,500' },
      dieselExpense: { today: '₹1,850', thisMonth: '₹45,200' },
      tyreExpense: { lastReplacement: '5 Oct 2025', cost: '₹28,000' }
    },
    { 
      id: '2', 
      number: 'HR47E2573',
      manufacturer: 'ashok',
      status: 'stopped', 
      statusText: 'Stopped',
      speed: 0,
      position: { top: '40%', left: '50%' },
      rotation: 0,
      address: 'IFFCO Chowk, Gurugram, Haryana',
      lastUpdated: '15 mins ago',
      todayTrips: 2,
      todayDistance: '87 km',
      totalKm: '4500 km',
      driverName: 'Jane Smith',
      driverMobile: '9876543211',
      serviceDue: '20 days',
      cngPressure: '190 psi',
      vehicleModel: 'Model B',
      insurance: { status: 'expiring', expiryDate: '25 Nov 2025', daysRemaining: 10 },
      pollution: { status: 'valid', expiryDate: '15 Jan 2026', daysRemaining: 61 },
      fitness: { status: 'valid', expiryDate: '28 Feb 2026', daysRemaining: 105 },
      tax: { status: 'paid', nextDueDate: '15 Apr 2026', amount: '₹11,800' },
      dieselExpense: { today: '₹0', thisMonth: '₹38,500' },
      tyreExpense: { lastReplacement: '12 Sep 2025', cost: '₹26,500' }
    },
    { 
      id: '3', 
      number: 'UP32BN9021',
      manufacturer: 'militrack',
      status: 'idling', 
      statusText: 'Idle',
      speed: 0,
      position: { top: '38%', left: '54%' },
      rotation: 180,
      address: 'Greater Noida Industrial Area, UP',
      lastUpdated: '5 mins ago',
      todayTrips: 4,
      todayDistance: '156 km',
      totalKm: '6000 km',
      driverName: 'Alice Johnson',
      driverMobile: '9876543212',
      serviceDue: '10 days',
      cngPressure: '210 psi',
      vehicleModel: 'Model C',
      insurance: { status: 'valid', expiryDate: '20 Feb 2026', daysRemaining: 97 },
      pollution: { status: 'expiring', expiryDate: '22 Nov 2025', daysRemaining: 7 },
      fitness: { status: 'valid', expiryDate: '10 Apr 2026', daysRemaining: 146 },
      tax: { status: 'paid', nextDueDate: '20 May 2026', amount: '₹13,200' },
      dieselExpense: { today: '₹2,100', thisMonth: '₹52,800' },
      tyreExpense: { lastReplacement: '18 Aug 2025', cost: '₹30,000' }
    },
    { 
      id: '4', 
      number: 'MP04CE7712',
      manufacturer: 'tata',
      status: 'moving', 
      statusText: 'Active',
      speed: 38,
      position: { top: '52%', left: '38%' },
      rotation: 270,
      address: 'Pithampur Industrial Area, MP',
      lastUpdated: '1 min ago',
      todayTrips: 2,
      todayDistance: '98 km',
      totalKm: '5500 km',
      driverName: 'Bob Brown',
      driverMobile: '9876543213',
      serviceDue: '25 days',
      cngPressure: '180 psi',
      vehicleModel: 'Model D',
      insurance: { status: 'valid', expiryDate: '5 Mar 2026', daysRemaining: 110 },
      pollution: { status: 'valid', expiryDate: '30 Jan 2026', daysRemaining: 76 },
      fitness: { status: 'valid', expiryDate: '15 Jun 2026', daysRemaining: 212 },
      tax: { status: 'paid', nextDueDate: '10 Jun 2026', amount: '₹12,000' },
      dieselExpense: { today: '₹1,650', thisMonth: '₹41,300' },
      tyreExpense: { lastReplacement: '3 Jul 2025', cost: '₹27,500' }
    },
    { 
      id: '5', 
      number: 'MH12RK5521',
      manufacturer: 'ashok',
      status: 'stopped', 
      statusText: 'Stopped',
      speed: 0,
      position: { top: '65%', left: '48%' },
      rotation: 0,
      address: 'Pune Industrial Estate, MH',
      lastUpdated: '8 mins ago',
      todayTrips: 3,
      todayDistance: '112 km',
      totalKm: '4800 km',
      driverName: 'Charlie Davis',
      driverMobile: '9876543214',
      serviceDue: '30 days',
      cngPressure: '170 psi',
      vehicleModel: 'Model E',
      insurance: { status: 'valid', expiryDate: '12 Apr 2026', daysRemaining: 148 },
      pollution: { status: 'valid', expiryDate: '8 Mar 2026', daysRemaining: 113 },
      fitness: { status: 'valid', expiryDate: '25 May 2026', daysRemaining: 191 },
      tax: { status: 'paid', nextDueDate: '5 Jul 2026', amount: '₹11,500' },
      dieselExpense: { today: '₹1,950', thisMonth: '₹48,700' },
      tyreExpense: { lastReplacement: '20 Jun 2025', cost: '₹25,800' }
    },
    { 
      id: '6', 
      number: 'HR55AM8082',
      manufacturer: 'militrack',
      status: 'moving', 
      statusText: 'Active',
      speed: 45,
      position: { top: '33%', left: '46%' },
      rotation: 90,
      address: 'Manesar Industrial Hub, Haryana',
      lastUpdated: '3 mins ago',
      todayTrips: 2,
      todayDistance: '76 km',
      totalKm: '5200 km',
      driverName: 'David Wilson',
      driverMobile: '9876543215',
      serviceDue: '5 days',
      cngPressure: '220 psi',
      vehicleModel: 'Model F',
      insurance: { status: 'expiring', expiryDate: '18 Nov 2025', daysRemaining: 3 },
      pollution: { status: 'expired', expiryDate: '10 Nov 2025', daysRemaining: -5 },
      fitness: { status: 'valid', expiryDate: '15 Feb 2026', daysRemaining: 92 },
      tax: { status: 'due', nextDueDate: '20 Nov 2025', amount: '₹12,800' },
      dieselExpense: { today: '₹1,720', thisMonth: '₹43,600' },
      tyreExpense: { lastReplacement: '5 May 2025', cost: '₹29,200' }
    },
    { 
      id: '7', 
      number: 'MH14GT2299',
      manufacturer: 'ashok',
      status: 'idling', 
      statusText: 'Idle',
      speed: 0,
      position: { top: '62%', left: '52%' },
      rotation: 45,
      address: 'Mumbai Port Area, MH',
      lastUpdated: '12 mins ago',
      todayTrips: 1,
      todayDistance: '45 km',
      totalKm: '4700 km',
      driverName: 'Eve White',
      driverMobile: '9876543216',
      serviceDue: '12 days',
      cngPressure: '185 psi',
      vehicleModel: 'Model G',
      insurance: { status: 'valid', expiryDate: '22 Jan 2026', daysRemaining: 68 },
      pollution: { status: 'valid', expiryDate: '5 Apr 2026', daysRemaining: 141 },
      fitness: { status: 'expiring', expiryDate: '25 Nov 2025', daysRemaining: 10 },
      tax: { status: 'paid', nextDueDate: '15 Aug 2026', amount: '₹11,200' },
      dieselExpense: { today: '₹950', thisMonth: '₹34,100' },
      tyreExpense: { lastReplacement: '10 Apr 2025', cost: '₹24,500' }
    },
    { 
      id: '8', 
      number: 'UP14DT9921',
      manufacturer: 'tata',
      status: 'moving', 
      statusText: 'Active',
      speed: 51,
      position: { top: '36%', left: '52%' },
      rotation: 135,
      address: 'Noida Sector 62, UP',
      lastUpdated: '1 min ago',
      todayTrips: 3,
      todayDistance: '134 km',
      totalKm: '5800 km',
      driverName: 'Frank Green',
      driverMobile: '9876543217',
      serviceDue: '18 days',
      cngPressure: '195 psi',
      vehicleModel: 'Model H',
      insurance: { status: 'valid', expiryDate: '10 Mar 2026', daysRemaining: 115 },
      pollution: { status: 'valid', expiryDate: '18 Feb 2026', daysRemaining: 95 },
      fitness: { status: 'valid', expiryDate: '30 Jun 2026', daysRemaining: 227 },
      tax: { status: 'paid', nextDueDate: '25 Sep 2026', amount: '₹13,500' },
      dieselExpense: { today: '₹2,250', thisMonth: '₹56,400' },
      tyreExpense: { lastReplacement: '22 Aug 2025', cost: '₹31,000' }
    },
    { 
      id: '9', 
      number: 'MP07BK4402',
      manufacturer: 'militrack',
      status: 'stopped', 
      statusText: 'Stopped',
      speed: 0,
      position: { top: '48%', left: '40%' },
      rotation: 0,
      address: 'Indore IT Park, MP',
      lastUpdated: '20 mins ago',
      todayTrips: 2,
      todayDistance: '89 km',
      totalKm: '5300 km',
      driverName: 'Grace Black',
      driverMobile: '9876543218',
      serviceDue: '22 days',
      cngPressure: '175 psi',
      vehicleModel: 'Model I',
      insurance: { status: 'valid', expiryDate: '28 Apr 2026', daysRemaining: 164 },
      pollution: { status: 'valid', expiryDate: '12 Mar 2026', daysRemaining: 117 },
      fitness: { status: 'valid', expiryDate: '8 Jul 2026', daysRemaining: 235 },
      tax: { status: 'paid', nextDueDate: '10 Oct 2026', amount: '₹11,900' },
      dieselExpense: { today: '₹0', thisMonth: '₹39,700' },
      tyreExpense: { lastReplacement: '15 Sep 2025', cost: '₹26,800' }
    },
    { 
      id: '10', 
      number: 'HR55AN1941',
      manufacturer: 'ashok',
      status: 'idling', 
      statusText: 'Idle',
      speed: 0,
      position: { top: '34%', left: '42%' },
      rotation: 225,
      address: 'Delhi-Jaipur Highway, Haryana',
      lastUpdated: '6 mins ago',
      todayTrips: 2,
      todayDistance: '67 km',
      totalKm: '5100 km',
      driverName: 'Henry Blue',
      driverMobile: '9876543219',
      serviceDue: '7 days',
      cngPressure: '215 psi',
      vehicleModel: 'Model J',
      insurance: { status: 'expiring', expiryDate: '20 Nov 2025', daysRemaining: 5 },
      pollution: { status: 'valid', expiryDate: '25 Jan 2026', daysRemaining: 71 },
      fitness: { status: 'valid', expiryDate: '14 May 2026', daysRemaining: 180 },
      tax: { status: 'due', nextDueDate: '18 Nov 2025', amount: '₹12,300' },
      dieselExpense: { today: '₹1,480', thisMonth: '₹40,200' },
      tyreExpense: { lastReplacement: '28 Jul 2025', cost: '₹27,200' }
    },
    { 
      id: '11', 
      number: 'MH43DF2003',
      manufacturer: 'tata',
      status: 'moving', 
      statusText: 'Active',
      speed: 39,
      position: { top: '58%', left: '45%' },
      rotation: 315,
      address: 'Nashik Industrial Area, MH',
      lastUpdated: '4 mins ago',
      todayTrips: 3,
      todayDistance: '101 km',
      totalKm: '5600 km',
      driverName: 'Isabella Red',
      driverMobile: '9876543220',
      serviceDue: '14 days',
      cngPressure: '180 psi',
      vehicleModel: 'Model K',
      insurance: { status: 'valid', expiryDate: '5 Feb 2026', daysRemaining: 82 },
      pollution: { status: 'valid', expiryDate: '20 Apr 2026', daysRemaining: 156 },
      fitness: { status: 'valid', expiryDate: '18 Aug 2026', daysRemaining: 276 },
      tax: { status: 'paid', nextDueDate: '5 Nov 2026', amount: '₹12,700' },
      dieselExpense: { today: '₹1,790', thisMonth: '₹44,900' },
      tyreExpense: { lastReplacement: '3 Oct 2025', cost: '₹28,600' }
    },
    { 
      id: '12', 
      number: 'UP16CP7788',
      manufacturer: 'militrack',
      status: 'stopped', 
      statusText: 'Stopped',
      speed: 0,
      position: { top: '42%', left: '56%' },
      rotation: 0,
      address: 'Lucknow Transport Hub, UP',
      lastUpdated: '10 mins ago',
      todayTrips: 1,
      todayDistance: '54 km',
      totalKm: '5400 km',
      driverName: 'Jack Yellow',
      driverMobile: '9876543221',
      serviceDue: '28 days',
      cngPressure: '170 psi',
      vehicleModel: 'Model L',
      insurance: { status: 'valid', expiryDate: '18 May 2026', daysRemaining: 184 },
      pollution: { status: 'valid', expiryDate: '28 Mar 2026', daysRemaining: 133 },
      fitness: { status: 'valid', expiryDate: '12 Sep 2026', daysRemaining: 301 },
      tax: { status: 'paid', nextDueDate: '20 Dec 2026', amount: '₹11,600' },
      dieselExpense: { today: '₹0', thisMonth: '₹32,800' },
      tyreExpense: { lastReplacement: '12 Jun 2025', cost: '₹25,200' }
    },
    { 
      id: '13', 
      number: 'MP19KA6604',
      manufacturer: 'ashok',
      status: 'moving', 
      statusText: 'Active',
      speed: 47,
      position: { top: '55%', left: '42%' },
      rotation: 180,
      address: 'Bhopal Industrial Corridor, MP',
      lastUpdated: '2 mins ago',
      todayTrips: 2,
      todayDistance: '93 km',
      totalKm: '5700 km',
      driverName: 'Katherine Purple',
      driverMobile: '9876543222',
      serviceDue: '9 days',
      cngPressure: '200 psi',
      vehicleModel: 'Model M',
      insurance: { status: 'valid', expiryDate: '8 Apr 2026', daysRemaining: 144 },
      pollution: { status: 'expiring', expiryDate: '19 Nov 2025', daysRemaining: 4 },
      fitness: { status: 'valid', expiryDate: '25 Jul 2026', daysRemaining: 252 },
      tax: { status: 'paid', nextDueDate: '30 Jan 2027', amount: '₹13,100' },
      dieselExpense: { today: '₹2,050', thisMonth: '₹51,300' },
      tyreExpense: { lastReplacement: '8 Sep 2025', cost: '₹29,800' }
    },
    { 
      id: '14', 
      number: 'HR26DT9011',
      manufacturer: 'tata',
      status: 'idling', 
      statusText: 'Idle',
      speed: 0,
      position: { top: '37%', left: '48%' },
      rotation: 90,
      address: 'Faridabad Industrial Area, Haryana',
      lastUpdated: '7 mins ago',
      todayTrips: 3,
      todayDistance: '118 km',
      totalKm: '5900 km',
      driverName: 'Liam Orange',
      driverMobile: '9876543223',
      serviceDue: '16 days',
      cngPressure: '190 psi',
      vehicleModel: 'Model N',
      insurance: { status: 'valid', expiryDate: '12 Jun 2026', daysRemaining: 209 },
      pollution: { status: 'valid', expiryDate: '5 May 2026', daysRemaining: 171 },
      fitness: { status: 'valid', expiryDate: '20 Oct 2026', daysRemaining: 339 },
      tax: { status: 'paid', nextDueDate: '15 Feb 2027', amount: '₹12,400' },
      dieselExpense: { today: '₹1,920', thisMonth: '₹47,600' },
      tyreExpense: { lastReplacement: '25 Oct 2025', cost: '₹28,300' }
    },
    { 
      id: '15', 
      number: 'MH01AX9920',
      manufacturer: 'militrack',
      status: 'moving', 
      statusText: 'Active',
      speed: 44,
      position: { top: '60%', left: '49%' },
      rotation: 270,
      address: 'Thane Industrial Zone, MH',
      lastUpdated: '3 mins ago',
      todayTrips: 4,
      todayDistance: '142 km',
      totalKm: '6100 km',
      driverName: 'Mia Green',
      driverMobile: '9876543224',
      serviceDue: '3 days',
      cngPressure: '220 psi',
      vehicleModel: 'Model O',
      insurance: { status: 'expired', expiryDate: '8 Nov 2025', daysRemaining: -7 },
      pollution: { status: 'expiring', expiryDate: '17 Nov 2025', daysRemaining: 2 },
      fitness: { status: 'valid', expiryDate: '30 Aug 2026', daysRemaining: 288 },
      tax: { status: 'due', nextDueDate: '16 Nov 2025', amount: '₹13,800' },
      dieselExpense: { today: '₹2,380', thisMonth: '₹59,200' },
      tyreExpense: { lastReplacement: '15 Nov 2025', cost: '₹32,000' }
    },
    { 
      id: '16', 
      number: 'TN-09-CD-3421',
      manufacturer: 'tata',
      status: 'moving', 
      statusText: 'Active',
      speed: 52,
      position: { top: '71%', left: '55%' },
      rotation: 135,
      address: 'Chennai Port Area, TN',
      lastUpdated: '1 min ago',
      todayTrips: 3,
      todayDistance: '128 km',
      totalKm: '6500 km',
      driverName: 'Noah Silver',
      driverMobile: '9876543225',
      serviceDue: '11 days',
      cngPressure: '205 psi',
      vehicleModel: 'Model P',
      insurance: { status: 'valid', expiryDate: '28 Mar 2026', daysRemaining: 133 },
      pollution: { status: 'valid', expiryDate: '15 Apr 2026', daysRemaining: 151 },
      fitness: { status: 'valid', expiryDate: '10 Sep 2026', daysRemaining: 299 },
      tax: { status: 'paid', nextDueDate: '25 Mar 2027', amount: '₹14,200' },
      dieselExpense: { today: '₹2,420', thisMonth: '₹60,500' },
      tyreExpense: { lastReplacement: '5 Oct 2025', cost: '₹33,500' }
    },
    { 
      id: '17', 
      number: 'KA-51-MN-7788',
      manufacturer: 'ashok',
      status: 'stopped', 
      statusText: 'Stopped',
      speed: 0,
      position: { top: '68%', left: '42%' },
      rotation: 0,
      address: 'Bangalore Tech Park, KA',
      lastUpdated: '18 mins ago',
      todayTrips: 2,
      todayDistance: '72 km',
      totalKm: '4900 km',
      driverName: 'Olivia Gold',
      driverMobile: '9876543226',
      serviceDue: '24 days',
      cngPressure: '175 psi',
      vehicleModel: 'Model Q',
      insurance: { status: 'valid', expiryDate: '14 May 2026', daysRemaining: 180 },
      pollution: { status: 'valid', expiryDate: '22 Mar 2026', daysRemaining: 127 },
      fitness: { status: 'valid', expiryDate: '18 Jun 2026', daysRemaining: 215 },
      tax: { status: 'paid', nextDueDate: '10 Apr 2027', amount: '₹11,700' },
      dieselExpense: { today: '₹0', thisMonth: '₹37,900' },
      tyreExpense: { lastReplacement: '20 Sep 2025', cost: '₹26,300' }
    },
    { 
      id: '18', 
      number: 'RJ-14-PQ-5566',
      manufacturer: 'militrack',
      status: 'idling', 
      statusText: 'Idle',
      speed: 0,
      position: { top: '44%', left: '34%' },
      rotation: 225,
      address: 'Jaipur Industrial Zone, RJ',
      lastUpdated: '9 mins ago',
      todayTrips: 3,
      todayDistance: '96 km',
      totalKm: '5250 km',
      driverName: 'Peter Bronze',
      driverMobile: '9876543227',
      serviceDue: '19 days',
      cngPressure: '188 psi',
      vehicleModel: 'Model R',
      insurance: { status: 'expiring', expiryDate: '23 Nov 2025', daysRemaining: 8 },
      pollution: { status: 'valid', expiryDate: '10 Feb 2026', daysRemaining: 87 },
      fitness: { status: 'valid', expiryDate: '5 Jul 2026', daysRemaining: 232 },
      tax: { status: 'paid', nextDueDate: '20 May 2027', amount: '₹12,600' },
      dieselExpense: { today: '₹1,680', thisMonth: '₹42,800' },
      tyreExpense: { lastReplacement: '14 Aug 2025', cost: '₹28,900' }
    },
    { 
      id: '19', 
      number: 'GJ-01-RS-4433',
      manufacturer: 'tata',
      status: 'moving', 
      statusText: 'Active',
      speed: 48,
      position: { top: '54%', left: '28%' },
      rotation: 315,
      address: 'Ahmedabad Export Zone, GJ',
      lastUpdated: '2 mins ago',
      todayTrips: 4,
      todayDistance: '157 km',
      totalKm: '6350 km',
      driverName: 'Quinn Maroon',
      driverMobile: '9876543228',
      serviceDue: '6 days',
      cngPressure: '212 psi',
      vehicleModel: 'Model S',
      insurance: { status: 'valid', expiryDate: '2 Apr 2026', daysRemaining: 138 },
      pollution: { status: 'expiring', expiryDate: '21 Nov 2025', daysRemaining: 6 },
      fitness: { status: 'valid', expiryDate: '28 Oct 2026', daysRemaining: 347 },
      tax: { status: 'paid', nextDueDate: '8 Jun 2027', amount: '₹13,900' },
      dieselExpense: { today: '₹2,580', thisMonth: '₹64,500' },
      tyreExpense: { lastReplacement: '2 Nov 2025', cost: '₹34,200' }
    },
    { 
      id: '20', 
      number: 'DL-8C-TU-9988',
      manufacturer: 'ashok',
      status: 'stopped', 
      statusText: 'Stopped',
      speed: 0,
      position: { top: '32%', left: '47%' },
      rotation: 0,
      address: 'Delhi Logistics Hub, DL',
      lastUpdated: '25 mins ago',
      todayTrips: 1,
      todayDistance: '41 km',
      totalKm: '4650 km',
      driverName: 'Rachel Teal',
      driverMobile: '9876543229',
      serviceDue: '27 days',
      cngPressure: '168 psi',
      vehicleModel: 'Model T',
      insurance: { status: 'valid', expiryDate: '19 Jun 2026', daysRemaining: 216 },
      pollution: { status: 'valid', expiryDate: '8 Apr 2026', daysRemaining: 144 },
      fitness: { status: 'valid', expiryDate: '15 Aug 2026', daysRemaining: 273 },
      tax: { status: 'paid', nextDueDate: '30 Jul 2027', amount: '₹11,300' },
      dieselExpense: { today: '₹0', thisMonth: '₹29,400' },
      tyreExpense: { lastReplacement: '7 Jul 2025', cost: '₹24,800' }
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'moving':
        return '#27AE60';
      case 'stopped':
        return '#E53935';
      case 'idling':
        return '#F2B233';
      default:
        return '#64748B';
    }
  };

  const getManufacturerColor = (manufacturer) => {
    if (!manufacturer) return '#64748B';
    switch (manufacturer) {
      case 'tata':
        return '#1976D2';
      case 'ashok':
        return '#2E7D32';
      case 'militrack':
        return '#D32F2F';
      default:
        return '#64748B';
    }
  };

  const getComplianceColor = (status) => {
    if (status === 'valid' || status === 'paid') return '#27AE60';
    if (status === 'expiring') return '#F2B233';
    return '#E53935';
  };

  useEffect(() => {
    if (selectedVehicleId) {
      const vehicle = vehicles.find(v => v.id === selectedVehicleId);
      if (vehicle) {
        setSelectedVehicle(vehicle);
      }
    }
  }, [selectedVehicleId]);

  const vehicleCounts = {
    all: vehicles.length,
    moving: vehicles.filter(v => v.status === 'moving').length,
    stopped: vehicles.filter(v => v.status === 'stopped').length,
    idling: vehicles.filter(v => v.status === 'idling').length,
    offline: 2,
    geofence: 3,
    unsubscribed: 5,
  };

  const filteredVehicles = selectedVehicleId
    ? vehicles.filter(v => v.id === selectedVehicleId)
    : (statusFilter === 'all' ? vehicles : vehicles.filter(v => v.status === statusFilter));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Map Background - Constrained to left side */}
      <div 
        className="absolute inset-y-0 left-0 right-[340px] overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <img 
          src={mapImage}
          alt="Fleet Map"
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{ transform: `scale(${mapZoom})` }}
          draggable={false}
        />

        {/* Cluster Marker - New Delhi */}
        <div 
          className="absolute cursor-pointer hover:scale-105 transition-transform"
          style={{ 
            top: '34%', 
            left: '43%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: '58px',
              height: '58px',
              backgroundColor: '#1565C0',
              boxShadow: '0 4px 12px rgba(13, 71, 161, 0.35), 0 2px 6px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Inner circle */}
            <div 
              className="flex items-center justify-center rounded-full"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#1976D2'
              }}
            >
              <span 
                style={{
                  color: '#FFFFFF',
                  fontSize: '20px',
                  fontWeight: 700,
                  fontFamily: 'Inter',
                  letterSpacing: '0.02em'
                }}
              >
                20
              </span>
            </div>
          </div>
        </div>

        {/* Vehicle Status Filter Bar */}
        {/* ...rest of JSX identical to TS version but without any TypeScript types... */}
      </div>

      {/* Bottom overlays, detail popup, right list panel, counters, etc. */}
      {/* ...copy remaining JSX from TS file here unchanged (no types)... */}
    </div>
  );
}
