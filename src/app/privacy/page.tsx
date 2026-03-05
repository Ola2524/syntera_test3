import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-3xl w-full">
        {/* Privacy Section */}
        <div className="space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Privacy{" "}
            <span className="text-emerald-600">Policy</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read this privacy policy carefully to understand how we collect, use, and protect your personal information.
          </p>

          {/* Privacy Content */}
          <div className="text-left bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Information We Collect</h2>
                <p className="text-slate-600 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  fill out a form, or communicate with us. This may include your name, email address, phone 
                  number, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">2. How We Use Your Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  to communicate with you, to process transactions, and to send you updates and promotional 
                  materials. We may also use your information to detect, prevent, and address technical issues.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Information Sharing</h2>
                <p className="text-slate-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties 
                  except when necessary to provide our services, comply with the law, or protect our rights. 
                  We may share information with trusted third-party service providers who assist us in operating 
                  our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure, and we cannot guarantee absolute 
                  security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Your Rights</h2>
                <p className="text-slate-600 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also 
                  have the right to restrict or object to certain processing of your data. To exercise these 
                  rights, please contact us using the information provided on our contact page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Changes to This Policy</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the effective date. Your continued 
                  use of our services after any changes indicates your acceptance of the updated policy.
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

