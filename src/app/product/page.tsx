import Link from "next/link";

export default function Product() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl w-full">
        {/* Product Section */}
        <div className="space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Our{" "}
            <span className="text-emerald-600">Product</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the powerful features that make Syntera the leading choice
            for HR teams worldwide. Built for modern organizations.
          </p>

          <p className="text-base text-slate-500 max-w-xl mx-auto">
            From employee onboarding to performance analytics, our comprehensive
            platform provides everything you need to manage your workforce effectively.
          </p>

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

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900">Employee Records</h3>
            <p className="text-sm text-slate-500 mt-1">
              Centralized employee data management
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900">Analytics Dashboard</h3>
            <p className="text-sm text-slate-500 mt-1">
              Real-time insights and reporting
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900">Time Tracking</h3>
            <p className="text-sm text-slate-500 mt-1">
              Attendance and leave management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

