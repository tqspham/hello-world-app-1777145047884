export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Network</h1>
        <p className="mb-8 text-lg text-gray-600">
          Welcome to the Network section. This page displays network-related
          content and information.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Connections
            </h2>
            <p className="text-gray-600">
              View and manage your network connections and relationships.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Activity
            </h2>
            <p className="text-gray-600">
              Monitor network activity and recent updates from your contacts.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Statistics
            </h2>
            <p className="text-gray-600">
              Review detailed statistics and insights about your network growth.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Recommendations
            </h2>
            <p className="text-gray-600">
              Get personalized suggestions for expanding your network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}