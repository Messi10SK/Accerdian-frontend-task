import React from 'react';
import ReferEarn from './ReferEarn';

export default function FeaturedSection() {
  return (
    <>
     <div className="flex justify-center">
          <img src="../refer.png" alt="Refer Image" className="max-w-full rounded-lg shadow-md" />
        </div>

    <div className="bg-white shadow-md rounded-lg p-8 mx-auto max-w-2xl mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">How Do I Refer</h1>
      <div className="flex justify-center">
        <img src="../referImage.png" alt="Refer Image" className="max-w-full rounded-lg shadow-md" />
      </div>
    </div>
    <ReferEarn/>
        <div className="bg-white shadow-md rounded-lg p-8 mx-auto max-w-2xl mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center">What Are Referal Benefits</h1>
        <div className="flex justify-center">
          <img src="../ref.png" alt="Refer Image" className="max-w-full rounded-lg shadow-md" />
        </div>
      </div>
      <ReferEarn/>
      <div className="flex justify-center">
          <img src="../benefit.png" alt="Refer Image" className="max-w-full rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center w-full ">
          <img src="../footer.png" alt="Refer Image" className="w-full max-w-full rounded-lg shadow-md " />
        </div>
      </>
  );
}
