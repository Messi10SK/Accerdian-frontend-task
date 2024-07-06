import React, { useState } from 'react';
import { Button, Modal, TextField, Typography } from '@material-ui/core';

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
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit form");
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-2xl mt-8 text-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Refer Now
        </Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-content bg-white rounded-lg shadow-lg p-8 mx-auto my-12 max-w-md">
          <Typography variant="h4" className="text-2xl font-bold mb-4">Refer a Friend</Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Your Name"
              name="referrer"
              value={form.referrer}
              onChange={handleChange}
              required
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Friend's Name"
              name="referee"
              value={form.referee}
              onChange={handleChange}
              required
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Friend's Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              className="mb-4"
            />
            {error && <Typography color="error" className="text-red-500">{error}</Typography>}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ReferEarn;
