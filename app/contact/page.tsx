export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Get in touch with AP Today News 24 for news, queries, feedback,
            advertising, and other information.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="mt-2 text-gray-600">
                Contact us through our official email.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold">News & Updates</h2>
              <p className="mt-2 text-gray-600">
                Stay connected with AP Today News 24.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold">Advertise With Us</h2>
              <p className="mt-2 text-gray-600">
                Contact our team for advertising and promotional opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}