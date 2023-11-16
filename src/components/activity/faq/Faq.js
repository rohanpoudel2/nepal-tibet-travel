"use client"
import Title from '@/components/ui/title/Title';
import React, { useState } from 'react';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="bg-white">
      <div>
        <Title
          title="Frequently asked questions"
        />
        <div className="mt-10 space-y-8">
          {data.map((item, index) => (
            <div className="py-8 px-5 bg-gray-100 rounded-lg" key={index}>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleExpand(index)}
              >
                <h1 className="font-semibold text-gray-700">{item.faq.question}</h1>
                <span className="text-white bg-sky-500 rounded-full">
                  {expanded[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                    </svg>

                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>

                  )}
                </span>
              </button>
              {expanded[index] && (
                <p className="mt-6 text-sm text-gray-500">{item.faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
