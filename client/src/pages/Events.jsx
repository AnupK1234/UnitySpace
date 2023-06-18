import React, { useState, useEffect } from 'react';
import { Databases, Query } from 'appwrite';
import { client } from '../appwrite';

function getDate(event) {
  const date = new Date(event.startDate);
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}
const Events = () => {
  const database = new Databases(client);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const dbEvents = await database.listDocuments('events', 'events', [Query.limit(12), Query.offset(0)]);
      console.log(dbEvents);
      setEvents(dbEvents.documents);
    })();
  }, [])

  const handleRegistration = (eventName) => {
    alert(`Registered for ${eventName}`);
    // Perform registration logic here
  };

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-300">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-white mt-8">LGBTQ Events</h1>

        <h2 className="text-2xl font-bold text-white mt-8">Upcoming Events</h2>
        {
          events.map(event => (
            <div className="event bg-white rounded-lg shadow-lg p-4 mt-4" key={event.$id}>
              <h3 className="event-name text-xl font-bold mb-2 text-cyan-600">{event.name}</h3>
              <p className="event-time text-gray-600">Date and Time: {getDate(event)}</p>
              <p className="event-location text-gray-600">Location: {event.location}</p>
              <button className="btn-register bg-cyan-600 text-white px-4 py-2 rounded mt-2" onClick={() => handleRegistration(event.name)}>Register</button>
            </div>
          ))
        }

        {/* <div className="event bg-white rounded-lg shadow-lg p-4 mt-4">
          <h3 className="event-name text-xl font-bold mb-2 text-cyan-600">Pride Parade</h3>
          <p className="event-time text-gray-600">Date and Time: June 30, 2023, 12:00 PM</p>
          <p className="event-location text-gray-600">Location: Central Park, New York City</p>
          <button className="btn-register bg-cyan-600 text-white px-4 py-2 rounded mt-2" onClick={() => handleRegistration('Pride Parade')}>Register</button>
        </div>

        <div className="event bg-white rounded-lg shadow-lg p-4 mt-4">
          <h3 className="event-name text-xl font-bold mb-2 text-cyan-600">LGBTQ Film Festival</h3>
          <p className="event-time text-gray-600">Date and Time: July 15-17, 2023</p>
          <p className="event-location text-gray-600">Location: ABC Theater, San Francisco</p>
          <button className="btn-register bg-cyan-600 text-white px-4 py-2 rounded mt-2" onClick={() => handleRegistration('LGBTQ Film Festival')}>Register</button>
        </div>

        <div className="event bg-white rounded-lg shadow-lg p-4 mt-4">
          <h3 className="event-name text-xl font-bold mb-2 text-cyan-600">Drag Brunch</h3>
          <p className="event-time text-gray-600">Date and Time: August 5, 2023, 11:00 AM</p>
          <p className="event-location text-gray-600">Location: The Rainbow Cafe, Miami</p>
          <button className="btn-register bg-cyan-600 text-white px-4 py-2 rounded mt-2" onClick={() => handleRegistration('Drag Brunch')}>Register</button>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
