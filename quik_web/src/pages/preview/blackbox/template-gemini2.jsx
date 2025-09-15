import React from 'react';

// Using a generic Icon component for demonstration.
// In a real app, you would use an icon library like 'react-icons' or SVGs.
const Icon = ({ as, className = '' }) => {
  const IconComponent = as;
  return <IconComponent className={`inline-block h-5 w-5 ${className}`} />;
};

// Placeholder icons from a hypothetical library
const MapPin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const Phone = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const GlobeAlt = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>;
const Clock = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChevronDown = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;
const Search = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const Menu = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const Star = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const UserCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


const DetailPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <img src="https://via.placeholder.com/100x30.png?text=Justdial" alt="Justdial Logo" className="h-8" />
                            <div className="flex items-center border rounded-md">
                                <span className="pl-3 text-gray-600">Palghar</span>
                                <button className="p-2">
                                    <Icon as={ChevronDown} className="text-gray-500"/>
                                </button>
                                <span className="border-l h-6 mx-2"></span>
                                <input type="text" placeholder="What are you looking for..." className="py-2 focus:outline-none w-80" />
                                <button className="p-2">
                                     <Icon as={Search} className="text-gray-500"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                            <a href="#" className="hover:text-blue-600">Advertise</a>
                            <a href="#" className="hover:text-blue-600">My Catalogue</a>
                            <a href="#" className="hover:text-blue-600">Become a Seller</a>
                            <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
                                <Icon as={UserCircle} />
                                <span>My Abhilash</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sub-navigation */}
            <nav className="bg-white border-t border-b">
                 <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center space-x-8 text-sm text-gray-700">
                        <a href="#" className="py-2 flex items-center space-x-2 border-b-2 border-transparent hover:border-blue-500">
                            <Icon as={Menu} />
                            <span>Categories</span>
                        </a>
                        <a href="#" className="py-2 border-b-2 border-transparent hover:border-blue-500">Automobiles Accessories</a>
                        <a href="#" className="py-2 border-b-2 border-transparent hover:border-blue-500">Construction & Real Estate</a>
                        <a href="#" className="py-2 border-b-2 border-transparent hover:border-blue-500">Electrical Supplies</a>
                        <a href="#" className="py-2 border-b-2 border-transparent hover:border-blue-500">Health & Medical</a>
                        <a href="#" className="py-2 border-b-2 border-transparent hover:border-blue-500">Industrial Machinery</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8 mb-24">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <div className="bg-white border rounded-lg p-4">
                            <ul className="space-y-4 text-gray-700">
                                <li className="font-semibold text-blue-600 border-l-4 border-blue-600 -ml-4 pl-3">Company Information</li>
                                <li>Photos</li>
                                <li>Reviews & Ratings</li>
                                <li>Edit This</li>
                                <li>Send Your Enquiry</li>
                            </ul>
                        </div>
                        <div className="bg-white border rounded-lg p-4 mt-6">
                             <h3 className="font-semibold text-gray-800">Rate Us</h3>
                             <div className="flex space-x-1 my-2">
                                <Icon as={Star} className="text-gray-300 w-7 h-7 cursor-pointer"/>
                                <Icon as={Star} className="text-gray-300 w-7 h-7 cursor-pointer"/>
                                <Icon as={Star} className="text-gray-300 w-7 h-7 cursor-pointer"/>
                                <Icon as={Star} className="text-gray-300 w-7 h-7 cursor-pointer"/>
                                <Icon as={Star} className="text-gray-300 w-7 h-7 cursor-pointer"/>
                             </div>
                             <a href="#" className="text-blue-600 text-sm hover:underline">Write a review</a>
                        </div>
                    </aside>

                    {/* Right Content */}
                    <div className="w-full lg:w-3/4 space-y-8">
                        {/* Company Information */}
                        <section className="bg-white border rounded-lg p-6">
                            <h2 className="text-sm uppercase text-gray-500 font-semibold mb-4">Company Information</h2>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Globetrek Engineering Corporation</h1>
                                    <div className="space-y-3 text-gray-700">
                                        <p className="flex items-start">
                                            <Icon as={MapPin} className="text-gray-500 mr-3 mt-1 flex-shrink-0" />
                                            <span>Office No 02, Punit Tower, Plot No 53, Sector No 11, Cbd Belapur, Navi Mumbai - 400614 (Near Kstar Hotel)</span>
                                        </p>
                                        <p className="flex items-center">
                                            <Icon as={Phone} className="text-gray-500 mr-3" />
                                            <a href="#" className="text-blue-600 hover:underline">Show Phone Number</a>
                                        </p>
                                        <p className="flex items-center">
                                            <Icon as={GlobeAlt} className="text-gray-500 mr-3" />
                                            <a href="#" className="text-blue-600 hover:underline">www.globetrekengg.com</a>
                                        </p>
                                        <p className="flex items-center">
                                            <Icon as={Clock} className="text-green-500 mr-3" />
                                            <span className="text-green-600">Opens at 10:00 am tomorrow</span>
                                            <span className="ml-2 text-gray-500">Mon - Sat - 10:00 am - 6:00 pm, Sun - Closed</span>
                                        </p>
                                        <div className="flex items-center space-x-2 pt-2">
                                            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="h-6 w-6"/></a>
                                            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="h-6 w-6"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ml-6">
                                    <img src="https://i.imgur.com/G5g2YyY.png" alt="Map Thumbnail" className="w-40 h-40 rounded-md border"/>
                                </div>
                            </div>
                        </section>

                        {/* Photos */}
                        <section className="bg-white border rounded-lg p-6">
                             <h2 className="text-sm uppercase text-gray-500 font-semibold mb-4">Photos</h2>
                             <div className="flex space-x-4">
                                <div className="relative cursor-pointer">
                                    <img src="https://i.imgur.com/mRuto06.png" alt="All Photos" className="w-40 h-28 rounded-md object-cover"/>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-sm py-1 rounded-b-md">All(98)</div>
                                </div>
                                <div className="relative cursor-pointer">
                                    <img src="https://i.imgur.com/vHq0L5e.png" alt="Videos" className="w-40 h-28 rounded-md object-cover"/>
                                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-sm py-1 rounded-b-md">Video(1)</div>
                                </div>
                             </div>
                        </section>

                        {/* Reviews & Ratings */}
                        <section>
                            <div className="bg-gray-100 p-3 rounded-t-lg border">
                                <h2 className="font-bold text-gray-700 text-center">REVIEWS & RATINGS - GLOBETREK ENGINEERING CORPORATION</h2>
                            </div>
                            {/* Review content would go here */}
                        </section>
                    </div>
                </div>
            </main>

            {/* Sticky Footer */}
            <footer className="fixed bottom-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.1)] px-6 py-3 flex items-center justify-between rounded-t-lg border-t border-x">
                        <div className="flex items-center space-x-4">
                            <img src="https://i.imgur.com/3q15Uf6.png" alt="Product" className="h-12 w-12 object-contain" />
                            <div>
                                <h4 className="font-semibold text-gray-800">South Total Station</h4>
                                <p className="text-sm text-gray-600">Sold by: <span className="font-medium text-gray-800">Globetrek Engineering Corporation</span></p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="px-5 py-2 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50">Show number</button>
                            <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Get Best Price</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DetailPage;