import React from 'react';
import './News.css';


const News = () => {
  return (
      <div>
      <h1>News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card border border-gray-800" key="1">
          <h2 className="text-xl font-bold mb-2">LGBT Foundation unveils an ambitious new direction and five-year plan to empower LGBTQ+ communities across the country</h2>
          <p className="mb-2">LGBT Foundation, a national charity based in Manchester dedicated to LGBTQ+ health and wellbeing, embarks on an exciting new chapter in its mission to empower LGBTQ+ people and communities to realise their full potential, every day.

Since its beginnings in 1975 as the Manchester Lesbian and Gay Switchboard, LGBT Foundation has evolved to become a major provider of health and wellbeing support services, information, education, and advocacy for LGBTQ+ communities. Today, LGBT Foundation unveils a new visual identity and revitalised mission, vision, and values reflecting its commitment to celebrating togetherness, promoting inclusivity and valuing queer hope and joy.</p>
          <a href="" className="text-blue-500">Read more</a>
        </div>
        <div className="card border border-gray-800" key="2">
          <h2 className="text-xl font-bold mb-2">Volunteers Week </h2>
          <p className="mb-2">It’s Volunteers Week, which means it’s my favourite week of the year! One of the questions that I get asked “well, where can I start with volunteering, what’s in it for me?” To which I say, take a seat! Let me walk you through all the brilliant ways volunteering can benefit you, your wellbeing as well as benefiting our wider communities.</p>
          <a href="" className="text-blue-500">Read more</a>
        </div>
        <div className="card border border-gray-800" key="3">
          <h2 className="text-xl font-bold mb-2">LGBT Foundation launches dedicated support services for LGBTQ+ victims and survivors of sexual violence and abuse</h2>
          <p className="mb-2">LGBT Foundation launches dedicated support services for LGBTQ+ victims and survivors of sexual violence and abuse.
This new LGBTQ+ ISVA service, created for and by LGBTQ+ people, meets the specific needs of LGBTQ+ people of all identities.</p>
          <a href="" className="text-blue-500">Read more</a>
        </div>
        <div className="card border border-gray-800" key="4">
          <h2 className="text-xl font-bold mb-2">Volunteering Awards</h2>
          <p className="mb-2">It’s no exaggeration to say that, without volunteers, the LGBT Foundation would be unable to deliver vital services and support to as many people as we do. James Harris gives a round-up of last Friday’s LGBT Foundation Awards and the worthy recipients.</p>
          <a href="" className="text-blue-500">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default News;
