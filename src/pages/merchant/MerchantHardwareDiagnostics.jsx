import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Printer, Scan, Monitor, Wifi, Bluetooth,
  CheckCircle, XCircle, AlertTriangle, RefreshCw, Settings,
  HelpCircle, Play, Pause, Volume2, Zap, Cable, Box,
  Smartphone, CreditCard, QrCode, DollarSign, Loader2
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantHardwareDiagnostics = () => {
  const navigate = useNavigate();
  const [activeTest, setActiveTest] = useState(null);

  const [devices, setDevices] = useState([
    {
      id: 'printer1',
      type: 'printer',
      name: 'EPSON TM-T82II',
      connection: 'usb',
      status: 'connected',
      lastTest: '2 mins ago',
      icon: Printer
    },
    {
      id: 'printer2',
      type: 'printer',
      name: 'Bluetooth Printer',
      connection: 'bluetooth',
      status: 'disconnected',
      lastTest: '1 hour ago',
      icon: Printer
    },
    {
      id: 'scanner1',
      type: 'scanner',
      name: 'Honeywell Barcode',
      connection: 'usb',
      status: 'connected',
      lastTest: '5 mins ago',
      icon: Scan
    },
    {
      id: 'drawer1',
      type: 'drawer',
      name: 'Cash Drawer',
      connection: 'printer',
      status: 'connected',
      lastTest: '10 mins ago',
      icon: DollarSign
    },
    {
      id: 'display1',
      type: 'display',
      name: 'Customer Display',
      connection: 'usb',
      status: 'warning',
      lastTest: '30 mins ago',
      issue: 'Slow response',
      icon: Monitor
    }
  ]);

  const [certifiedHardware] = useState([
    { category: 'Thermal Printers', brands: ['EPSON TM-T82', 'EPSON TM-T88', 'Star TSP100', 'Bixolon SRP-350'], recommended: 'EPSON TM-T82II' },
    { category: 'Bluetooth Printers', brands: ['Epson TM-P80', 'Star SM-L200', 'Rongta RPP300'], recommended: 'Epson TM-P80' },
    { category: 'Barcode Scanners', brands: ['Honeywell 1900', 'Zebra DS2208', 'Datalogic QW2100'], recommended: 'Honeywell 1900' },
    { category: 'Cash Drawers', brands: ['APG Vasario', 'MMF Val-u Line', 'Star CD3-1616'], recommended: 'APG Vasario' },
    { category: 'Weighing Scales', brands: ['CAS SW-1W', 'Essae DS-215', 'Phoenix PB-6001'], recommended: 'CAS SW-1W' }
  ]);

  const [testResults, setTestResults] = useState({});

  const runTest = (deviceId, testType) => {
    setActiveTest({ deviceId, testType });

    // Simulate test
    setTimeout(() => {
      setTestResults(prev => ({
        ...prev,
        [deviceId]: {
          ...prev[deviceId],
          [testType]: { success: true, message: 'Test passed successfully' }
        }
      }));
      setActiveTest(null);
    }, 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'text-green-400 bg-green-500/20';
      case 'disconnected': return 'text-red-400 bg-red-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected': return CheckCircle;
      case 'disconnected': return XCircle;
      case 'warning': return AlertTriangle;
      default: return HelpCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/merchant')} className="p-2 hover:bg-gray-700 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">Hardware Diagnostics</h1>
              <p className="text-xs text-gray-400">Test & troubleshoot devices</p>
            </div>
          </div>
          <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500">
            <RefreshCw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Quick Status */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-xl font-bold text-white">{devices.filter(d => d.status === 'connected').length}</p>
            <p className="text-xs text-gray-400">Connected</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-xl font-bold text-white">{devices.filter(d => d.status === 'warning').length}</p>
            <p className="text-xs text-gray-400">Issues</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-xl font-bold text-white">{devices.filter(d => d.status === 'disconnected').length}</p>
            <p className="text-xs text-gray-400">Offline</p>
          </div>
        </div>

        {/* Connected Devices */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold text-white">Connected Devices</h3>
          </div>
          <div className="divide-y divide-gray-700">
            {devices.map(device => {
              const StatusIcon = getStatusIcon(device.status);
              const DeviceIcon = device.icon;

              return (
                <div key={device.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getStatusColor(device.status)}`}>
                        <DeviceIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{device.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(device.status)}`}>
                            {device.status}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            {device.connection === 'bluetooth' ? <Bluetooth className="w-3 h-3" /> : <Cable className="w-3 h-3" />}
                            {device.connection}
                          </span>
                        </div>
                        {device.issue && (
                          <p className="text-xs text-yellow-400 mt-1">{device.issue}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Tested {device.lastTest}</span>
                  </div>

                  {/* Test Buttons */}
                  <div className="flex gap-2">
                    {device.type === 'printer' && (
                      <>
                        <button
                          onClick={() => runTest(device.id, 'print')}
                          disabled={activeTest?.deviceId === device.id}
                          className="flex-1 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
                        >
                          {activeTest?.deviceId === device.id && activeTest?.testType === 'print' ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Printer className="w-4 h-4" />
                          )}
                          Test Print
                        </button>
                        <button
                          onClick={() => runTest(device.id, 'drawer')}
                          disabled={activeTest?.deviceId === device.id}
                          className="flex-1 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
                        >
                          {activeTest?.deviceId === device.id && activeTest?.testType === 'drawer' ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Box className="w-4 h-4" />
                          )}
                          Open Drawer
                        </button>
                      </>
                    )}
                    {device.type === 'scanner' && (
                      <button
                        onClick={() => runTest(device.id, 'scan')}
                        disabled={activeTest?.deviceId === device.id}
                        className="flex-1 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
                      >
                        {activeTest?.deviceId === device.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Scan className="w-4 h-4" />
                        )}
                        Test Scan
                      </button>
                    )}
                    {device.type === 'display' && (
                      <button
                        onClick={() => runTest(device.id, 'display')}
                        disabled={activeTest?.deviceId === device.id}
                        className="flex-1 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
                      >
                        {activeTest?.deviceId === device.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Monitor className="w-4 h-4" />
                        )}
                        Test Display
                      </button>
                    )}
                    {device.type === 'drawer' && (
                      <button
                        onClick={() => runTest(device.id, 'open')}
                        disabled={activeTest?.deviceId === device.id}
                        className="flex-1 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
                      >
                        {activeTest?.deviceId === device.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Box className="w-4 h-4" />
                        )}
                        Open Drawer
                      </button>
                    )}
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Test Result */}
                  {testResults[device.id] && Object.keys(testResults[device.id]).length > 0 && (
                    <div className="mt-3 p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Last test passed successfully
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Add New Device */}
        <button className="w-full p-4 bg-gray-800 border border-dashed border-gray-600 rounded-xl hover:border-blue-500 transition-colors flex items-center justify-center gap-2 text-gray-400 hover:text-blue-400">
          <Zap className="w-5 h-5" />
          <span>Add New Device</span>
        </button>

        {/* Troubleshooting */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold text-white">Common Issues & Fixes</h3>
          </div>
          <div className="divide-y divide-gray-700">
            {[
              { issue: 'Printer not printing', fix: 'Check power, USB connection, and paper roll' },
              { issue: 'Bluetooth disconnecting', fix: 'Keep device within 5m, remove other paired devices' },
              { issue: 'Cash drawer not opening', fix: 'Check printer connection (drawer uses printer port)' },
              { issue: 'Barcode not scanning', fix: 'Clean scanner lens, check barcode quality' },
              { issue: 'Slow printing', fix: 'Reduce print quality, use shorter receipt format' }
            ].map((item, idx) => (
              <div key={idx} className="p-4">
                <p className="text-white text-sm font-medium">{item.issue}</p>
                <p className="text-gray-400 text-sm mt-1">{item.fix}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certified Hardware */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-white">Certified Hardware</h3>
            </div>
            <p className="text-sm text-gray-400 mt-1">Tested and guaranteed to work with ReZ POS</p>
          </div>
          <div className="divide-y divide-gray-700">
            {certifiedHardware.map((category, idx) => (
              <div key={idx} className="p-4">
                <p className="text-white font-medium mb-2">{category.category}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {category.brands.map((brand, bidx) => (
                    <span key={bidx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      {brand}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-green-400">Recommended: {category.recommended}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Need Help */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Hardware Support</h3>
              <p className="text-sm text-gray-400 mt-1">
                Our team can help you setup and troubleshoot hardware. We even provide certified hardware on rent.
              </p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500">
                Contact Hardware Support
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />
    </div>
  );
};

export default MerchantHardwareDiagnostics;
