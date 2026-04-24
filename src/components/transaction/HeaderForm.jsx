export default function HeaderForm() {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-4 shadow-xl backdrop-blur-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input className="input w-full sm:w-auto" placeholder="No" />
        <input type="date" className="input w-full" />
        <input className="input w-full" placeholder="Mimic category" />
        <input className="input w-full" placeholder="Mimic name" />
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-indigo-500 focus:ring-indigo-500/50" />
        Auto post
      </label>
    </div>
  );
}