export default function EntryRow() {
  return (
    <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
      <td className="p-1"><input className="cell-input" /></td>
      <td className="p-1"><input className="cell-input" /></td>
      <td className="p-1"><input className="cell-input text-right" /></td>
    </tr>
  );
}