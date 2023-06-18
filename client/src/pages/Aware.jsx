import React from 'react';
import { FaHeart, FaRainbow } from 'react-icons/fa';

const Aware = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl text-white font-bold italic py-4">LGBTQ+ Awareness</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">What is LGBTQ+?</h2>
          <p className="text-gray-200">
            The LGBTQ+ community encompasses lesbian, gay, bisexual, transgender, and queer individuals, as well as
            other diverse sexual orientations and gender identities. It's important to promote awareness, acceptance,
            and equality for all members of this community.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">LGBTQ+ Rights</h2>
          <p className="text-gray-200">
            LGBTQ+ rights are human rights. Every individual, regardless of their sexual orientation or gender
            identity, deserves equal treatment under the law. It's crucial to advocate for legal protections against
            discrimination and support inclusive policies that promote equality for all.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Supporting LGBTQ+ Youth</h2>
          <p className="text-gray-200">
            LGBTQ+ youth face unique challenges and often require additional support. By creating safe spaces,
            promoting education and understanding, and providing mental health resources, we can help empower and
            uplift LGBTQ+ young people to thrive.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Get Involved</h2>
          <p className="text-gray-200">
            There are many ways to support the LGBTQ+ community. You can participate in pride events, donate to LGBTQ+
            organizations, educate yourself and others, and advocate for LGBTQ+ rights. Together, we can make a
            positive difference.
          </p>
        </section>

        <div className="flex justify-center">
          <FaHeart className="text-red-200 text-6xl mr-4" />
          <FaRainbow className="text-purple-200 text-6xl" />
        </div>
      </main>
    </div>
  );
};

export default Aware;
