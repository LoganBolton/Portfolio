// import React from 'react';
import React, { useEffect, useState} from 'react';
import headshot from '../images/headshot.jpeg'; 
import dino from '../images/dino.jpg';

const Bio = () => {
  useEffect(() => {
    console.log("test");
    document.getElementById('fadeDiv').style.opacity = '1';
    console.log("test2");
  }, []);

  return (
    <div className="BioDiv flex gray-600 rounded-lg justify-center h-[95vh] items-center"  id = "fadeDiv" style={{ opacity: 0, transition: 'opacity 2s ease-in-out' }}>

        <div className='bioCard items-center flex'>
          {/* Headshot */}
          <div className="bioImage w-[13rem] flex items-center">
              <img className="rounded-3xl" src={headshot} />
          </div>
          {/* Blue Line */}
          <div className="bg-blue-300 w-1 h-32 ml-[2rem] mr-[2rem]">&nbsp;</div> 
          <div className = "title text-left w-[35rem]">
              <div className="font-bold text-5xl mb-2">Logan Bolton</div>
              <div className="italic text-sm mb-3">Software Engineering Student - Auburn, AL</div>
              

              <div className="text-lg">
                Hi! My name is Logan Bolton. I am a Junior majoring in Software Engineering at Auburn University. I am currently working as a co-op student at Auburn
                {' '}<a href="https://cws.auburn.edu/cws" target='_blank' className="text-blue-400 hover:underline">Campus Web Solutions</a>
                . I enjoy weight lifting, listening to music and being around friends. Once I graduate in Spring of 2025, I plan to attend graduate school and
                earn a Master's degree in Computer Science. 
              </div>
          </div>
        </div>

        {/* <div>
          <img className="dinoImage" src={dino} alt="chrome dinosaur"/>
        </div> */}
      </div>
  );
};

export default Bio;