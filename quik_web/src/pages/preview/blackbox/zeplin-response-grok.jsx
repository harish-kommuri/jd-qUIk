import React from "react";

const FullPage = () => {
  return (
    <div
      className="relative w-screen h-screen bg-white overflow-hidden font-poppins"
      style={{ maxWidth: 1920, maxHeight: 990, margin: "0 auto" }}
    >
      {/* Background main image */}
      <img
        src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/screens/8F819A1D-C3DC-41E0-ADC7-E4E53A206469.png"
        alt="Main Screenshot"
        className="absolute top-0 left-0 w-full h-full object-cover"
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
        className="absolute"
        style={{
          top: 794,
          left: 1862,
          width: 58,
          height: 158,
          backgroundColor: "rgba(243, 245, 248, 1)",
        }}
      ></div>

      {/* Small icon group (Group 165793) - positioned absolutely */}
      <div
        className="absolute"
        style={{
          top: 952.272,
          left: 697,
          width: 19,
          height: 19,
          opacity: 1, // Base opacity from group
        }}
      >
        <img
          src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/A719D722-02E1-4E9C-9697-6CC6577CD27A.png"
          alt="Small Icon"
          className="w-full h-full object-contain"
          style={{ opacity: 0.8 }} // Inner shape opacity from JSON
        />
      </div>

      {/* Footer (Group 165791) */}
      <footer
        className="absolute bottom-0 left-0 w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.16)]"
        style={{ top: 895, height: 95 }}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between h-full px-[239px]">
          {/* Left Section (Product info) */}
          <div className="flex items-center space-x-[20px]">
            {/* Product Image */}
            <div
              className="w-[63px] h-[63px] rounded-[8px] border border-[#EEEEEE] overflow-hidden"
              style={{ borderRadius: 8 }}
            >
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/60BE42C3-4F0E-4F9F-AF7A-694CCF09F561.jpg"
                alt="South Total Station"
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
            {/* Texts */}
            <div>
              <h2 className="text-[23px] font-medium leading-[30px] text-[#111111]">
                South Total Station
              </h2>
              <div className="flex items-center mt-[6px] space-x-[10px]">
                <span className="text-[17px] font-medium leading-[14px] text-[#777777]">
                  Sold by
                </span>
                <span className="text-[17px] font-medium leading-[14px] text-[#111111]">
                  Globetrek Engineering Corporation
                </span>
              </div>
            </div>
          </div>

          {/* Right Section (Buttons) */}
          <div className="flex items-center space-x-[8px]">
            {/* Show number button */}
            <button
              className="flex items-center justify-center h-[35px] px-[10px] bg-[#1276D7] rounded-[5px] text-white"
              style={{ width: 155 }}
            >
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/FC34A376-7288-436E-A715-0BAE7CBF2807.svg"
                alt="Phone Icon"
                className="w-[22px] h-[22px] mr-[5px]"
              />
              <span className="text-[14px] font-medium">Show number</span>
            </button>

            {/* Get Best Price button */}
            <button
              className="flex items-center justify-center h-[35px] px-[16px] border border-[#1276D7] rounded-[5px] text-[#1276D7]"
              style={{ width: 130 }}
            >
              <span className="text-[14px] font-medium">Get Best Price</span>
            </button>

            {/* Small arrow button */}
            <button
              className="flex items-center justify-center w-[43.6px] h-[35px] bg-white border border-[#EEEEEE] rounded-[5px]"
            >
              <img
                src="https://public-cdn.zeplin.dev/63a075ed07cef8182d40248e/assets/CA84A60D-94E8-472A-A648-1BE7C4E53893.svg"
                alt="Arrow Icon"
                className="w-[15.6px] h-[13px]"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullPage;
