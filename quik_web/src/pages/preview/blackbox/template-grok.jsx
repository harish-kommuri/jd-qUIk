import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaClock, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2 4 4 8-8 2 2-10 10-6-6z"/></svg>, label: "Company Information" },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" ry="2"/></svg>, label: "Photos" },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>, label: "Reviews & Ratings" },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7v10M20 7v10M9 7v10"/></svg>, label: "Edit This" },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12h20M12 2v20"/></svg>, label: "Send Your Enquiry" },
  ];

  return (
    <div className="bg-white rounded-md p-5 shadow-md w-64 space-y-5">
      {menuItems.map(({ icon, label }) => (
        <div key={label} className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
          <div className="text-gray-600">{icon}</div>
          <span className="font-medium text-gray-800">{label}</span>
        </div>
      ))}
      <div className="bg-gray-50 p-4 rounded-md">
        <div className="text-gray-800 font-semibold mb-2">Rate Us</div>
        <div className="flex space-x-1 text-gray-400">
          {[...Array(5)].map((_, i) => (
            <button key={i} aria-label={`Rate ${i + 1} star`} className="border border-gray-400 rounded w-7 h-7 hover:text-yellow-400 hover:border-yellow-400">
              ☆
            </button>
          ))}
        </div>
        <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Write a review</a>
      </div>
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div className="bg-white rounded-md p-6 shadow-md space-y-4 max-w-4xl">
      <h2 className="text-lg font-semibold uppercase tracking-wide">Company Information</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Globtrek Engineering Corporation <button title="Share" className="ml-2 text-gray-400 hover:text-gray-600">↗️</button></h3>
        <p className="flex items-center space-x-2 text-gray-600 mb-1">
          <FaMapMarkerAlt className="text-gray-500" />
          <span>Office No 02, Punit Tower, Plot No 53, Sector No 11, Cbd Belapur, Navi Mumbai - 400614 (Near Kstar Hotel)</span>
        </p>
        <p className="flex items-center space-x-2 text-blue-600 mb-1 cursor-pointer hover:underline">
          <FaPhoneAlt />
          <span>Show Phone Number</span>
        </p>
        <p className="flex items-center space-x-2 text-gray-600 mb-1">
          <FaGlobe />
          <a href="http://www.globtrekengg.com" target="_blank" rel="noreferrer" className="hover:underline">www.globtrekengg.com</a>
        </p>
        <p className="flex items-center space-x-2 text-gray-600 mb-2">
          <FaClock />
          <span>Opens at 10:00 am tomorrow :Mon - Sat:- 10:00 am - 6:00 pm, Sun:- Closed - Closed</span>
        </p>
        <div className="flex space-x-3">
          <a href="#" aria-label="Facebook" className="p-1 rounded bg-blue-600 text-white"><FaFacebookF /></a>
          <a href="#" aria-label="YouTube" className="p-1 rounded bg-red-600 text-white"><FaYoutube /></a>
        </div>
      </div>
      <div className="w-36 h-36">
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=CBD+Belapur,+Mumbai&zoom=15&size=144x144&markers=color:red%7Clabel:%7C18.9936,73.0297"
          alt="Map Location"
          className="rounded"
        />
      </div>
    </div>
  );
};

const Photos = () => {
  const photoItems = [
    { src: 'https://cdn4.knowyourmeme.com/photos/4278707-justdial.png', label: 'All', count: 69 },
    { src: 'https://i.ytimg.com/vi/Lxq9c3BvXK4/maxresdefault.jpg', label: 'Video', count: 1 },
  ];

  return (
    <div className="bg-white rounded-md p-6 shadow-md max-w-4xl">
      <h2 className="text-lg font-semibold uppercase tracking-wide mb-4">Photos</h2>
      <div className="flex space-x-4">
        {photoItems.map(({ src, label, count }) => (
          <div key={label} className="relative w-40 h-40 rounded overflow-hidden cursor-pointer group">
            <img src={src} alt={label} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs text-center w-full py-1 group-hover:bg-opacity-75">
              {label}({count})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex space-x-8 max-w-7xl mx-auto">
        <Sidebar />
        <div className="flex-1 space-y-8">
          <CompanyInfo />
          <Photos />
        </div>
      </div>
    </div>
  );
}
