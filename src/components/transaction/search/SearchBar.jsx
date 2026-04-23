export default function SearchBar() {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row justify-between gap-4 shadow-xl backdrop-blur-md">
      <input className="input w-full md:w-1/3" placeholder="Search..." />

      <div className="flex gap-4 text-sm">
        <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"><input type="radio" name="search" className="accent-indigo-500" /> Alias</label>
        <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"><input type="radio" name="search" className="accent-indigo-500" defaultChecked /> Description</label>
        <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"><input type="radio" name="search" className="accent-indigo-500" /> A/c #</label>
      </div>
    </div>
  );
}