import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ReferEarn = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ referrer: '', referee: '', email: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1500/api/referrals", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referrer: form.referrer,
          referee: form.referee,
          email: form.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log("Response:", data);
      
      setForm({ referrer: '', referee: '', email: '' });
      setError(null);
      setOpen(false);
      toast.success('Form submitted'); // Display success toast
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit form");
      toast.error('Failed to submit form'); // Display error toast
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-2xl mt-8 text-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Refer Now
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 mx-auto my-12 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="referrer"
                value={form.referrer}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
              <input
                type="text"
                name="referee"
                value={form.referee}
                onChange={handleChange}
                placeholder="Friend's Name"
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Friend's Email"
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferEarn;
