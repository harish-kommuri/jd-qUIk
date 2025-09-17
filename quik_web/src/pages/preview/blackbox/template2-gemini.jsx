import React from "react";

const JustDialHeader = () => {
  return (
    <header className="flex items-center justify-between py-3 px-6 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-1.5">
        <span className="text-3xl font-bold text-blue-600">Just</span>
        <span className="text-3xl font-bold text-orange-500">dial</span>
      </div>

      {/* Location & Search */}
      <div className="flex items-center space-x-4 flex-grow max-w-3xl mx-4">
        <div className="flex items-center space-x-2 border border-gray-300 rounded-lg py-2 px-3 text-gray-600 text-sm cursor-pointer select-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17.5 3 10a9 9 0 1118 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Link Road, Malad West</span>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg flex-grow pr-1">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none rounded-l-lg py-2 px-3 text-sm text-gray-600"
          />
          <button className="bg-orange-600 hover:bg-orange-700 rounded-r-lg p-2">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="ml-2 px-2" aria-label="voice search">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 1v11M8 5a4 4 0 008 0"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Right Links */}
      <nav className="flex items-center space-x-6 text-sm text-gray-700 font-semibold">
        <a href="#" className="flex items-center space-x-1 hover:text-gray-900 cursor-pointer">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 11l2 2-2 2"></path>
            <path d="M18 6l4 0"></path>
            <path d="M15 12l6 0"></path>
            <path d="M15 16l4 0"></path>
            <path d="M5 10l4 0"></path>
          </svg>
          <span>Advertise</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-gray-900 cursor-pointer">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M3 8v13h18V8L12 3z"></path>
            <path d="M21 8l-9 6-9-6"></path>
          </svg>
          <span>Leads</span>
        </a>
        <a href="#" className="flex items-center space-x-1 text-xs font-bold text-white bg-red-500 rounded px-2 py-1">
          BUSINESS
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-gray-900 cursor-pointer">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 7v4"></path>
            <path d="M8 11h8"></path>
            <path d="M21 3v18"></path>
            <path d="M3 3v18"></path>
          </svg>
          <span>Free Listing</span>
        </a>

        {/* Profile */}
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            loading="lazy"
          />
          <span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white font-semibold rounded-full px-1.5">
            8
          </span>
        </div>
      </nav>
    </header>
  );
};

const Offers = () => {
  return (
    <section className="max-w-7xl mx-auto my-8 px-6">
      <h2 className="text-lg font-semibold mb-5">Offers</h2>
      <div className="flex space-x-8 bg-white shadow rounded-lg p-4">
        {/* Left Box */}
        <div className="max-w-xs border border-gray-200 rounded-md p-4 space-y-3">
          <img
            src="https://rukminim1.flixcart.com/www/400/400/promos/16/05/2019/0c3553d6-8bde-4655-b8bf-e3040b9144d6.png?q=90"
            alt="Croma Oberoi Mall"
            className="rounded-md object-cover w-full h-24"
          />
          <div>
            <h3 className="text-lg font-semibold">Croma Oberoi Mall</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-green-600 text-white px-1.5 rounded text-xs font-semibold">4.4</span>
              <div className="flex items-center text-orange-500 space-x-0.5">
                {[0, 1, 2].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    stroke="none"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0l-3.374 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.034 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  stroke="none"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0l-3.374 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.034 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              </div>
            </div>
            <div className="flex space-x-1 text-gray-500 text-sm mt-1">
              <span>Malad West</span>
              <span>•</span>
              <span>0.11 km</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-green-700">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M2 16.5V7a2 2 0 012-2h8a2 2 0 012 2v7H7a3 3 0 01-5 2.5z"></path>
                <path d="M15 14l5-5"></path>
                <path d="M20 16v6"></path>
              </svg>
              <span>Show Number</span>
            </button>
            <button className="flex items-center space-x-1 border border-blue-500 text-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-50">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17 8l4 4-4 4"></path>
                <path d="M21 12H3"></path>
              </svg>
              <span>Get Direction</span>
            </button>
          </div>
        </div>

        {/* Right Box */}
        <div className="flex-1 border border-gray-200 rounded-md p-4 flex flex-col">
          <div className="relative flex items-center justify-center h-48 mb-4 bg-gray-100 rounded-md">
            {/* Left dark side */}
            <div className="absolute left-0 h-full w-16 bg-gray-900 opacity-80 flex items-center justify-center cursor-pointer rounded-l-md text-white">
              <button aria-label="Previous">
                {/* Left arrow */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Main image */}
            <img
              src="https://rukminim1.flixcart.com/www/400/400/promos/1/12/2022/croma-original-imagfzyztg7we2fy.jpeg?q=90"
              alt="Croma Promotion"
              className="h-full object-cover rounded-md w-full max-w-[420px]"
            />

            {/* Right dark side */}
            <div className="absolute right-0 h-full w-16 bg-gray-900 opacity-80 flex items-center justify-center cursor-pointer rounded-r-md text-white">
              <button aria-label="Next">
                {/* Right arrow */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-lg">Flat 10% off</h3>
              <p className="text-gray-600 mt-1 max-w-lg">
                Brace yourself for the craziest deals. Expert tips on how to shop during a sale to help you get everything you want and need.
              </p>
              <p className="text-gray-600 mt-2 font-medium">1 Dec - 31 Dec 2022</p>
              <p className="text-xs text-gray-400 mt-1">Source: Mc Donald's Official website</p>
            </div>
            <p className="text-red-600 font-semibold text-sm mt-1 flex items-center space-x-1">
              <span className="text-red-600">●</span> <span>Expiring Soon</span>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-3">
            <h4 className="font-semibold text-sm mb-2">Terms &amp; Conditions</h4>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>Offer will not be applicable on Business, Commercial &amp; Corporate ICICI Bank Credit Cards.</li>
              <li>Offer will not be applicable on Debit Card full swipe transactions.</li>
              <li>Offer cannot be combined with brand EMI offer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function JustDial() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <JustDialHeader />
      <Offers />
    </div>
  );
}
