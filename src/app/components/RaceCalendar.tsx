import Image from "next/image";

const RaceCalendar = () => {
  const dates = [
    { day: 23, name: "الأحد" },
    { day: 24, name: "الاثنين" },
    { day: 25, name: "الثلاثاء" },
    { day: 26, name: "الأربعاء" },
    { day: 27, name: "الخميس" },
    { day: 28, name: "الجمعة" },
    { day: 29, name: "السبت" },
    { day: 30, name: "الأحد" },
    { day: 1, name: "الاثنين" },
  ];

  const races = [
    { day: 23, type: "regular" },
    { day: 26, type: "regular" },
    { day: 28, type: ["regular", "featured", "special"] },
    { day: 1, type: "regular" },
  ];

  const selectedRace = {
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

  return (
    <div className=" bg-white">
      <div className="container py-10">
        <h1 className="text-4xl sm:text-[61px] mb-8 text-primary text-right font-[Helvetica_Neue_LT_Arabic,75_Bold]">
          رزنامة السباقات
        </h1>

        {/* Calendar Strip */}
        <div className="bg-white rounded-lg shadow-sm">
          <div
            className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-0"
            dir="rtl"
          >
            <div className="col-span-1 flex flex-col justify-between gap-6 py-4 px-2 border-l border-gray-100">
              <div className="text-right">
                <div className="text-lg text-gray-800 mt-3">
                  2024 <span className="block">أكتوبر</span>
                </div>
                <div className="flex items-center gap-2 justify-start mt-5">
                  <button>
                    <Image
                      src="/icons/right-arrow-circle.svg"
                      alt="right-arrow-icon"
                      width={18}
                      height={18}
                      className="w-8 h-8"
                    />
                  </button>
                  <button>
                    <Image
                      src="/icons/right-arrow-circle.svg"
                      alt="right-arrow-icon"
                      width={18}
                      height={18}
                      className="w-8 h-8 rotate-180"
                    />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-800 text-center">
                الأحداث
              </h3>
            </div>

            {dates.map((date) => {
              const raceDay = races.find((r) => r.day === date.day);
              return (
                <div
                  key={date.day}
                  className={`border-l border-gray-100 p-3 text-center ${
                    date.day === 28 ? "bg-yellow-50" : "bg-white"
                  }`}
                >
                  <div
                    className={`text-4xl sm:text-[57px] font-bold  ${
                      date.day === 28 ? "text-[#FFBF00]" : "text-primary"
                    } `}
                  >
                    {date.day}
                  </div>
                  <div className="text-[21px] text-primary">{date.name}</div>
                  {raceDay && (
                    <div className="mt-4 flex flex-col items-center gap-1.5">
                      {Array.isArray(raceDay.type) ? (
                        raceDay.type.map((type, index) => {
                          const isFeatured = type === "featured";
                          return (
                            <div
                              key={index}
                              className={`w-10 h-10 rounded-full bg-white border-8 ${
                                isFeatured
                                  ? "border-[#FFBF00] relative"
                                  : "border-[#008062]"
                              }`}
                            >
                              {isFeatured && (
                                <div className="absolute -top-2 right-12 lg:right-auto lg:left-10  z-10  p-4 bg-white border border-gray-100 rounded-lg shadow-sm text-right w-[320px]">
                                  <Image
                                    src="/icons/X.svg"
                                    alt="close-icon"
                                    width={18}
                                    height={18}
                                    className="absolute left-5 top-5 cursor-pointer hover:text-red-500 transition-colors"
                                  />
                                  <div className="flex flex-col mb-2">
                                    <h4 className="text-[27px] font-bold text-primary">
                                      {selectedRace.name}
                                    </h4>
                                    <span className="text-primary text-lg">
                                      {selectedRace.classification}
                                    </span>
                                  </div>

                                  <div className="text-sm text-gray-700 space-y-1 mb-3">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2 text-sm">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 text-primary"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        >
                                          <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                          ></rect>
                                          <line
                                            x1="16"
                                            y1="2"
                                            x2="16"
                                            y2="6"
                                          ></line>
                                          <line
                                            x1="8"
                                            y1="2"
                                            x2="8"
                                            y2="6"
                                          ></line>
                                          <line
                                            x1="3"
                                            y1="10"
                                            x2="21"
                                            y2="10"
                                          ></line>
                                        </svg>

                                        <span>{selectedRace.date}</span>
                                      </div>
                                      <div className="flex items-center gap-2 text-sm">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 text-primary"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        >
                                          <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                          ></circle>
                                          <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>

                                        <span>
                                          {selectedRace.startTime} -
                                          {selectedRace.endTime}
                                        </span>
                                      </div>
                                    </div>

                                    <div className="flex items-end justify-between">
                                      <div>
                                        <div className="flex items-center gap-3">
                                          <span className="w-[71px] text-xl">
                                            المسافة
                                          </span>

                                          <span className="text-primary text-xl">
                                            {selectedRace.distance}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          <span className="w-[71px] text-xl">
                                            النوع
                                          </span>
                                          <span className="text-primary text-xl">
                                            {selectedRace.type}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          <span className="w-[71px] text-xl">
                                            العمر
                                          </span>

                                          <span className="text-primary text-xl">
                                            {selectedRace.ageRequirement}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          <span className="w-[71px] text-xl">
                                            الجائزة
                                          </span>
                                          <span className="text-primary text-lg">
                                            {selectedRace.prize}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="text-center">
                                        <button className="bg-[#FFBF00] text-sm font-bold py-1.5 px-4 rounded-full transition-colors flex items-center gap-1 text-black">
                                          <span>تفاصيل</span>
                                          <Image
                                            src="/arrowLeftMedium.svg"
                                            alt="arrowLeftMedium-icon"
                                            width={15}
                                            height={15}
                                            className="pt-1 text-black"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-white border-8 border-[#008062]" />
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
