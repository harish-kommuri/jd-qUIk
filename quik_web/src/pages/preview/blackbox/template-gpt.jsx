import { useState } from "react";
import {
  BuildingOfficeIcon,
  PhotoIcon,
  StarIcon,
  PencilSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
  ClockIcon,
  ShareIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  AdjustmentsVerticalIcon,
  Bars3Icon,
  UserCircleIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
// import {
//   FacebookIcon,
//   YoutubeIcon,
// } from "./CustomSocialIcons"; // see note below

const categories = [
  "Categories",
  "Automobiles Accessories",
  "Construction & Real Estate",
  "Electrical Supplies",
  "Health & Medical",
  "Industrial Machinery",
];

const leftMenu = [
  { icon: BuildingOfficeIcon, label: "Company Information" },
  { icon: PhotoIcon, label: "Photos" },
  { icon: StarIcon, label: "Reviews & Ratings" },
  { icon: PencilSquareIcon, label: "Edit This" },
  { icon: ChatBubbleBottomCenterTextIcon, label: "Send Your Enquiry" },
];

const photos = [
  { id: 1, label: "All(69)", imgSrc: "https://justdial-maps.s3.ap-south-1.amazonaws.com/image1.jpg" },
  { id: 2, label: "Video(1)", imgSrc: "https://justdial-maps.s3.ap-south-1.amazonaws.com/image2.jpg" },
];

export default function CompanyProfile() {
  const [location, setLocation] = useState("Palghar");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Navbar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
          {/* Left Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-blue-600">Just</span>
            <span className="text-3xl font-extrabold text-orange-500">dial</span>
          </div>

          {/* Location + search */}
          <div className="flex flex-1 max-w-xl items-center border border-gray-300 rounded-full px-4 py-1 shadow-sm">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-gray-700 text-sm cursor-pointer"
              aria-label="Select Location"
            >
              <option>Palghar</option>
              {/* Add more locations if needed */}
            </select>
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="What are you looking for..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 pl-4 text-sm border-none focus:ring-0 outline-none bg-transparent"
              aria-label="Search"
            />
            <button className="p-1 rounded-full hover:bg-gray-200">
              <MicrophoneIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <MagnifyingGlassIcon className="h-5 w-5 text-blue-700" />
            </button>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-5 text-xs font-semibold text-gray-700">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
              <SpeakerWaveIcon className="h-5 w-5" />
              <span>Advertise</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
              <AdjustmentsVerticalIcon className="h-5 w-5" />
              <span>My Catalogue</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
              <Bars3Icon className="h-5 w-5" />
              <span>Become a Seller</span>
            </div>
            <UserCircleIcon className="h-8 w-8 rounded-full cursor-pointer" />
          </div>
        </div>

        {/* Categories Navbar */}
        <nav className="bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center space-x-6 text-sm font-medium py-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    className="hover:text-blue-700 focus:outline-none"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex gap-8">
        {/* Left Sidebar */}
        <aside className="w-64 flex-shrink-0 space-y-6">
          <nav className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
            {leftMenu.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 w-full text-sm font-medium text-gray-700"
              >
                <Icon className="h-5 w-5" />
                {label}
              </button>
            ))}
          </nav>

          {/* Rate Us Card */}
          <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
            <h3 className="text-sm font-semibold">Rate Us</h3>
            <div className="flex space-x-1 text-gray-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
              ))}
            </div>
            <button className="text-blue-600 text-sm hover:underline">Write a review</button>
          </div>
        </aside>

        {/* Right Content */}
        <section className="flex-1 space-y-8">
          {/* Company Information Card */}
          <article className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <header className="flex items-center justify-between">
              <h2 className="text-lg font-semibold uppercase text-gray-700">
                Company Information
              </h2>
              <button
                aria-label="Share Company"
                className="p-1 rounded hover:bg-gray-100"
              >
                <ShareIcon className="h-5 w-5 text-gray-500" />
              </button>
            </header>

            <h3 className="text-xl font-semibold mb-4">
              Globtrek Engineering Corporation
            </h3>

            <div className="space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <span>
                  Office No 02, Punit Tower, Plot No 53, Sector No 11, Cbd Belapur, Navi Mumbai - 400614 (Near Kstar Hotel)
                </span>
              </p>

              <p className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-blue-600" />
                <button className="text-blue-600 underline text-sm">
                  Show Phone Number
                </button>
              </p>

              <p className="flex items-center gap-2">
                <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                <a
                  href="http://www.globtrekengg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  www.globtrekengg.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                <span>
                  Opens at 10:00 am tomorrow :Mon - Sat:- 10:00 am - 6:00 pm, Sun:- Closed - Closed
                </span>
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 mt-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 rounded-sm"
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.414c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="bg-red-600 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.118C19.513 3.5 12 3.5 12 3.5s-7.513 0-9.39.568a2.994 2.994 0 0 0-2.108 2.118A31.31 31.31 0 0 0 0 12a31.31 31.31 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.108 2.118C4.487 20.5 12 20.5 12 20.5s7.513 0 9.39-.568a2.994 2.994 0 0 0 2.108-2.118 31.31 31.31 0 0 0 .502-5.814 31.31 31.31 0 0 0-.502-5.814zM9.545 15.568v-7.135l6.182 3.52-6.182 3.615z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-4">
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=19.0421,73.0329&zoom=15&size=200x150&markers=color:red%7Clabel:%7C19.0421,73.0329"
                alt="Map Location"
                className="rounded-md border border-gray-300"
                width={150}
                height={150}
              />
            </div>
          </article>

          {/* Photos Section */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Photos</h2>
            <div className="flex gap-4">
              {photos.map(({ id, label, imgSrc }) => (
                <div key={id} className="relative w-32 h-28 rounded-md overflow-hidden cursor-pointer shadow-sm">
                  <img
                    src={imgSrc}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs py-1 w-full text-center">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
