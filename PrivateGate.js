// components/PrivateGate.js
'use client'; 
import React, { useState } from 'react';

// 1. **THE SECRET CODE:** CHANGE THIS TO THE CODE YOU WANT TO USE
const SHARED_SECRET = "mybestfriends"; 

export default function PrivateGate() {
  const [isAccessGranted, setAccessGranted] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState('');

  // 2. This function runs when the user clicks 'Enter'
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if the input code matches the secret code
    if (inputCode === SHARED_SECRET) {
      sessionStorage.setItem('access_granted', 'true'); 
      setAccessGranted(true);
    } else {
      setError('❌ Incorrect Code. Access denied.');
      setInputCode('');
    }
  };

  // 3. If access is granted (or was granted previously), show the private content
  if (isAccessGranted || (typeof window !== 'undefined' && sessionStorage.getItem('access_granted') === 'true')) {
    return (
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Welcome, Secret Friend! 🤫</h1>
        <p>This is the exclusive content only visible after entering the code.</p>
        
        {/* PUT YOUR PRIVATE TEXT/IMAGES/CONTENT HERE */}
      
      </main>
    );
  }

  // 4. If access is NOT granted, show the access form
  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Access Restricted</h2>
      <p>Please enter the secret code to proceed.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="yusufisbald"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="Enter secret code"
          required
          style={{ padding: '10px', marginRight: '10px', width: '60%' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Enter</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}