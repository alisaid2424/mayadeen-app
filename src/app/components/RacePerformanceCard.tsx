import Image from "next/image";

// Type definition for each race entry
type RaceData = {
  score: number;
  scoreColor: string; // "red" | "blue" | "gray"
  infoLines: string[];
  values: string[];
  details: {
    age: string;
    type: string;
    title: string;
    distance: string;
    condition: string;
  };
  jockey: string;
  meta: {
    track: string;
    date: string;
    odds: string;
  };
  daysAgo: string;
};

// Sample data array
const races: RaceData[] = [
  {
    score: 81,
    scoreColor: "red",
    infoLines: [
      "نص مكتوب للتوضيح 1",
      "نص مكتوب للتوضيح 2",
      "نص مكتوب للتوضيح 3",
    ],
    values: [
      "11",
      "6",
      "3",
      "4",
      "بداية",
      "P3",
      "47.23",
      "23.29",
      "47.23",
      "23.29",
      "-",
      "P6",
    ],
    details: {
      age: "3+",
      type: "Turf",
      title: "Firecracker",
      distance: "1M",
      condition: "Yielding",
    },
    jockey: "M Gutierrez",
    meta: {
      track: "BHP",
      date: "أبريل 25",
      odds: "12-1",
    },
    daysAgo: "49 يوم",
  },
  {
    score: 61,
    scoreColor: "gray",
    infoLines: [
      "نص مكتوب للتوضيح 1",
      "نص مكتوب للتوضيح 2",
      "نص مكتوب للتوضيح 3",
    ],
    values: [
      "11",
      "6",
      "3",
      "4",
      "بداية",
      "P3",
      "47.23",
      "23.29",
      "47.23",
      "23.29",
      "-",
      "P6",
    ],
    details: {
      age: "3YO",
      type: "Dirt",
      title: "Allowance",
      distance: "1M",
      condition: "Wet Fast",
    },
    jockey: "M Gutierrez",
    meta: {
      track: "BHP",
      date: "أبريل 25",
      odds: "12-1",
    },
    daysAgo: "2011 - يوم 249",
  },
  {
    score: 54,
    scoreColor: "blue",
    infoLines: [
      "نص مكتوب للتوضيح 1",
      "نص مكتوب للتوضيح 2",
      "نص مكتوب للتوضيح 3",
    ],
    values: [
      "11",
      "6",
      "3",
      "4",
      "بداية",
      "P3",
      "47.23",
      "23.29",
      "47.23",
      "23.29",
      "-",
      "P6",
    ],
    details: {
      age: "2YO",
      type: "Synth",
      title: "Allowance",
      distance: "6F",
      condition: "Fast",
    },
    jockey: "M Gutierrez",
    meta: {
      track: "BHP",
      date: "ابريل 25 ",
      odds: "12-1",
    },
    daysAgo: "49 يوم",
  },
];

// Helper to return class based on color name
const getColorClass = (color: string) => {
  switch (color) {
    case "red":
      return " text-white";
    case "blue":
      return " text-white";
    default:
      return " text-black";
  }
};

// Main Component
const RacePerformanceCard = () => {
  return (
    <div className="space-y-4 py-20 container">
      {races.map((race, index) => (
        <div key={index}>
          {/* Days ago info */}
          <div className="text-primary font-bold whitespace-nowrap text-[34px] text-right mb-3">
            {race.daysAgo}
          </div>
          <div className="flex justify-between items-center border rounded-md md:rounded-full flex-wrap gap-2 md:gap-5 px-10 py-4 shadow-sm bg-[#F2F2F2]">
            {/* Info text (3 lines) */}
            <div className="flex flex-col text-sm text-gray-600 space-y-1">
              {race.infoLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>

            {/* Info text (3 lines) */}
            <div className="flex flex-col text-sm text-gray-600 space-y-1">
              {race.infoLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>

            {/* Colored score circle */}
            <div
              className={`w-[60px] h-[60px] flex items-center justify-center rounded-full text-2xl font-bold mr-2 ml-2 shrink-0 border border-gray-200 ${
                race.score === 81
                  ? "bg-[#EA3323]"
                  : race.score === 54
                  ? "bg-[#0122F5]"
                  : "bg-white"
              }${getColorClass(race.scoreColor)}`}
            >
              {race.score}
            </div>

            {/* Two-line metrics section with Arabic RTL support */}
            <div className="flex flex-col gap-1 text-sm text-gray-800 max-w-60 text-center">
              {/* First Row */}
              <div className="flex justify-between gap-2 flex-wrap ">
                {race.values.slice(0, 6).map((val, i, arr) => (
                  <div
                    key={`top-${i}`}
                    className={`whitespace-nowrap min-w-[32px] ${
                      i === arr.length - 1
                        ? "bg-white rounded-full text-black p-2"
                        : ""
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
              {/* Second Row */}
              <div className="flex justify-between gap-2 flex-wrap">
                {race.values.slice(7, 12).map((val, i, arr) => (
                  <div
                    key={`bottom-left-${i}`}
                    className={`whitespace-nowrap min-w-[32px] ${
                      i === arr.length - 1
                        ? "bg-white rounded-full text-black p-2"
                        : ""
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
            </div>

            {/* Jockey & odds */}
            <div className="text-sm whitespace-nowrap text-black text-left">
              {race.jockey}
              <br />
              117 | L | {race.meta.odds}
            </div>

            {/* Race details (type, title, etc.) */}
            <div className="flex flex-col items-end text-xs">
              <div
                className={`flex justify-center text-center gap-1 flex-wrap px-3 py-2 rounded-full ${
                  race.score === 81
                    ? "bg-[#EA3323]"
                    : race.score === 54
                    ? "bg-[#0122F5]"
                    : "bg-white"
                }${getColorClass(race.scoreColor)} `}
              >
                <div>
                  <span className="block">{race.details.age}</span>
                  <span>{race.details.type}</span>
                </div>
                <div>
                  <span className="block">{race.details.title}</span>
                  <span>{race.details.distance}</span>
                </div>

                <div>
                  <span className="block">{race.details.distance}</span>
                  <span>{race.details.condition}</span>
                </div>
              </div>
            </div>

            <div className="text-xl text-black text-center whitespace-nowrap">
              <span className="block">{race.meta.track}</span>
              <span>{race.meta.date}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Workout Footer */}
      <div className="bg-primary text-white rounded-md md:rounded-full py-4 px-6 mt-4 text-sm flex items-center justify-between gap-3 flex-wrap">
        <span>WORKOUTS</span>
        <span>Aug3 SAR Dirt Gd: 4F in 49 2/5 (28 of 49) B</span>
        <span>Jul27 SAR Turf tr.Trm: 5F in 57 1/5 (1 of 2) B</span>
        <span>Jul20 SAR Dirt Gd: 4F in 51 1/5 (23 of 34) B</span>
        <span className="text-lg cursor-pointer">
          <Image
            src="/icons/right-arrow-circle.svg"
            alt="right-arrow-circle"
            width={18}
            height={18}
            className="w-8 h-8 border-white border-2 rounded-full"
          />
        </span>
      </div>
    </div>
  );
};

export default RacePerformanceCard;
