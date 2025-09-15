import { useState } from "react";
import {
  FaBuilding,
  FaImages,
  FaStar,
  FaEdit,
  FaCommentDots,
  FaPhone,
  FaGlobe,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaBars,
} from "react-icons/fa";

const companyInfo = {
  name: "Globetrek Engineering Corporation",
  address:
    "Office No 02, Punit Tower, Plot No 53, Sector No 11, Cbd Belapur, Navi Mumbai - 400614 (Near Kstar Hotel)",
  showPhone: false,
  website: "www.globetrekengg.com",
  hours: "Opens at 10:00 am tomorrow :Mon - Sat:- 10:00 am - 6:00 pm, Sun:- Closed - Closed",
  photos: [
    {
      src:
        "https://i.imgur.com/WCkpQBr.png", // placeholder image
      alt: "All(69)",
      label: "All(69)",
    },
    {
      src: "https://i.imgur.com/xB2cRZZ.png", // placeholder video thumbnail
      alt: "Video(1)",
      label: "Video(1)",
    },
  ],
};

const SidebarItem = ({ icon, label }) => (
  <button className="flex gap-3 items-center hover:text-blue-600 w-full py-3 px-4 rounded-md transition-colors duration-300">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function CompanyPage() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1 font-extrabold text-2xl">
            <span className="text-blue-600 select-none">Just</span>
            <span className="text-orange-500 select-none">dial</span>
          </div>
          {/* Location dropdown */}
          <select className="border border-gray-300 rounded px-3 py-1 text-gray-700">
            <option>Palghar</option>
            {/* Add other options as needed */}
          </select>
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for..."
              className="pl-4 pr-10 py-1 border border-gray-300 rounded w-96 focus:outline-blue-500 focus:ring-1"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right menu */}
        <nav className="flex items-center gap-6 text-gray-600 text-sm font-semibold">
          <button className="flex items-center gap-1 hover:text-blue-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.75 17L15 12l-5.25-5"></path>
            </svg>
            Advertise
          </button>
          <button className="hover:text-blue-600">My Catalogue</button>
          <button className="hover:text-blue-600">Become a Seller</button>
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
        </nav>
      </header>

      {/* Navigation menu */}
      <nav className="flex items-center gap-4 bg-white border-b px-6 py-2 text-xs font-semibold text-gray-600">
        <button className="flex items-center gap-2 hover:text-blue-600">
          <FaBars />
          Categories
        </button>
        <button className="hover:text-blue-600">Automobiles Accessories</button>
        <button className="hover:text-blue-600">Construction & Real Estate</button>
        <button className="hover:text-blue-600">Electrical Supplies</button>
        <button className="hover:text-blue-600">Health & Medical</button>
        <button className="hover:text-blue-600">Industrial Machinery</button>
      </nav>

      <main className="flex gap-8 px-10 py-10">
        {/* Left Sidebar */}
        <aside className="w-64 flex flex-col gap-6">
          <div className="bg-white rounded-md shadow p-4 space-y-4">
            <SidebarItem icon={<FaBuilding />} label="Company Information" />
            <SidebarItem icon={<FaImages />} label="Photos" />
            <SidebarItem icon={<FaStar />} label="Reviews & Ratings" />
            <SidebarItem icon={<FaEdit />} label="Edit This" />
            <SidebarItem icon={<FaCommentDots />} label="Send Your Enquiry" />
          </div>

          <div className="bg-white rounded-md shadow p-4">
            <h2 className="text-base font-semibold mb-3">Rate Us</h2>
            <div className="flex gap-1 mb-2 text-gray-400 cursor-pointer">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              Write a review
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-8">
          {/* Company Information */}
          <div>
            <h1 className="text-lg font-semibold mb-6">COMPANY INFORMATION</h1>
            <div className="bg-white p-6 rounded-md shadow flex justify-between items-center">
              <div className="space-y-4 max-w-[70%]">
                <h2 className="font-semibold text-xl flex items-center gap-2">
                  {companyInfo.name}
                  <button
                    title="Share"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 1a2 2 0 1 0-1.985 1.75L6.193 6.058a2 2 0 1 0 0 3.884l4.822 3.308A2 2 0 1 0 13 9a1.99 1.99 0 0 0-.112-.647L8.295 5.396 13.061 2.11A1.993 1.993 0 0 0 13 1z" />
                    </svg>
                  </button>
                </h2>
                <p className="text-sm leading-relaxed text-gray-700 flex items-start gap-2">
                  <FaBuilding className="mt-1" /> {companyInfo.address}
                </p>

                <p
                  className="text-sm text-blue-600 hover:underline cursor-pointer flex items-center gap-1"
                  onClick={() => setShowPhone(!showPhone)}
                >
                  <FaPhone />
                  {showPhone ? "123-456-7890" : "Show Phone Number"}
                </p>

                <p className="text-sm leading-relaxed text-gray-700 flex items-center gap-2">
                  <FaGlobe /> {companyInfo.website}
                </p>
                <p className="text-sm leading-relaxed text-gray-700 flex items-center gap-2">
                  <FaClock /> {companyInfo.hours}
                </p>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-700 text-white rounded-full p-2 w-7 h-7 flex justify-center items-center hover:bg-blue-800"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={12} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-red-600 text-white rounded-full p-2 w-7 h-7 flex justify-center items-center hover:bg-red-700"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={12} />
                  </a>
                </div>
              </div>

              <figure className="border border-gray-300 rounded overflow-hidden w-32 h-32 shrink-0">
                <img
                  src="https://i.imgur.com/9lT7CIP.png" // Map image snippet from screenshot
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>

          {/* Photos */}
          <div>
            <h2 className="text-lg font-semibold mb-6">PHOTOS</h2>
            <div className="bg-white p-4 rounded-md shadow flex gap-4">
              {companyInfo.photos.map(({ src, alt, label }) => (
                <div key={alt} className="relative cursor-pointer group">
                  <img
                    src={src}
                    alt={alt}
                    className="w-40 h-24 object-cover rounded"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm text-center py-1 rounded-b opacity-100 group-hover:opacity-80">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
