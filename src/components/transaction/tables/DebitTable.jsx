import EntryRow from "./EntryRow";

export default function DebitTable() {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl shadow-xl backdrop-blur-md">
      <h2 className="font-semibold mb-3 text-indigo-400 text-sm tracking-wider uppercase">Dr / Assets / Expenses</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-950/60 text-slate-400">
            <th className="p-2 text-left font-medium">A/c #</th>
            <th className="p-2 text-left font-medium">Memo</th>
            <th className="p-2 text-right font-medium">Amount</th>
          </tr>
        </thead>

        <tbody>
          {[...Array(4)].map((_, i) => (
            <EntryRow key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}