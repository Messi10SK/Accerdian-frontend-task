import React from 'react';
import { Link } from 'react-router-dom';

export default function RoundedSection() {
  return (
    <div className="bg-blue-100 rounded-3xl p-4 m-4 flex flex-row items-center justify-around"
         style={{ maxWidth: 600, margin: 'auto' }}>
      <Link to="/refer" className="text-black mx-2">
        Refer
      </Link>
      <Link to="/benefits" className="text-black mx-2">
        Benefits
      </Link>
      <Link to="/faqs" className="text-black mx-2">
        FAQs
      </Link>
      <Link to="/support" className="text-black mx-2">
        Support
      </Link>
    </div>
  );
}
