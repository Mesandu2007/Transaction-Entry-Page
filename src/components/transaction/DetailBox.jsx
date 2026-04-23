export default function DetailBox() {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl shadow-xl backdrop-blur-md">
      <textarea
        className="w-full h-full min-h-[120px] bg-slate-950/50 text-slate-200 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-lg p-3 placeholder:text-slate-600 transition-all"
        placeholder="Detail..."
      />
    </div>
  );
}