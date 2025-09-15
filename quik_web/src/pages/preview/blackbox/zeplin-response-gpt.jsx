import React from "react";

/**
 * Full-page layout matching the Zeplin screen:
 * - Background screenshot
 * - Two overlay rectangles (as in design)
 * - Sticky footer with product info and CTAs
 */
const Page = () => {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden font-poppins">
      {/* Background main screenshot */}
      <img
        src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/screens/8F819A1D-C3DC-41E0-ADC7-E4E53A206469.png"
        alt="Main screenshot"
        className="w-full h-full object-cover"
        fetchpriority="high"
      />

      {/* Overlay rectangles from Zeplin.
          Positioned with absolute px values, so only show on very wide screens */}
      <div className="hidden 2xl:block">
        {/* White rectangle (x: 812, y: 690, w: 496, h: 59) */}
        <div
          className="absolute bg-white"
          style={{ top: 690, left: 812, width: 496, height: 59 }}
        />
        {/* Light gray rectangle (x: 1862, y: 794, w: 58, h: 158) */}
        <div
          className="absolute bg-lightGrayBg"
          style={{ top: 794, left: 1862, width: 58, height: 158 }}
        />
      </div>

      {/* Sticky footer bar */}
      <footer className="absolute bottom-0 left-0 w-full bg-white shadow-footer">
        <div className="mx-auto h-[95px] px-4 sm:px-6 lg:px-8 max-w-[1920px] flex items-center justify-between">
          {/* Left: product image + text */}
          <div className="flex items-center gap-4 min-w-0">
            {/* Product image (63x63) with border and rounded corners */}
            <div className="w-[63px] h-[63px] rounded-lg border border-borderLight overflow-hidden shrink-0">
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/60BE42C3-4F0E-4F9F-AF7A-694CCF09F561.jpg"
                alt="South Total Station product"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Title + sold by */}
            <div className="min-w-0">
              <h2 className="text-[23px] leading-[30px] font-medium text-textPrimary truncate">
                South Total Station
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[17px] leading-[14px] font-medium text-textSecondary">
                  Sold by
                </span>
                <span className="text-[17px] leading-[14px] font-medium text-textPrimary truncate">
                  Globetrek Engineering Corporation
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-3">
            {/* Show number (filled blue) */}
            <button
              type="button"
              className="group inline-flex items-center gap-2 h-[35px] rounded-md bg-brandBlue border border-brandBlue px-3 sm:px-4 transition-colors hover:bg-[#0F66B7]"
              aria-label="Show number"
            >
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/F65E5B22-ADEB-4F63-B27F-B26ED2F7A4AB.png"
                alt=""
                className="w-[22px] h-[22px]"
                loading="lazy"
              />
              <span className="text-white text-[14px] font-medium whitespace-nowrap">
                Show number
              </span>
            </button>

            {/* Get Best Price (outline) */}
            <button
              type="button"
              className="inline-flex items-center justify-center h-[35px] rounded-md border border-brandBlue px-3 sm:px-4 transition-colors hover:bg-blue-50"
              aria-label="Get Best Price"
            >
              <span className="text-brandBlue text-[14px] font-medium whitespace-nowrap">
                Get Best Price
              </span>
            </button>

            {/* Small icon button (arrow) with light border */}
            <button
              type="button"
              className="inline-flex items-center justify-center w-[44px] h-[35px] rounded-md border border-borderLight hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              {/* Arrow SVG per Zeplin (stroke 1.2, #111) */}
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

export default Page;
