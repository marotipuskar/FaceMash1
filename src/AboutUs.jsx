import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        Welcome to Facemash, your number one source for connecting people through innovative platforms. We're dedicated to providing you the best service, with a focus on dependability, customer service, and uniqueness.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-4">
        Our mission is to empower people to connect and share information more effectively, and to make the world more open and connected.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
      <p className="mb-4">
        Facemash was founded in 2024 by a passionate team who saw the potential for a more connected world. What started as a small project has grown into a thriving platform used by millions.
      </p>
      <p className="mt-8">
        If you have any questions or comments, please don't hesitate to contact us at <a href="mailto:adinath@gmail.com" className="text-teal-500 hover:underline">adinath@gmail.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
