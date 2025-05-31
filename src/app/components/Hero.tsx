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
      <div className="container flex items-end justify-center flex-col text-white  min-h-[calc(100vh-133px)] gap-4 py-14 xl:py-0">
        <h1 className="text-4xl sm:text-7xl mb-3">عنوان الرئيسى</h1>
        <p className="text-xl sm:text-[40px] mb-[25px] lg:mb-[31px]">
          العنوان الفرعى هنا او التفاصيل
        </p>
        <Link
          href="#"
          className="flex items-center justify-center font-medium min-w-[155px] gap-[10px] bg-[#FFBF00] py-2 px-4 rounded-full text-black text-base mb-10"
        >
          <Image
            src="/icons/left-arrow.svg"
            alt="left-arrow"
            width={15}
            height={15}
          />
          اذهب الى
        </Link>

        <div className="w-full text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-14">
          {boxes.map((item) => {
            return (
              <div
                className="bg-primary bg-opacity-55 text-right p-4 "
                key={item.id}
              >
                <span className="block text-sm sm:text-lg mb-5 font-medium">
                  {item.date}
                </span>
                <h2 className="text-2xl sm:text-[38px] mb-4">{item.title}</h2>
                <p className="text-sm  sm:text-xl ">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Hero;
