import React from 'react';

const WindowComponent = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-white text-sm font-medium">Window Title</div>
          <div className="w-6 h-6"></div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome to the Window</h2>
            <p className="text-gray-600">This is a sample window component with proper styling and theming.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-1">Feature 1</h3>
              <p className="text-blue-600 text-sm">Description of feature 1</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-1">Feature 2</h3>
              <p className="text-green-600 text-sm">Description of feature 2</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-1">Feature 3</h3>
              <p className="text-purple-600 text-sm">Description of feature 3</p>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowComponent;
