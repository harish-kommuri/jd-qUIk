import React from "react";
import {
  FaBuilding,
  FaCamera,
  FaStar,
  FaPen,
  FaComments,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaBars,
  FaMicrophone,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const companyInfo = {
  name: "Globetrek Engineering Corporation",
  address:
    "Office No 02, Punit Tower, Plot No 53, Sector No 11, Cbd Belapur, Navi Mumbai - 400614 (Near Kstar Hotel)",
  phoneLink: "#",
  website: "www.globetrekengg.com",
  hours:
    "Opens at 10:00 am tomorrow :Mon - Sat:- 10:00 am - 6:00 pm,Sun:- Closed - Closed",
  social: {
    facebook: "#",
    youtube: "#",
  },
  mapImg:
    "https://i.ibb.co/ZfLMkG2/map-screenshot.png" /* Use your own or similar image */,
};

const photos = [
  {
    imgSrc:
      "https://i.ibb.co/4Y9JDHG/photo1.png" /* Replace with actual image URL */,
    label: "All",
    count: 69,
  },
  {
    imgSrc:
      "https://i.ibb.co/1bHh5Tf/photo2.png" /* Replace with actual image URL */,
    label: "Video",
    count: 1,
  },
];

const categories = [
  "Automobiles Accessories",
  "Construction & Real Estate",
  "Electrical Supplies",
  "Health & Medical",
  "Industrial Machinery",
];

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold">
              <span className="text-blue-600">Just</span>
              <span className="text-orange-500">dial</span>
            </span>
          </div>

          {/* Search Bar */}
          <form className="flex flex-1 max-w-3xl mx-4 items-center border rounded-full border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <select
              defaultValue="Palghar"
              aria-label="Select Location"
              className="bg-white p-2 rounded-l-full border-r border-gray-300 outline-none"
            >
              <option>Palghar</option>
              <option>Navi Mumbai</option>
              <option>Mumbai</option>
              <option>Pune</option>
            </select>
            <input
              type="search"
              placeholder="What are you looking for..."
              className="flex-grow px-3 py-2 outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="px-4 text-gray-600 hover:text-blue-600"
            >
              <FaSearch size={16} />
            </button>
            <button
              type="button"
              aria-label="Voice Search"
              className="px-3 text-gray-600 hover:text-blue-600"
            >
              <FaMicrophone size={16} />
            </button>
          </form>

          {/* User Menu */}
          <div className="hidden md:flex space-x-6 items-center text-gray-600 text-sm font-medium">
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <FaArrowRight />
              <span>Advertise</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <FaStar />
              <span>My Catalogue</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <FaPen />
              <span>Become a Seller</span>
            </button>
            <img
              src="https://i.pravatar.cc/32"
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
        </div>

        {/* Categories */}
        <nav className="bg-white shadow-inner">
          <div className="container mx-auto flex items-center space-x-4 p-2 text-sm font-medium text-gray-700">
            <button className="flex items-center space-x-2 hover:text-blue-600">
              <FaBars />
              <span>Categories</span>
            </button>
            {categories.map((cat, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-blue-600 whitespace-nowrap"
              >
                {cat}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-6 px-4 flex space-x-8">
        {/* Sidebar */}
        <aside className="w-64 space-y-6">
          <div className="bg-white rounded-md p-4 shadow">
            <nav className="flex flex-col space-y-4 text-gray-700">
              <a
                href="#"
                className="flex items-center space-x-3 hover:text-blue-600"
              >
                <FaBuilding /> <span>Company Information</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 hover:text-blue-600"
              >
                <FaCamera /> <span>Photos</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 hover:text-blue-600"
              >
                <FaStar /> <span>Reviews &amp; Ratings</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 hover:text-blue-600"
              >
                <FaPen /> <span>Edit This</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 hover:text-blue-600"
              >
                <FaComments /> <span>Send Your Enquiry</span>
              </a>
            </nav>
          </div>

          <div className="bg-white rounded-md p-4 shadow text-center">
            <p className="font-semibold mb-2">Rate Us</p>
            <div className="flex justify-center space-x-1 mb-2 text-gray-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={24} className="cursor-pointer" />
              ))}
            </div>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Write a review
            </a>
          </div>
        </aside>

        {/* Company Info Section */}
        <section className="flex-1 space-y-6">
          <div>
            <h2 className="text-lg font-bold mb-4">COMPANY INFORMATION</h2>
            <div className="bg-white rounded-md p-6 shadow flex justify-between">
              <div className="space-y-3 max-w-3xl">
                <h3 className="text-md font-semibold flex items-center space-x-2">
                  <span>{companyInfo.name}</span>
                  <button
                    aria-label="Share"
                    title="Share"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    &#x21AA;
                  </button>
                </h3>
                <p className="flex items-center space-x-2 text-gray-600">
                  <FaMapMarkerAlt />
                  <span>{companyInfo.address}</span>
                </p>
                <p className="flex items-center space-x-2 text-blue-600 cursor-pointer hover:underline">
                  <FaPhoneAlt />
                  <a href={companyInfo.phoneLink}>Show Phone Number</a>
                </p>
                <p className="flex items-center space-x-2 text-gray-600">
                  <FaGlobe />
                  <a
                    href={"https://" + companyInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {companyInfo.website}
                  </a>
                </p>
                <p className="flex items-center space-x-2 text-gray-600">
                  <FaClock /> <span>{companyInfo.hours}</span>
                </p>
                <div className="flex space-x-3">
                  <a
                    href={companyInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white w-7 h-7 flex items-center justify-center rounded"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={12} />
                  </a>
                  <a
                    href={companyInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white w-7 h-7 flex items-center justify-center rounded"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={12} />
                  </a>
                </div>
              </div>
              <div className="ml-8">
                <img
                  src={companyInfo.mapImg}
                  alt="Map Location"
                  className="w-40 h-32 rounded-md object-cover shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Photos Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">PHOTOS</h2>
            <div className="bg-white rounded-md p-4 shadow flex space-x-4 max-w-xl">
              {photos.map(({ imgSrc, label, count }, idx) => (
                <div key={idx} className="relative w-36 h-28 rounded overflow-hidden cursor-pointer">
                  <img
                    src={imgSrc}
                    alt={`${label} image`}
                    className="w-full h-full object-cover"
                  />
                  {(label === "Video" || label === "All") && (
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs text-center py-1 flex justify-center items-center space-x-2">
                      {label === "Video" && (
                        <svg
                          fill="white"
                          height="14"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                      <span>
                        {label}({count})
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Sticky Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t px-4 py-2 flex items-center justify-between max-w-7xl mx-auto w-full border-t border-gray-300">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/TTJq94x/total-station.png"
            alt="South Total Station"
            className="w-12 h-12 object-contain rounded"
          />
          <div className="text-sm">
            <p className="font-semibold">South Total Station</p>
            <p className="text-gray-600 text-xs">
              Sold by{" "}
              <span className="font-semibold">Globetrek Engineering Corporation</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white py-1 px-4 rounded text-sm hover:bg-blue-700 transition flex items-center space-x-1">
            <FaPhoneAlt /> <span>Show number</span>
          </button>
          <button className="bg-blue-100 text-blue-600 py-1 px-4 rounded text-sm hover:bg-blue-200 transition">
            Get Best Price
          </button>
          <button
            aria-label="Share"
            title="Share"
            className="text-gray-500 hover:text-gray-700 ml-2"
          >
            &#x21AA;
          </button>
        </div>
      </div>
    </div>
  );
}
