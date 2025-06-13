import React, { useState } from 'react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this URL with your backend or newsletter API endpoint
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Try again!');
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed.');
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#0e0e0e] to-[#1c1c1c] text-white p-10 rounded-2xl shadow-xl max-w-3xl mx-auto mt-20">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Free AI Automation Playbook 📘
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Learn how to automate tasks, save hours, and scale your business with AI.
          Grab our step-by-step PDF guide – absolutely free.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-[300px] bg-white text-black"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
            >
              Get the Playbook
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-semibold text-lg mt-4">
            ✅ You're in! Check your email for the download link.
          </p>
        )}
      </div>
    </section>
  );
};

export default LeadMagnet;
