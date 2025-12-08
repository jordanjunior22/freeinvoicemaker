export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 text-purple-200 max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
      <p>Last Updated: {new Date().getFullYear()}</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Do Not Collect</h2>
      <p>
        Invoice Maker Pro is fully client-side. We do not store or collect any invoice data,
        personal details, financial information, or any content you create. Everything stays inside
        your browser unless you download it.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We May Collect Automatically</h2>
      <p>
        We may collect anonymous technical data such as browser type, device type, and general usage
        statistics. This data cannot identify you.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Cookies & Local Storage</h2>
      <p>
        We do not use tracking cookies. Your invoice data may be temporarily stored in local storage
        on your device only. You may clear it any time.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Services</h2>
      <p>
        We may use analytics tools for anonymous data and PayPal for donations. These providers may
        have their own privacy policies.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. How We Use Anonymous Data</h2>
      <p>
        Anonymous data helps improve performance, detect issues, and understand usage trends.
        Nothing is sold or shared.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Data Security</h2>
      <p>Because we do not store any data, your invoice information never leaves your device.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. External Links</h2>
      <p>
        We may link to PayPal or email services. We are not responsible for external sites’
        privacy policies.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Children's Privacy</h2>
      <p>We do not knowingly collect data from children under 13.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Your Privacy Rights</h2>
      <p>
        You may request access or deletion of data, but we do not store personal information, so
        such requests may not apply.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Changes to This Policy</h2>
      <p>We may update this page as needed. Changes will be reflected in the date above.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Contact</h2>
      <p>
        For questions, contact us at:
        <br />
        <strong>coachcratft.space@gmail.com</strong>
      </p>
    </div>
  );
}
