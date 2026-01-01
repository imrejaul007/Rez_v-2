import React, { useState } from 'react';
import {
  ArrowLeft, Printer, QrCode, CreditCard, Smartphone, Wifi, WifiOff,
  Bluetooth, Usb, CheckCircle, XCircle, AlertTriangle, HelpCircle,
  Download, RefreshCw, Settings, Zap, Battery, Signal, Volume2,
  Monitor, Cpu, HardDrive, Scale, Barcode, Box, ChevronRight,
  Star, Shield, ExternalLink, Play, Pause, RotateCcw, Wrench
} from 'lucide-react';

const MerchantHardwareHub = () => {
  const [activeTab, setActiveTab] = useState('printers');
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [testingDevice, setTestingDevice] = useState(null);
  const [scanningForDevices, setScanningForDevices] = useState(false);

  // ==========================================
  // HARDWARE COMPATIBILITY MATRIX
  // This is what merchants check before switching
  // ==========================================

  const printerCompatibility = [
    // Thermal Receipt Printers - Most Common
    {
      brand: 'Epson',
      models: [
        { model: 'TM-T88VI', connection: ['USB', 'Bluetooth', 'WiFi'], status: 'certified', notes: 'Industry standard, recommended' },
        { model: 'TM-T82III', connection: ['USB', 'Bluetooth'], status: 'certified', notes: 'Budget-friendly option' },
        { model: 'TM-M30II', connection: ['Bluetooth', 'WiFi'], status: 'certified', notes: 'Compact, mobile-friendly' },
        { model: 'TM-T20III', connection: ['USB'], status: 'certified', notes: 'Entry-level thermal' },
        { model: 'TM-U220', connection: ['Serial', 'USB'], status: 'compatible', notes: 'Dot matrix, kitchen use' }
      ],
      logo: '🖨️',
      recommended: true
    },
    {
      brand: 'TVS Electronics',
      models: [
        { model: 'RP-3160 Gold', connection: ['USB', 'Bluetooth'], status: 'certified', notes: 'Popular in India, reliable' },
        { model: 'RP-3200 Star', connection: ['USB', 'Bluetooth', 'WiFi'], status: 'certified', notes: 'High speed, recommended' },
        { model: 'RP-45 Shoppe', connection: ['USB'], status: 'certified', notes: 'Budget thermal' },
        { model: 'RP-4150', connection: ['USB', 'Serial'], status: 'compatible', notes: 'Legacy support' }
      ],
      logo: '🖨️',
      recommended: true
    },
    {
      brand: 'Posiflex',
      models: [
        { model: 'Aura PP-7600', connection: ['USB', 'Serial'], status: 'certified', notes: 'Enterprise grade' },
        { model: 'Aura PP-6900', connection: ['USB', 'Bluetooth'], status: 'certified', notes: 'Compact design' }
      ],
      logo: '🖨️',
      recommended: false
    },
    {
      brand: 'Star Micronics',
      models: [
        { model: 'TSP143III', connection: ['USB', 'Bluetooth', 'WiFi'], status: 'certified', notes: 'Premium quality' },
        { model: 'mPOP', connection: ['Bluetooth'], status: 'certified', notes: 'All-in-one solution' },
        { model: 'SM-L200', connection: ['Bluetooth'], status: 'certified', notes: 'Mobile portable' }
      ],
      logo: '⭐',
      recommended: false
    },
    {
      brand: 'Generic/Chinese',
      models: [
        { model: 'POS-5890K', connection: ['USB'], status: 'compatible', notes: '58mm, basic printing' },
        { model: 'POS-8220', connection: ['USB', 'Bluetooth'], status: 'compatible', notes: '80mm thermal' },
        { model: 'XP-58IIH', connection: ['USB', 'Bluetooth'], status: 'compatible', notes: 'Xprinter, budget option' },
        { model: 'RONGTA RP326', connection: ['USB', 'WiFi'], status: 'compatible', notes: 'Good value' }
      ],
      logo: '🔧',
      recommended: false
    }
  ];

  const barcodeScanners = [
    {
      brand: 'Zebra',
      models: [
        { model: 'DS2208', connection: ['USB'], status: 'certified', notes: '1D/2D, handheld, recommended' },
        { model: 'DS4608', connection: ['USB'], status: 'certified', notes: 'High performance retail' },
        { model: 'LI4278', connection: ['Bluetooth'], status: 'certified', notes: 'Wireless 1D' },
        { model: 'DS8178', connection: ['Bluetooth'], status: 'certified', notes: 'Premium cordless' }
      ],
      logo: '🦓',
      recommended: true
    },
    {
      brand: 'Honeywell',
      models: [
        { model: 'Voyager 1472g', connection: ['USB', 'Bluetooth'], status: 'certified', notes: 'Versatile, reliable' },
        { model: 'Xenon 1952g', connection: ['Bluetooth'], status: 'certified', notes: 'Area imaging' },
        { model: 'Voyager 1202g', connection: ['Bluetooth'], status: 'certified', notes: 'Wireless laser' }
      ],
      logo: '🐝',
      recommended: true
    },
    {
      brand: 'TVS Electronics',
      models: [
        { model: 'BS-i201S', connection: ['USB'], status: 'certified', notes: 'Entry level 1D/2D' },
        { model: 'BS-i302G', connection: ['USB', 'Bluetooth'], status: 'certified', notes: 'Wireless handheld' }
      ],
      logo: '📊',
      recommended: true
    },
    {
      brand: 'Generic',
      models: [
        { model: 'NT-1228', connection: ['USB'], status: 'compatible', notes: 'Netum, budget 2D' },
        { model: 'YHD-5300', connection: ['USB'], status: 'compatible', notes: 'Basic 1D laser' }
      ],
      logo: '🔧',
      recommended: false
    }
  ];

  const cashDrawers = [
    {
      brand: 'APG',
      models: [
        { model: 'Vasario VB320', connection: ['RJ11/RJ12'], status: 'certified', notes: 'Industry standard, printer-driven' },
        { model: 'Series 100', connection: ['RJ11/RJ12'], status: 'certified', notes: 'Heavy duty' }
      ],
      logo: '💰',
      recommended: true
    },
    {
      brand: 'Posiflex',
      models: [
        { model: 'CR-4100', connection: ['RJ11/RJ12'], status: 'certified', notes: 'Compact size' },
        { model: 'CR-6300', connection: ['RJ11/RJ12'], status: 'certified', notes: 'Under-counter' }
      ],
      logo: '💵',
      recommended: false
    },
    {
      brand: 'Generic',
      models: [
        { model: 'POS-405', connection: ['RJ11/RJ12'], status: 'compatible', notes: 'Standard 5-bill drawer' },
        { model: 'POS-410', connection: ['RJ11/RJ12', 'USB'], status: 'compatible', notes: 'USB-triggered option' }
      ],
      logo: '🔧',
      recommended: false
    }
  ];

  const weighingScales = [
    {
      brand: 'Essae',
      models: [
        { model: 'DS-215', connection: ['Serial', 'USB'], status: 'certified', notes: 'Platform scale, grocery standard' },
        { model: 'SI-810', connection: ['Serial'], status: 'certified', notes: 'Price computing' },
        { model: 'PB-215', connection: ['Serial', 'USB'], status: 'certified', notes: 'Bench scale' }
      ],
      logo: '⚖️',
      recommended: true
    },
    {
      brand: 'Goldtech',
      models: [
        { model: 'GT-210', connection: ['Serial', 'USB'], status: 'certified', notes: 'Table top' },
        { model: 'GT-810', connection: ['Serial'], status: 'compatible', notes: 'Price computing' }
      ],
      logo: '⚖️',
      recommended: false
    },
    {
      brand: 'Phoenix',
      models: [
        { model: 'PH-2C', connection: ['Serial'], status: 'compatible', notes: 'Basic weighing' }
      ],
      logo: '🔥',
      recommended: false
    }
  ];

  const paymentTerminals = [
    {
      brand: 'Pine Labs',
      models: [
        { model: 'Plutus Smart', connection: ['WiFi', '4G'], status: 'certified', notes: 'Android POS, all cards' },
        { model: 'Qwik', connection: ['Bluetooth'], status: 'certified', notes: 'mPOS, compact' }
      ],
      logo: '💳',
      recommended: true
    },
    {
      brand: 'Paytm',
      models: [
        { model: 'Soundbox', connection: ['4G', 'WiFi'], status: 'certified', notes: 'UPI notification, no integration needed' },
        { model: 'EDC Machine', connection: ['4G'], status: 'certified', notes: 'All-in-one payment' }
      ],
      logo: '📱',
      recommended: true
    },
    {
      brand: 'PhonePe',
      models: [
        { model: 'SmartSpeaker', connection: ['4G', 'WiFi'], status: 'certified', notes: 'UPI confirmation' }
      ],
      logo: '📲',
      recommended: true
    },
    {
      brand: 'Mswipe',
      models: [
        { model: 'WisePOS E', connection: ['WiFi', '4G'], status: 'certified', notes: 'Android smart terminal' },
        { model: 'WisePad 3', connection: ['Bluetooth'], status: 'certified', notes: 'mPOS reader' }
      ],
      logo: '💳',
      recommended: false
    }
  ];

  const displayPoles = [
    {
      brand: 'Posiflex',
      models: [
        { model: 'PD-2608', connection: ['USB'], status: 'certified', notes: '2x20 VFD customer display' },
        { model: 'PD-300', connection: ['Serial'], status: 'compatible', notes: 'LCD pole display' }
      ],
      logo: '🖥️',
      recommended: true
    },
    {
      brand: 'Logic Controls',
      models: [
        { model: 'LD9900', connection: ['USB', 'Serial'], status: 'compatible', notes: 'Standard pole display' }
      ],
      logo: '📺',
      recommended: false
    }
  ];

  // Connected devices (mock data)
  const [connectedDevices, setConnectedDevices] = useState([
    {
      id: 'dev1',
      type: 'printer',
      name: 'TVS RP-3160 Gold',
      connection: 'USB',
      status: 'connected',
      lastUsed: '2 mins ago',
      paperLevel: 75,
      signalStrength: null
    },
    {
      id: 'dev2',
      type: 'scanner',
      name: 'Zebra DS2208',
      connection: 'USB',
      status: 'connected',
      lastUsed: '5 mins ago',
      batteryLevel: null,
      signalStrength: null
    },
    {
      id: 'dev3',
      type: 'drawer',
      name: 'Generic POS-405',
      connection: 'RJ11 (via printer)',
      status: 'connected',
      lastUsed: '10 mins ago'
    },
    {
      id: 'dev4',
      type: 'soundbox',
      name: 'Paytm Soundbox',
      connection: '4G',
      status: 'connected',
      lastUsed: '1 min ago',
      batteryLevel: 85,
      signalStrength: 4
    }
  ]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'certified':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            <CheckCircle size={12} /> Certified
          </span>
        );
      case 'compatible':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
            <AlertTriangle size={12} /> Compatible
          </span>
        );
      case 'unsupported':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">
            <XCircle size={12} /> Not Supported
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
            <HelpCircle size={12} /> Unknown
          </span>
        );
    }
  };

  const getConnectionIcon = (conn) => {
    switch(conn) {
      case 'USB': return <Usb size={14} className="text-blue-600" />;
      case 'Bluetooth': return <Bluetooth size={14} className="text-blue-500" />;
      case 'WiFi': return <Wifi size={14} className="text-green-600" />;
      case '4G': return <Signal size={14} className="text-purple-600" />;
      case 'Serial': return <Cpu size={14} className="text-gray-600" />;
      case 'RJ11/RJ12': return <Box size={14} className="text-orange-600" />;
      default: return <HelpCircle size={14} className="text-gray-400" />;
    }
  };

  const getDeviceTypeIcon = (type) => {
    switch(type) {
      case 'printer': return <Printer size={20} className="text-blue-600" />;
      case 'scanner': return <Barcode size={20} className="text-green-600" />;
      case 'drawer': return <Box size={20} className="text-yellow-600" />;
      case 'scale': return <Scale size={20} className="text-purple-600" />;
      case 'payment': return <CreditCard size={20} className="text-pink-600" />;
      case 'soundbox': return <Volume2 size={20} className="text-orange-600" />;
      case 'display': return <Monitor size={20} className="text-cyan-600" />;
      default: return <Cpu size={20} className="text-gray-600" />;
    }
  };

  const handleTestDevice = async (device) => {
    setTestingDevice(device.id);
    // Simulate test
    await new Promise(resolve => setTimeout(resolve, 2000));
    setTestingDevice(null);
  };

  const handleScanForDevices = async () => {
    setScanningForDevices(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setScanningForDevices(false);
  };

  const tabs = [
    { id: 'connected', label: 'Connected', icon: <Zap size={16} /> },
    { id: 'printers', label: 'Printers', icon: <Printer size={16} /> },
    { id: 'scanners', label: 'Scanners', icon: <Barcode size={16} /> },
    { id: 'drawers', label: 'Cash Drawers', icon: <Box size={16} /> },
    { id: 'scales', label: 'Scales', icon: <Scale size={16} /> },
    { id: 'payments', label: 'Payment', icon: <CreditCard size={16} /> },
    { id: 'displays', label: 'Displays', icon: <Monitor size={16} /> }
  ];

  const getCurrentData = () => {
    switch(activeTab) {
      case 'printers': return printerCompatibility;
      case 'scanners': return barcodeScanners;
      case 'drawers': return cashDrawers;
      case 'scales': return weighingScales;
      case 'payments': return paymentTerminals;
      case 'displays': return displayPoles;
      default: return [];
    }
  };

  const renderConnectedDevices = () => (
    <div className="space-y-4">
      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold">Hardware Status</h3>
            <p className="text-sm text-white/80">{connectedDevices.length} devices connected</p>
          </div>
          <button
            onClick={handleScanForDevices}
            className="px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2"
            disabled={scanningForDevices}
          >
            <RefreshCw size={14} className={scanningForDevices ? 'animate-spin' : ''} />
            {scanningForDevices ? 'Scanning...' : 'Scan for Devices'}
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Printer size={20} className="mx-auto mb-1" />
            <p className="text-xs">1 Printer</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Barcode size={20} className="mx-auto mb-1" />
            <p className="text-xs">1 Scanner</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Box size={20} className="mx-auto mb-1" />
            <p className="text-xs">1 Drawer</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Volume2 size={20} className="mx-auto mb-1" />
            <p className="text-xs">1 Soundbox</p>
          </div>
        </div>
      </div>

      {/* Connected Devices List */}
      <div className="space-y-3">
        {connectedDevices.map(device => (
          <div
            key={device.id}
            className="bg-white rounded-lg border p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  {getDeviceTypeIcon(device.type)}
                </div>
                <div>
                  <h4 className="font-medium">{device.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {getConnectionIcon(device.connection)}
                    <span>{device.connection}</span>
                    <span>•</span>
                    <span>Used {device.lastUsed}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${device.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`text-xs ${device.status === 'connected' ? 'text-green-600' : 'text-red-600'}`}>
                  {device.status === 'connected' ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </div>

            {/* Device Stats */}
            <div className="flex items-center gap-4 mb-3">
              {device.paperLevel !== undefined && (
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${device.paperLevel > 30 ? 'bg-green-500' : device.paperLevel > 10 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${device.paperLevel}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">Paper {device.paperLevel}%</span>
                </div>
              )}
              {device.batteryLevel !== undefined && (
                <div className="flex items-center gap-2">
                  <Battery size={14} className={device.batteryLevel > 20 ? 'text-green-600' : 'text-red-600'} />
                  <span className="text-xs text-gray-500">{device.batteryLevel}%</span>
                </div>
              )}
              {device.signalStrength !== undefined && (
                <div className="flex items-center gap-1">
                  {[1,2,3,4].map(bar => (
                    <div
                      key={bar}
                      className={`w-1 rounded-sm ${bar <= device.signalStrength ? 'bg-green-500' : 'bg-gray-200'}`}
                      style={{ height: `${bar * 4}px` }}
                    ></div>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">Signal</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleTestDevice(device)}
                className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                disabled={testingDevice === device.id}
              >
                {testingDevice === device.id ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    Testing...
                  </>
                ) : (
                  <>
                    <Play size={14} />
                    Test
                  </>
                )}
              </button>
              <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <Settings size={14} />
                Configure
              </button>
              <button className="py-2 px-3 bg-gray-50 text-gray-600 rounded-lg text-sm">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Troubleshooting */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Wrench className="text-yellow-600 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-yellow-800">Common Issues</h4>
            <ul className="text-sm text-yellow-700 mt-2 space-y-1">
              <li>• Printer not printing? Check USB connection and paper</li>
              <li>• Scanner not working? Ensure it's set to USB-HID mode</li>
              <li>• Cash drawer not opening? Check RJ11 connection to printer</li>
              <li>• Soundbox no audio? Check 4G signal and volume</li>
            </ul>
            <button className="mt-3 text-yellow-800 font-medium text-sm flex items-center gap-1">
              View Full Troubleshooting Guide <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompatibilityMatrix = () => {
    const data = getCurrentData();

    return (
      <div className="space-y-4">
        {/* Legend */}
        <div className="bg-white rounded-lg border p-3">
          <h4 className="text-sm font-medium mb-2">Compatibility Status:</h4>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span className="text-sm"><strong>Certified</strong> - Fully tested & supported</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-yellow-600" />
              <span className="text-sm"><strong>Compatible</strong> - Works, limited support</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle size={16} className="text-red-600" />
              <span className="text-sm"><strong>Unsupported</strong> - Won't work</span>
            </div>
          </div>
        </div>

        {/* Brand List */}
        {data.map((brand, idx) => (
          <div key={idx} className="bg-white rounded-lg border overflow-hidden">
            <div className={`p-4 flex items-center justify-between ${brand.recommended ? 'bg-green-50 border-b border-green-100' : 'bg-gray-50 border-b'}`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{brand.logo}</span>
                <div>
                  <h3 className="font-bold">{brand.brand}</h3>
                  <p className="text-sm text-gray-500">{brand.models.length} models supported</p>
                </div>
              </div>
              {brand.recommended && (
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Star size={14} /> Recommended
                </span>
              )}
            </div>
            <div className="divide-y">
              {brand.models.map((model, modelIdx) => (
                <div
                  key={modelIdx}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedDevice({ brand: brand.brand, ...model })}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{model.model}</span>
                      {getStatusBadge(model.status)}
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Connections:</span>
                      {model.connection.map((conn, connIdx) => (
                        <span key={connIdx} className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-xs">
                          {getConnectionIcon(conn)}
                          {conn}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{model.notes}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Download Drivers */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Download className="text-blue-600 mt-0.5" size={20} />
            <div>
              <h4 className="font-medium text-blue-800">Driver Downloads</h4>
              <p className="text-sm text-blue-700 mt-1">
                Some devices require drivers to work with ReZ POS. Download the appropriate driver for your device.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm flex items-center gap-2">
                  <Download size={14} /> All Printer Drivers
                </button>
                <button className="px-3 py-1.5 bg-white text-blue-600 border border-blue-300 rounded-lg text-sm flex items-center gap-2">
                  <Download size={14} /> Scale Drivers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="font-bold text-lg">Hardware Hub</h1>
          <p className="text-xs text-gray-500">Manage & check device compatibility</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b overflow-x-auto">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600 bg-blue-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'connected' ? renderConnectedDevices() : renderCompatibilityMatrix()}
      </div>

      {/* Device Detail Modal */}
      {selectedDevice && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <div>
                <h3 className="font-bold">{selectedDevice.brand} {selectedDevice.model}</h3>
                {getStatusBadge(selectedDevice.status)}
              </div>
              <button
                onClick={() => setSelectedDevice(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Connection Methods */}
              <div>
                <h4 className="font-medium mb-2">Connection Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDevice.connection.map((conn, idx) => (
                    <span key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                      {getConnectionIcon(conn)}
                      <span className="font-medium">{conn}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Setup Instructions */}
              <div>
                <h4 className="font-medium mb-2">Setup Instructions</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>Connect device using {selectedDevice.connection[0]} cable/connection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>Open ReZ POS → Settings → Hardware</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>Click "Scan for Devices" to auto-detect</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span>Select device and run "Test" to verify</span>
                  </li>
                </ol>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Notes</h4>
                <p className="text-sm text-gray-600">{selectedDevice.notes}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Driver
                </button>
                <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  View Manual
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantHardwareHub;
