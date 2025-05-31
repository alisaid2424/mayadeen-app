import RaceCalendar from "./RaceCalendar";

const RaceCalendarWrapper = async () => {
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

  return <RaceCalendar dates={dates} races={races} />;
};

export default RaceCalendarWrapper;
