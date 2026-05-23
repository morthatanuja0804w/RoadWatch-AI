function HomePage() {
  const user = JSON.parse(localStorage.getItem("roadwatch_user"));

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Hi {user?.name} 👋</h1>

      <div className="bg-gray-900 p-6 rounded-3xl max-w-xl">
        <p className="text-xl mb-6">Welcome to RoadWatch AI.</p>

        <p className="text-gray-400 mb-8">How can I help you today?</p>

        <div className="flex flex-col gap-4">
          <button className="bg-blue-600 p-4 rounded-2xl text-left font-semibold">
            🚧 Raise Complaint
          </button>

          <button className="bg-gray-800 p-4 rounded-2xl text-left font-semibold">
            📍 Check Complaint Status
          </button>

          <button className="bg-gray-800 p-4 rounded-2xl text-left font-semibold">
            🔔 Nearby Alerts
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
