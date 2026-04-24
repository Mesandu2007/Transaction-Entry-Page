export default function DifferenceBar() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 py-4 px-4 bg-slate-900/20 rounded-2xl border border-slate-800/40">
      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Difference</span>
      <input
        className="input w-full sm:w-48 text-center text-2xl font-mono text-indigo-400 bg-transparent border-none shadow-none focus:ring-0"
        value="0.00"
        readOnly
      />
      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Difference</span>
    </div>
  );
}