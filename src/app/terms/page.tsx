import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-3xl w-full">
        {/* Terms Section */}
        <div className="space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Terms &{" "}
            <span className="text-emerald-600">Conditions</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using the Syntera platform.
          </p>

          {/* Terms Content */}
          <div className="text-left bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Acceptance of Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing and using Syntera, you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to abide by these terms, please
                  do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Use License</h2>
                <p className="text-slate-600 leading-relaxed">
                  Permission is granted to temporarily access the materials on Syntera&apos;s website for
                  personal, non-commercial use only. This is the grant of a license, not a transfer of
                  title.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Disclaimer</h2>
                <p className="text-slate-600 leading-relaxed">
                  The materials on Syntera are provided on an &quot;as is&quot; basis. Syntera makes no
                  warranties, expressed or implied, and hereby disclaims all other warranties
                  including, without limitation, implied warranties of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual property.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Limitations</h2>
                <p className="text-slate-600 leading-relaxed">
                  In no event shall Syntera or its suppliers be liable for any damages arising out of
                  the use or inability to use the materials on Syntera, even if Syntera or an
                  authorized representative has been notified orally or in writing of the possibility
                  of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Revisions</h2>
                <p className="text-slate-600 leading-relaxed">
                  Syntera may revise these terms of service at any time without notice. By using this
                  website, you are agreeing to be bound by the then current version of these terms
                  and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Governing Law</h2>
                <p className="text-slate-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that
                  location.
                </p>
              </section>
            </div>
          </div>

          {/* Back Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-emerald-600 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

