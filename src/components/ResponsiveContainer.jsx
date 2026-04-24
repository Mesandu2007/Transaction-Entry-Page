import React from 'react';

const ResponsiveContainer = ({ children }) => {
  return (
    <div className="w-full max-w-full overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-4 sm:gap-6 items-start">
        {children}
      </div>
    </div>
  );
};
export default ResponsiveContainer;