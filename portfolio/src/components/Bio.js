import React from 'react';

const Bio = () => {
  return (
      <div className="BioDiv flex border-2 border-gray-600 rounded-lg m-12">
        <div className="bioImage w-32 h-full p-2">
            <img className="rounded-3xl" src="/headshot.jpeg" />
        </div>
        <div className = "title text-left p-3">
            <div className="font-bold text-2xl">Logan Bolton</div>
            <div className="italic text-md">Software Engineering Student - Auburn, AL</div>
        </div>
      </div>
  );
};

export default Bio;
