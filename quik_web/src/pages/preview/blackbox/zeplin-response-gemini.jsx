import React from "react";

const FullPage = () => {
  return (
    <div
      className="relative w-screen h-screen bg-white overflow-hidden"
      style={{ maxWidth: 1920, maxHeight: 990, margin: "0 auto" }}
    >
      {/* Background main image */}
      <img
        src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/screens/8F819A1D-C3DC-41E0-ADC7-E4E53A206469.png"
        alt="Main Screenshot"
        className="w-full h-full object-cover"
      />

      {/* White rectangle overlay */}
      <div
        className="absolute bg-white"
        style={{
          top: 690,
          left: 812,
          width: 496,
          height: 59,
        }}
      ></div>

      {/* Light gray rectangle overlay */}
      <div
        className="absolute bg-[#F3F5F8]"
        style={{
          top: 794,
          left: 1862,
          width: 58,
          height: 158,
        }}
      ></div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[95px] px-6">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Image with border */}
            <div className="w-[63px] h-[63px] rounded-lg border border-gray-200 overflow-hidden flex-shrink-0">
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/60BE42C3-4F0E-4F9F-AF7A-694CCF09F561.jpg"
                alt="South Total Station"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Texts */}
            <div>
              <h2 className="text-[23px] font-medium leading-[30px] text-[#111111]">
                South Total Station
              </h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[17px] font-medium leading-[14px] text-gray-600">
                  Sold by
                </span>
                <span className="text-[17px] font-medium leading-[14px] text-[#111111] text-center">
                  Globetrek Engineering Corporation
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Show number button */}
            <button
              type="button"
              className="flex items-center bg-blue-700 rounded-md px-4 h-[35px] border border-blue-700"
            >
              {/* Phone icon */}
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/F65E5B22-ADEB-4F63-B27F-B26ED2F7A4AB.png"
                alt="phone icon"
                className="w-[22px] h-[22px] mr-2"
              />
              <span className="text-white text-[14px] font-medium">
                Show number
              </span>
            </button>

            {/* Get Best Price button */}
            <button
              type="button"
              className="rounded-md border border-blue-700 px-4 h-[35px]"
            >
              <span className="text-blue-700 text-[14px] font-medium">
                Get Best Price
              </span>
            </button>

            {/* Small icon button */}
            <button
              type="button"
              className="w-[44px] h-[35px] rounded-md border border-gray-300 flex items-center justify-center"
            >
              {/* Small icon inside */}
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current text-black"
              >
                <path
                  d="M1 7H15"
                  stroke="#111111"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1L15 7L8 13"
                  stroke="#111111"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullPage;
