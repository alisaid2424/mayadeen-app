"use client";

import { useState } from "react";
import Image from "next/image";

// Types

export type DateItem = {
  day: number;
  name: string;
};

export type Race = {
  day: number;
  type: string | string[];
};

export type SelectedRace = {
  name: string;
  classification: string;
  date: string;
  startTime: string;
  endTime: string;
  distance: string;
  type: string;
  ageRequirement: string;
  prize: string;
};

export type RaceCalendarProps = {
  dates: DateItem[];
  races: Race[];
};

const selectedRace: SelectedRace = {
  name: "اسم السباق",
  classification: "التصنيف",
  date: "06 يونيو 2024",
  startTime: "05:30 PM",
  endTime: "07:30 PM",
  distance: "4 كم",
  type: "رملي",
  ageRequirement: "3 سنوات",
  prize: "100,000 ر.س",
};

const RaceCalendar: React.FC<RaceCalendarProps> = ({ dates, races }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const visibleDates = dates.slice(startIndex, startIndex + 7);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % dates.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + dates.length) % dates.length);
  };

  return (
    <div className="bg-white">
      <div className="container py-14">
        <h1
          dir="rtl"
          className="text-4xl sm:text-[61px] mb-8 text-primary font-bold ml-auto w-fit flex items-center gap-2"
        >
          رزنامة السباقات
          <span className="mb-5">
            <svg
              className="rotate-180 size-5 mt-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </h1>

        {/* Calendar Navigation */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-9" dir="rtl">
            <div className="col-span-2 flex flex-col justify-between gap-6 pb-4 border-l border-gray-100">
              <div className="text-right mt-3">
                <div className="text-lg sm:text-[22px] font-bold text-black">
                  2024
                  <span className="block text-2xl sm:text-[36px] border-b border-gray-300 pb-4 md:pb-8">
                    أكتوبر
                  </span>
                </div>
                <div className="flex gap-2 mt-10">
                  <button onClick={handlePrev}>
                    <Image
                      src="/icons/right-arrow-circle.svg"
                      alt="prev"
                      width={24}
                      height={24}
                      className="w-8 h-8"
                    />
                  </button>
                  <button onClick={handleNext}>
                    <Image
                      src="/icons/right-arrow-circle.svg"
                      alt="next"
                      width={24}
                      height={24}
                      className="w-8 h-8 rotate-180"
                    />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-800 text-center">
                الأحداث
              </h3>
            </div>

            {visibleDates.map((date, index) => {
              const raceDay = races.find((r) => r.day === date.day);
              return (
                <div
                  key={`${date.day}-${index}`}
                  className={`border-l border-gray-100 py-3 text-center ${
                    date.day === 28 ? "bg-yellow-50" : "bg-white"
                  }`}
                >
                  <div
                    className={`text-2xl sm:text-5xl font-bold ${
                      date.day === 28 ? "text-[#FFBF00]" : "text-primary"
                    }`}
                  >
                    {date.day}
                  </div>
                  <div className="text-[21px] text-primary border-b border-gray-300 pb-3 hidden sm:block">
                    {date.name}
                  </div>

                  {raceDay && (
                    <div className="mt-4 flex flex-col items-center gap-1.5">
                      {Array.isArray(raceDay.type) ? (
                        raceDay.type.map((type, idx) => {
                          const isFeatured = type === "featured";
                          return (
                            <div
                              key={idx}
                              onClick={() => setShowDetails((prev) => !prev)}
                              className={`w-6 h-6 rounded-full bg-white border-[6px] cursor-pointer ${
                                isFeatured
                                  ? "border-[#FFBF00] relative"
                                  : "border-[#008062]"
                              }`}
                            >
                              {isFeatured && showDetails && (
                                <div className="absolute z-10 p-4 bg-white border border-gray-100 rounded-lg shadow-sm text-right w-[320px] top-5 left-1/4 -translate-x-1/4">
                                  <Image
                                    src="/icons/X.svg"
                                    alt="close"
                                    width={18}
                                    height={18}
                                    className="absolute left-5 top-5 cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowDetails(false);
                                    }}
                                  />
                                  <div className="mb-2">
                                    <h4 className="text-[27px] font-bold text-primary">
                                      {selectedRace.name}
                                    </h4>
                                    <span className="text-primary text-lg">
                                      {selectedRace.classification}
                                    </span>
                                  </div>
                                  <div className="text-sm text-gray-700 space-y-1 mb-3">
                                    <div className="flex justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        📅 <span>{selectedRace.date}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        ⏰{" "}
                                        <span>
                                          {selectedRace.startTime} -{" "}
                                          {selectedRace.endTime}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                      <div className="space-y-1 text-primary text-sm">
                                        <div>
                                          المسافة: {selectedRace.distance}
                                        </div>
                                        <div>النوع: {selectedRace.type}</div>
                                        <div>
                                          العمر: {selectedRace.ageRequirement}
                                        </div>
                                        <div>الجائزة: {selectedRace.prize}</div>
                                      </div>
                                      <button className="flex items-center gap-1 bg-[#FFBF00] text-sm font-bold py-1 px-2 rounded-full text-black">
                                        تفاصيل
                                        <Image
                                          src="/arrowLeftMedium.svg"
                                          alt="next"
                                          width={10}
                                          height={10}
                                          className="text-sm"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white border-[6px] border-[#008062]" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceCalendar;
