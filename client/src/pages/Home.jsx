
import React, { useEffect, useState } from 'react';
import { Databases, ID } from 'appwrite';
import { client } from '../appwrite';

const Home = () => {

  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  const database = new Databases(client);
  // Fetch previous posts
  useEffect(() => {
    (async () => {
      const dbTweets = await database.listDocuments('events', 'posts');
      setTweets(dbTweets.documents);
      console.log(dbTweets)
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create new post object
    const result = await database.createDocument('events', 'posts', ID.unique(), {
      author: 'me',
      content: newTweet,
      timestamp: new Date().toLocaleString()
    });
    console.log(result);
  };


  return (
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mt-8">Home Feed</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            className="w-full h-20 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="What's happening?"
            value={newTweet}
            onChange={event => setNewTweet(event.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Post
          </button>
        </form>
        {tweets.map(tweet => (
          <div className="bg-white rounded-lg shadow p-4 mt-4" key={tweet.id}>
            <h3 className="text-lg font-bold">{tweet.author}</h3>
            <p className="text-gray-700">{tweet.content}</p>
            <p className="text-gray-500 mt-2">{tweet.timestamp}</p>
          </div>
        ))}
      </div>
  )
}

export default Home
