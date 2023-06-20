import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームの送信処理を実装する場所です
    // ここでAPIリクエストを送信したり、フォームデータを処理したりできます
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-20">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 text-lg border rounded-md resize-none h-32 focus:outline-none focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-3 text-lg font-medium text-white bg-black rounded-md hover:bg-gray-400 focus:outline-none "

      >
        Submit
      </button>
    </form>
  );
};

export default Contact;