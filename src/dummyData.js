export const headerData = {
  device: 'Drone AL-07',
  payloadId: 'PL-2048-X',
  satellites: '29 / 31',
  status: 'Connected',
  time: '14:32:08 UTC',
}

export const menuItems = ['Dashboard', 'Payload', 'Vehicle Control', 'AI Detection', 'Mission', 'Logs', 'Settings']
export const locationData = { home: 'Base Camp', current: '34.0522° N, 118.2437° W', target: 'Sector 04 - North Ridge', distance: '2.4 km', eta: '08:42' }
export const telemetryData = [
  { label: 'Battery', value: '78%', detail: '4h 12m remaining' },
  { label: 'Temperature', value: '24.6°C', detail: 'Optimal range' },
  { label: 'Signal Strength', value: '92%', detail: 'Excellent' },
  { label: 'Connected Satellites', value: '29 / 31', detail: 'Strong lock' },
  { label: 'Payload Status', value: 'READY', detail: 'Release system armed' },
]
export const payloadData = { status: 'READY', release: 'OK', camera: 'OK', weight: '4.8 kg' }
export const controlData = { actions: ['Take Off', 'Land', 'Hover', 'Return to Base', 'Hold Position', 'Auto Map'], speed: 68, altitude: 42 }
export const detections = [
  { label: 'Person', count: 2, confidence: '98%' },
  { label: 'Life Jacket', count: 1, confidence: '94%' },
  { label: 'Vehicle', count: 1, confidence: '87%' },
  { label: 'Debris', count: 3, confidence: '81%' },
]
export const missionSteps = [
  { label: 'Mission Started', time: '14:05', state: 'complete' },
  { label: 'Target Located', time: '14:18', state: 'complete' },
  { label: 'En Route', time: '14:24', state: 'current' },
  { label: 'At Target', time: '--:--', state: 'upcoming' },
  { label: 'Payload Delivered', time: '--:--', state: 'upcoming' },
]
export const alerts = [
  { title: 'Survivor Detected', detail: '2 people identified in Sector 04', time: '2 min ago', tone: 'critical' },
  { title: 'Low Battery', detail: 'Return threshold at 25%', time: '18 min ago', tone: 'warning' },
]
export const recentActivity = [
  { event: 'Target coordinates updated', time: '14:28:41' },
  { event: 'AI detection: Person identified', time: '14:26:18' },
  { event: 'Payload system check complete', time: '14:22:05' },
  { event: 'Mission waypoint reached', time: '14:18:33' },
]
