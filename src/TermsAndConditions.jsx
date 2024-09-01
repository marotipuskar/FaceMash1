import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our website.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
      <p className="mb-4">
        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others, restrict or inhibit their use of the website.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, logos, and software, is the property of our website and is protected by intellectual property laws.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any damages arising from the use or inability to use this website or the materials on it, even if we have been advised of the possibility of such damages.
      </p>
      <p className="mt-8">
        If you have any questions about these terms and conditions, please contact us at <a href="mailto:adinath@gmail.com" className="text-teal-500 hover:underline">adinath@gmail.com</a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
