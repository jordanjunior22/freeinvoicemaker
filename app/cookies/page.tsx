export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-purple-200 max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
      <p>Last Updated: {new Date().getFullYear()}</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What Are Cookies?</h2>
      <p>
        Cookies are small files stored on your device by your browser. They help websites function
        properly or analyze performance.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Cookies We Use</h2>
      <p>
        Invoice Maker Pro uses only essential cookies required for basic functionality. These do not
        collect personal information.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. What We Do Not Use</h2>
      <p>
        We do not use advertising cookies, tracking cookies, or cookies that store personal or
        invoice-related information.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Local Storage</h2>
      <p>
        Our invoice generator relies on Local Storage stored on your device. It never leaves your
        browser and can be cleared anytime through browser settings.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Third-Party Cookies</h2>
      <p>
        Some third-party services such as analytics providers or PayPal may set cookies independently
        to operate their services. These are subject to their own policies.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. How to Control Cookies</h2>
      <p>
        You can block, delete, or manage cookies through your browser settings. You may also clear
        Local Storage at any time.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy periodically. Changes will be reflected in the date above.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact</h2>
      <p>
        For questions, contact us at:
        <br />
        <strong>coachcratft.space@gmail.com</strong>
      </p>
    </div>
  );
}
