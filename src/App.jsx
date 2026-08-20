import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Camera,
  Check,
  ChevronRight,
  Circle,
  Crosshair,
  Gauge,
  House,
  LocateFixed,
  Maximize,
  Menu,
  Navigation,
  Package,
  Pause,
  Plane,
  Radio,
  RotateCcw,
  Satellite,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Wifi,
} from "lucide-react";
import {
  alerts,
  controlData,
  detections,
  headerData,
  locationData,
  menuItems,
  missionSteps,
  payloadData,
  recentActivity,
  telemetryData,
} from "./dummyData";

const iconMap = {
  Dashboard: Gauge,
  Payload: Package,
  "Vehicle Control": Plane,
  "AI Detection": Crosshair,
  Mission: Navigation,
  Logs: Activity,
};

function Card({ title, eyebrow, action, children, className = "" }) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.04)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-sm font-bold text-slate-800">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
function HeaderStat({ icon, label, value }) {
  return (
    <div>
      <p className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {icon}
        {label}
      </p>
      <p className="font-bold text-slate-700">{value}</p>
    </div>
  );
}
function Header() {
  return (
    <header className="flex h-19 items-center justify-between border-b border-slate-200 bg-white px-7">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-600 text-white">
          <ShieldCheck size={23} />
        </div>
        <div>
          <div className="text-lg font-black tracking-tight text-slate-900">
            AERO <span className="text-teal-600">LIFELINE</span>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Universal Rescue Payload
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 text-xs">
        <HeaderStat
          icon={<Wifi size={15} />}
          label="Connected Device"
          value={headerData.device}
        />
        <HeaderStat
          icon={<Package size={15} />}
          label="Payload ID"
          value={headerData.payloadId}
        />
        <HeaderStat
          icon={<Satellite size={15} />}
          label="Satellites"
          value={headerData.satellites}
        />
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Status
          </p>
          <span className="flex items-center gap-1.5 font-bold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {headerData.status}
          </span>
        </div>
        <div className="border-l border-slate-200 pl-7">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Current Time
          </p>
          <p className="font-mono font-bold text-slate-700">
            {headerData.time}
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-100">
          <Circle size={12} fill="currentColor" />
          Emergency Stop
        </button>
      </div>
    </header>
  );
}
function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  return (
    <aside className="flex w-52.5 shrink-0 flex-col border-r border-slate-200 bg-white px-3 py-5">
      <div className="mb-6 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
        Operations
      </div>
      {menuItems.map((item) => {
        const Icon = iconMap[item] || Menu;
        return (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-3 text-left text-xs font-semibold ${active === item ? "bg-teal-50 text-teal-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`}
          >
            <Icon size={17} />
            {item}
            {active === item && <ChevronRight className="ml-auto" size={14} />}
          </button>
        );
      })}
      <div className="mt-auto rounded-lg bg-slate-900 p-4 text-white">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Flight Status
          </span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <p className="text-sm font-bold">Mission Active</p>
        <p className="mt-1 text-[11px] text-slate-400">
          Autonomous flight enabled
        </p>
      </div>
    </aside>
  );
}
function LiveFeed() {
  return (
    <Card
      eyebrow="Live Feed"
      title="Forward Camera"
      action={
        <span className="flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          Live
        </span>
      }
      className="overflow-hidden"
    >
      <div className="relative h-66.25 overflow-hidden bg-slate-800">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,.35) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-24 w-24 place-items-center rounded-full border border-teal-400/50 text-teal-300">
            <Crosshair size={38} strokeWidth={1} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-linear-to-t from-slate-950/90 to-transparent px-5 pb-4 pt-10 text-white">
          <span className="font-mono text-[10px] text-slate-300">
            CAM-01 · 1080P · 30 FPS
          </span>
          <div className="flex gap-3">
            <button title="Pause feed">
              <Pause size={15} />
            </button>
            <button title="Take snapshot">
              <Camera size={15} />
            </button>
            <button title="Fullscreen">
              <Maximize size={15} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
function LocationCard() {
  return (
    <Card
      eyebrow="Navigation"
      title="Location & Target"
      action={
        <button className="text-teal-600" title="Center map">
          <LocateFixed size={16} />
        </button>
      }
    >
      <div className="relative h-66.25 overflow-hidden bg-[#e6f1ee]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(35deg, transparent 48%, #8fbcb1 49%, #8fbcb1 51%, transparent 52%), linear-gradient(125deg, transparent 48%, #acd0c5 49%, #acd0c5 51%, transparent 52%)",
            backgroundSize: "130px 90px",
          }}
        />
        <div className="absolute left-[18%] top-[68%] grid h-7 w-7 place-items-center rounded-full border-4 border-white bg-slate-700 text-white shadow">
          <House size={12} />
        </div>
        <div className="absolute left-[49%] top-[43%] grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-teal-600 text-white shadow">
          <Navigation size={13} fill="currentColor" />
        </div>
        <div className="absolute right-[18%] top-[25%] grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-orange-500 text-white shadow">
          <Target size={13} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-3 bg-white/95 p-4 text-[11px]">
          <div>
            <p className="mb-1 font-semibold text-slate-400">TARGET</p>
            <p className="font-bold text-slate-700">{locationData.target}</p>
            <p className="mt-1 text-slate-500">
              {locationData.distance}{" "}
              <span className="mx-1 text-slate-300">·</span> ETA{" "}
              {locationData.eta}
            </p>
          </div>
          <div className="border-l border-slate-200 pl-4">
            <p className="mb-1 font-semibold text-slate-400">
              CURRENT LOCATION
            </p>
            <p className="font-mono text-[10px] font-bold text-slate-700">
              {locationData.current}
            </p>
            <p className="mt-1 text-slate-500">From {locationData.home}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
function TelemetryPanel() {
  return (
    <Card eyebrow="Systems" title="Payload Telemetry">
      <div className="grid grid-cols-5 divide-x divide-slate-100 p-1">
        {telemetryData.map((item) => (
          <div key={item.label} className="p-4">
            <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-teal-50 text-teal-600">
              <Activity size={15} />
            </div>
            <p className="text-[10px] font-semibold text-slate-400">
              {item.label}
            </p>
            <p className="mt-1 text-lg font-black tracking-tight text-slate-800">
              {item.value}
            </p>
            <p className="mt-1 text-[10px] text-slate-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
function PayloadStatus() {
  return (
    <Card eyebrow="Payload" title="Payload Status">
      <div className="flex items-center gap-4 p-4">
        <div className="grid h-16 w-20 place-items-center rounded-lg bg-slate-100 text-slate-400">
          <Package size={28} strokeWidth={1.4} />
        </div>
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-600">
              {payloadData.status}
            </span>
            <span className="text-[10px] text-slate-400">
              {payloadData.weight}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-[11px]">
            <span className="flex items-center gap-2 text-slate-500">
              <Check size={13} className="text-emerald-500" />
              Release System:{" "}
              <b className="text-slate-700">{payloadData.release}</b>
            </span>
            <span className="flex items-center gap-2 text-slate-500">
              <Check size={13} className="text-emerald-500" />
              Camera: <b className="text-slate-700">{payloadData.camera}</b>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
function VehicleControl() {
  const [speed, setSpeed] = useState(controlData.speed);
  const [altitude, setAltitude] = useState(controlData.altitude);
  return (
    <Card
      eyebrow="Controls"
      title="Vehicle Control"
      action={<SlidersHorizontal size={16} className="text-slate-400" />}
    >
      <div className="grid grid-cols-3 gap-2 p-4">
        {controlData.actions.map((action, index) => (
          <button
            key={action}
            className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-[10px] font-bold ${index === 0 ? "border-teal-600 bg-teal-600 text-white hover:bg-teal-700" : "border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600"}`}
          >
            {index === 0 ? (
              <ArrowUpRight size={13} />
            ) : index === 1 ? (
              <Navigation size={13} />
            ) : index === 2 ? (
              <Pause size={13} />
            ) : (
              <RotateCcw size={13} />
            )}
            {action}
          </button>
        ))}
      </div>
      <div className="space-y-4 border-t border-slate-100 px-4 pb-4 pt-3">
        <Range label="Speed" value={speed} unit="%" onChange={setSpeed} />
        <Range
          label="Altitude"
          value={altitude}
          unit="m"
          onChange={setAltitude}
        />
      </div>
    </Card>
  );
}
function Range({ label, value, unit, onChange }) {
  return (
    <label className="block text-[11px] font-semibold text-slate-500">
      <span className="mb-2 flex justify-between">
        {label}
        <b className="text-slate-700">
          {value}
          {unit}
        </b>
      </span>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-1.5 w-full cursor-pointer accent-teal-600"
      />
    </label>
  );
}
function AIDetection() {
  return (
    <Card
      eyebrow="Computer Vision"
      title="AI Detection"
      action={
        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Scanning
        </span>
      }
    >
      <div className="divide-y divide-slate-100 px-4">
        {detections.map((item) => (
          <div key={item.label} className="flex items-center gap-3 py-3">
            <div className="h-2 w-2 rounded-full bg-teal-500" />
            <span className="flex-1 text-xs font-semibold text-slate-700">
              {item.label}
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
              {item.count}
            </span>
            <span className="w-10 text-right text-[10px] text-slate-400">
              {item.confidence}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
function MissionProgress() {
  return (
    <Card eyebrow="Mission 07" title="Mission Progress">
      <div className="px-5 py-4">
        {missionSteps.map((step, index) => (
          <div key={step.label} className="relative flex gap-3 pb-4 last:pb-0">
            <div
              className={`relative z-10 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-white shadow-sm ${step.state === "complete" ? "bg-teal-600 text-white" : step.state === "current" ? "bg-teal-100" : "bg-slate-200"}`}
            >
              {step.state === "complete" ? (
                <Check size={11} />
              ) : step.state === "current" ? (
                <span className="h-2 w-2 rounded-full bg-teal-600" />
              ) : null}
            </div>
            {index < missionSteps.length - 1 && (
              <div className="absolute left-2.25 top-5 h-full w-px bg-slate-200" />
            )}
            <div className="flex flex-1 justify-between text-xs">
              <span
                className={
                  step.state === "upcoming"
                    ? "text-slate-400"
                    : "font-semibold text-slate-700"
                }
              >
                {step.label}
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                {step.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
function Alerts() {
  return (
    <Card
      eyebrow="Attention Required"
      title="Alerts"
      action={<Bell size={16} className="text-orange-500" />}
    >
      <div className="space-y-2 p-4">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className={`flex gap-3 rounded-lg p-3 ${alert.tone === "critical" ? "bg-red-50" : "bg-orange-50"}`}
          >
            <AlertTriangle
              size={16}
              className={
                alert.tone === "critical"
                  ? "shrink-0 text-red-500"
                  : "shrink-0 text-orange-500"
              }
            />
            <div className="flex-1">
              <p className="text-xs font-bold text-slate-700">{alert.title}</p>
              <p className="mt-1 text-[10px] text-slate-500">{alert.detail}</p>
            </div>
            <span className="text-[9px] text-slate-400">{alert.time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
function RecentActivity() {
  return (
    <Card
      eyebrow="System Log"
      title="Recent Activity"
      action={
        <button className="text-[10px] font-bold text-teal-600">
          View all
        </button>
      }
    >
      <div className="divide-y divide-slate-100 px-5">
        {recentActivity.map((item) => (
          <div key={item.time} className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="flex-1 text-xs text-slate-600">{item.event}</span>
            <span className="font-mono text-[10px] text-slate-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-700">
      <Header />
      <div className="flex min-h-[calc(100vh-76px)]">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600">
                Mission Control / Overview
              </p>
              <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <Radio size={14} className="text-teal-600" />
              All systems operational
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <LiveFeed />
            <LocationCard />
            <div className="col-span-2">
              <TelemetryPanel />
            </div>
            <PayloadStatus />
            <VehicleControl />
            <AIDetection />
            <MissionProgress />
            <Alerts />
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
