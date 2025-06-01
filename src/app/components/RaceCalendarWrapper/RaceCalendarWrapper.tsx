import RaceCalendar from "./RaceCalendar";

const RaceCalendarWrapper = async () => {
  const today = new Date();

  return (
    <div className="container pt-14">
      <h1
        dir="rtl"
        className="text-4xl sm:text-[61px] mb-8 text-primary font-bold ml-auto w-fit flex items-center gap-2"
      >
        رزنامة السباقات
        <span className="mb-6">
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

      <RaceCalendar startDate={today.toISOString()} />
    </div>
  );
};

export default RaceCalendarWrapper;
