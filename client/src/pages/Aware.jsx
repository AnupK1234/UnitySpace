import React, { useEffect, useState } from 'react';

const Aware  = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-indigo-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-white font-semibold">LGBTQ+ Awareness</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is LGBTQ+?</h2>
          <p className="text-gray-800">
            The LGBTQ+ community encompasses lesbian, gay, bisexual, transgender, and queer individuals, as well as
            other diverse sexual orientations and gender identities. It's important to promote awareness, acceptance,
            and equality for all members of this community.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">LGBTQ+ Rights</h2>
          <p className="text-gray-800">
            LGBTQ+ rights are human rights. Every individual, regardless of their sexual orientation or gender
            identity, deserves equal treatment under the law. It's crucial to advocate for legal protections against
            discrimination and support inclusive policies that promote equality for all.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supporting LGBTQ+ Youth</h2>
          <p className="text-gray-800">
            LGBTQ+ youth face unique challenges and often require additional support. By creating safe spaces,
            promoting education and understanding, and providing mental health resources, we can help empower and
            uplift LGBTQ+ young people to thrive.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="text-gray-800">
            There are many ways to support the LGBTQ+ community. You can participate in pride events, donate to LGBTQ+
            organizations, educate yourself and others, and advocate for LGBTQ+ rights. Together, we can make a
            positive difference.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Aware;
