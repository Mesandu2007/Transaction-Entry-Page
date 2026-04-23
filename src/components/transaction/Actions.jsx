export default function Actions() {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <div className="flex gap-2">
        <button className="btn">Change</button>
        <button className="btn">Clear</button>
        <button className="btn">Remove</button>
        <button className="btn">Reverse</button>
        <button className="btn">View</button>
      </div>

      <div className="flex gap-2">
        <button className="btn bg-green-500 hover:bg-green-600">OK</button>
        <button className="btn bg-red-500 hover:bg-red-600">Cancel</button>
      </div>
    </div>
  );
}