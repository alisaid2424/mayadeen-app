import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const boxes = [
    {
      id: crypto.randomUUID(),
      date: "20/03/2025",
      title: "عنوان رئيسى",
      description: "العنوان الفرعى هنا او التفاصيل",
    },
    {
      id: crypto.randomUUID(),
      date: "20/03/2025",
      title: "عنوان رئيسى",
      description: "العنوان الفرعى هنا او التفاصيل",
    },
    {
      id: crypto.randomUUID(),
      date: "20/03/2025",
      title: "عنوان رئيسى",
      description: "العنوان الفرعى هنا او التفاصيل",
    },
    {
      id: crypto.randomUUID(),
      date: "20/03/2025",
      title: "عنوان رئيسى",
      description: "العنوان الفرعى هنا او التفاصيل",
    },
  ];

  return (
    <main className=" bg-[url('/home-page/main-img.svg')] bg-cover ">
      <div className="container flex items-end justify-center flex-col text-white  min-h-[calc(100vh-133px)] gap-4 py-10 lg:py-0">
        <h1 className="text-4xl sm:text-7xl">عنوان الرئيسى</h1>
        <p className="text-xl sm:text-[40px]">العنوان الفرعى هنا او التفاصيل</p>
        <Link
          href="#"
          className="flex items-center gap-2 bg-[#FFBF00] py-1 px-3 rounded-full text-black text-sm mb-10"
        >
          <Image
            src="/icons/left-arrow.svg"
            alt="left-arrow"
            width={15}
            height={15}
          />
          اذهب الى
        </Link>

        <div className="w-full text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
          {boxes.map((item) => {
            return (
              <div
                className="bg-primary bg-opacity-55 text-right  py-3 px-4 "
                key={item.id}
              >
                <span className="text-sm sm:text-lg">{item.date}</span>
                <h2 className="text-2xl sm:text-[38px]">{item.title}</h2>
                <p className="text-sm  sm:text-xl mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Hero;
