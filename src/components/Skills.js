import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { programmingLanguages, others } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <h5 className="text-center flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced in MVC Frameworks, Software Development Life Cycle, 
            Object-Oriented Programming, Large Scale Distributed Systems, Data Structures & Algorithms, 
            Testing Frameworks, REST API, Relational & No SQL databases, and Agile/Scrum Methodologies.
            </h5>
        </div>
        <h1 className="font-medium text-center">Programming Languages</h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {programmingLanguages.map((programmingLanguage) => (
            <div key={programmingLanguage} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {programmingLanguage}
                </span>
              </div>
            </div>
          ))}
        </div>
        <br/>
        <h1 className="font-medium text-center">Tools & Services</h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {others.map((other) => (
            <div key={other} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {other}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
