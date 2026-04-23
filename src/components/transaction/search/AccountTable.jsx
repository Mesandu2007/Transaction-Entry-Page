import accounts from "../../../data/accounts";

export default function AccountTable() {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl shadow-xl backdrop-blur-md">
      <table className="w-full text-sm">
        <thead className="rounded-t-lg">
          <tr className="bg-slate-950/60 text-slate-400">
            <th className="p-2 text-left font-medium">Alias</th>
            <th className="p-2 text-left font-medium">Description</th>
            <th className="p-2 text-left font-medium">A/c #</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((acc, i) => (
            <tr key={i} className="border-b border-slate-800/50 text-slate-300 hover:bg-slate-800/30 transition-colors duration-200">
              <td className="p-2">{acc.alias}</td>
              <td className="p-2">{acc.desc}</td>
              <td className="p-2">{acc.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}