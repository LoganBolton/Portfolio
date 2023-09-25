import React from 'react';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className='techTitle font-bold text-white text-3xl mb-[1rem]'>
                <p>Projects</p>
            </div>
            {/* Project Card */}
            <div className = "cardsDiv flex justify-evenly">
                <div className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-10">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Project Title</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Project heading</a>
                        <p className="mt-2 text-gray-500">Project description goes here. Briefly explain your project.</p>
                    </div>
                </div>
                <div className="max-w-md bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-10">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Project Title</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Project heading</a>
                        <p className="mt-2 text-gray-500">Project description goes here. Briefly explain your project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;