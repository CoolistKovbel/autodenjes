"use client"

import { useState } from "react";

// interface payment && user account



const PageContent = () => {
  const [activeDun, setActiveDun] = useState(1)


  const getSituted = () => {
    console.log(getSituted)
  }


  return (
<section className="w-full min-h-screen p-10 bg-gray-100 flex flex-col items-center">
  {/* Header Section */}
  <header className="w-full max-w-4xl mb-10">
    
    {/* display user status */}
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started Today</h2>
      <p className="text-gray-600 mb-6">Connect your wallet or start earning effortlessly.</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Get Situated
      </button>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Want to donate while the page loads?</h3>
      <p className="text-gray-600 mb-6">
        Any amount will help out! Just enter an amount of Ether and hit send. Who knows? You may
        receive a ticket!
      </p>
      <form className="flex items-center gap-4">
        <input
          type="number"
          className="bg-gray-200 p-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter amount in ETH"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  </header>

  {/* Duns Section */}
  <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
    <div className="mb-8 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our Dunes</h3>
      <p className="text-gray-600">Explore the different dunes and their rewards.</p>
    </div>

    {/* Slider Navigation */}
    <div className="flex justify-center gap-4 mb-6">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => setActiveDun(1)}
      >
        Dun 1
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => setActiveDun(2)}
      >
        Dun 2
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => setActiveDun(3)}
      >
        Dun 3
      </button>
    </div>

    {/* Duns Content */}
    <div className="flex flex-col items-center">
      {activeDun === 1 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dun 1</h2>
          <p className="text-gray-600">
            Connect to this dune and get a reward every 4 hours.
          </p>
        </div>
      )}
      {activeDun === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dun 2</h2>
          <p className="text-gray-600">
            Connect to this dune and get a reward every 6 hours.
          </p>
        </div>
      )}
      {activeDun === 3 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dun 3</h2>
          <p className="text-gray-600">
            Connect to this dune and get a reward every hour.
          </p>
        </div>
      )}
    </div>
  </section>


  {/* Get More ref client and requst  */}

</section>

  );
};

export default PageContent;
