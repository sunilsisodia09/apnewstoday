export default function IndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            India
          </p>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            India News
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Get the latest India news, national updates, important events,
            government updates, and trending stories.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Latest India News
              </h2>
              <p className="mt-2 text-gray-600">
                Latest news and updates from across India.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                National Updates
              </h2>
              <p className="mt-2 text-gray-600">
                Important national developments and current affairs.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Trending Stories
              </h2>
              <p className="mt-2 text-gray-600">
                Trending stories from across the country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}