export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-[-12%] right-[-4%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute left-[30%] top-[30%] h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute left-[60%] top-[8%] h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute bottom-[20%] left-[10%] h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />
    </div>
  )
}
