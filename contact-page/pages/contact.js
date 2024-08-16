import { redirect } from 'next/dist/server/api-utils';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {

        alert("Everything's fine")
        res.redirect('/contacts');

    } else {
        alert("Maybe an error")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
}
