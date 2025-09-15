import React from 'react';
import {
  MdLocationOn,
  MdPhone,
  MdLanguage,
  MdAccessTime,
  MdShare,
} from 'react-icons/md';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow p-5 w-64 space-y-6">
      <SidebarItem icon={<svg className="w-6 h-6 stroke-current text-gray-700" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 21V3l7-1 7 1v18"></path><path d="M9 22v-7h6v7"></path></svg>} label="Company Information" />
      <SidebarItem icon={<svg className="w-6 h-6 stroke-current text-gray-700" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M16 3v18"></path><path d="M8 9h.01"></path><path d="M8 15h.01"></path><path d="M12 12h.01"></path></svg>} label="Photos" />
      <SidebarItem icon={<svg className="w-6 h-6 stroke-current text-gray-700" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 17l-5-5 5-5M17 12H7"></path></svg>} label="Reviews & Ratings" />
      <SidebarItem icon={<svg className="w-6 h-6 stroke-current text-gray-700" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M12 4h9"></path><path d="M4 8v7"></path><path d="M7 15h3"></path><path d="M5 12h4"></path></svg>} label="Edit This" />
      <SidebarItem icon={<svg className="w-6 h-6 stroke-current text-gray-700" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z"></path></svg>} label="Send Your Enquiry" />
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-600">
    <div className="text-xl">{icon}</div>
    <div className="font-semibold">{label}</div>
  </div>
);

const CompanyInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex justify-between space-x-6">
      <div className="flex flex-col space-y-4 max-w-3xl">
        <h2 className="font-semibold text-lg flex items-center space-x-2">
          <span>Globetrek Engineering Corporation</span>
          <MdShare className="cursor-pointer text-gray-500" />
        </h2>
        <div className="flex items-start space-x-2">
          <MdLocationOn className="text-gray-600 mt-1" />
          <p className="text-gray-700">
            Office No 02, Punit Tower, Plot No 53, Sector No 11, Cbd Belapur,
            Navi Mumbai - 400614 (Near Kstar Hotel)
          </p>
        </div>
        <div className="flex items-center space-x-2 text-blue-600 cursor-pointer">
          <MdPhone />
          <span>Show Phone Number</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdLanguage className="text-gray-600" />
          <a
            href="https://www.globetrekengg.com"
            className="text-gray-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.globetrekengg.com
          </a>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <MdAccessTime />
          <span>
            Opens at 10:00 am tomorrow :Mon - Sat:- 10:00 am - 6:00 pm,Sun:- Closed - Closed
          </span>
        </div>
        <div className="flex space-x-4 text-blue-600">
          <a href="#" aria-label="Facebook" className="hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-600">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://img1.wsimg.com/isteam/ip/52f4eecf-86ad-4338-aa5f-e4bf40720f05/Map.png" 
          alt="Map location"
          className="w-32 h-32 rounded-md object-cover"
        />
      </div>
    </div>
  );
};

const Photos = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex space-x-4">
      <div className="relative w-32 h-20">
        <img
          src="https://img1.wsimg.com/isteam/ip/52f4eecf-86ad-4338-aa5f-e4bf40720f05/Photo1.jpg"
          alt="All photos"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1 rounded-b">
          All (69)
        </div>
      </div>
      <div className="relative w-32 h-20">
        <img
          src="https://img1.wsimg.com/isteam/ip/52f4eecf-86ad-4338-aa5f-e4bf40720f05/VideoThumbnail.jpg"
          alt="Video"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1 rounded-b">
          Video (1)
        </div>
      </div>
    </div>
  );
};

const RateUs = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-64 space-y-3">
      <h3 className="font-semibold">Rate Us</h3>
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            className="h-8 w-8 border border-gray-400 rounded hover:bg-blue-100 transition"
            aria-label={`Rate ${i + 1} star`}
          >
            {/* Star SVG */}
            <svg
              className="w-5 h-5 fill-current text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="10 1.5 12.59 7.59 19 7.59 13.5 11.97 15.68 18.5 10 14.32 4.32 18.5 6.5 11.97 1 7.59 7.41 7.59 10 1.5" />
            </svg>
          </button>
        ))}
      </div>
      <button className="text-blue-600 text-sm hover:underline">Write a review</button>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="font-bold text-xl tracking-wide uppercase">Company Information</h1>
      <CompanyInfo />
      <h1 className="font-bold text-xl tracking-wide uppercase">Photos</h1>
      <Photos />
    </div>
  );
};

const JustDialPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8 font-sans text-gray-800">
      <div className="flex space-x-10 max-w-7xl mx-auto">
        <aside>
          <Sidebar />
          <RateUs className="mt-8" />
        </aside>
        <main className="flex-1">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default JustDialPage;
