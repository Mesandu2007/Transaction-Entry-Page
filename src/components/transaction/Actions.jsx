export default function Actions() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        <button className="btn flex-1 sm:flex-none">Change</button>
        <button className="btn flex-1 sm:flex-none">Clear</button>
        <button className="btn flex-1 sm:flex-none">Remove</button>
        <button className="btn flex-1 sm:flex-none">Reverse</button>
        <button className="btn flex-1 sm:flex-none">View</button>
      </div>

      <div className="flex gap-2">
        <button className="btn flex-1 sm:flex-none bg-green-500 hover:bg-green-600">OK</button>
        <button className="btn flex-1 sm:flex-none bg-red-500 hover:bg-red-600">Cancel</button>
      </div>
    </div>
  );
}