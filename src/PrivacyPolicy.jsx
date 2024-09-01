import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This privacy policy explains what personal data we collect, how we use it, and your rights regarding your data.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p className="mb-4">
        We collect information to provide better services to our users. This includes your name, email address, and any other information you provide.
      </p>
      <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
      <p className="mb-4">
        We use the information we collect to provide, maintain, and improve our services, as well as to protect our users and provide personalized content.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal information at any time. Contact us for assistance with these requests.
      </p>
      <p className="mt-8">
        If you have any questions about this privacy policy, please contact us at <a href="mailto:adinath@gmail.com" className="text-teal-500 hover:underline">adinath@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
