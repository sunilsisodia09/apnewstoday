export default function EntertainmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Entertainment
            </p>

            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Entertainment News
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Get the latest entertainment news, Bollywood updates,
              celebrities, movies, music, and trending stories.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Latest Updates
              </h2>
              <p className="mt-2 text-gray-600">
                Latest entertainment stories and updates.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Bollywood
              </h2>
              <p className="mt-2 text-gray-600">
                Bollywood movies, actors, actresses, and celebrity news.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Trending
              </h2>
              <p className="mt-2 text-gray-600">
                Discover the latest trending entertainment stories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}