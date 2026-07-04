function DashboardCard({ title, value }) {
  return (
    <div className="bg-slate-900 border border-yellow-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <h1 className="text-yellow-500 text-3xl font-bold mt-2">
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;