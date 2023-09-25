import React from 'react';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className='techTitle font-bold text-white text-3xl mb-[1rem]'>
                <p>Projects</p>
            </div>
            {/* Project Card */}
            <div className = "cardsDiv flex">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-10">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Project Title</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Project heading</a>
                            <p className="mt-2 text-gray-500">Project description goes here. Briefly explain your project.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-10">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Project Title</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Project heading</a>
                            <p className="mt-2 text-gray-500">Project description goes here. Briefly explain your project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;