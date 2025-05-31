import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000E6] text-white ">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between flex-wrap gap-10">
        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-end space-y-3 basis-1/3 ">
          <h3 className="text-lg font-semibold">النشرة البريدية</h3>
          <p className="text-sm text-gray-400">النص أو الوصف يكتب هنا</p>
          <form className="flex gap-2 w-full max-w-sm">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              اشترك
            </button>
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
            />
          </form>
        </div>

        {/* Logo and Social Icons */}
        <div className="flex flex-col w-full justify-between items-center md:items-end space-y-10 flex-1">
          <div className="flex flex-col gap-10 items-center md:flex-row md:items-center">
            <div className="flex gap-5">
              {/* TikTok SVG */}
              <Link href="#" aria-label="TikTok">
                <svg
                  className="w-5 h-5 fill-white hover:fill-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path d="M224 72.6c-25.6 0-46.6-20.6-46.6-46.1h-33.4v144.9c0 17.3-14.5 31.5-32.2 31.5s-32.2-14.2-32.2-31.5c0-17.3 14.5-31.5 32.2-31.5 3.4 0 6.7.5 9.7 1.6V97.1c-3.2-.4-6.5-.7-9.7-.7-36.2 0-65.6 28.8-65.6 64.2 0 35.4 29.4 64.2 65.6 64.2s65.6-28.8 65.6-64.2v-81c12.4 9.3 27.9 14.7 44.4 14.7V72.6z" />
                </svg>
              </Link>
              {/* X / Twitter SVG */}
              <Link href="#" aria-label="Twitter/X">
                <svg
                  className="w-5 h-5 fill-white hover:fill-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 001.89-2.37 8.68 8.68 0 01-2.74 1.05A4.28 4.28 0 0016.15 4a4.28 4.28 0 00-4.26 4.26c0 .34.04.67.1.99A12.13 12.13 0 013 5.15a4.28 4.28 0 001.33 5.7 4.26 4.26 0 01-1.93-.53v.05a4.27 4.27 0 003.43 4.19 4.29 4.29 0 01-1.92.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.1 12.1 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.18l-.01-.56A8.6 8.6 0 0024 4.59a8.43 8.43 0 01-2.54.7z" />
                </svg>
              </Link>
              {/* Snapchat SVG */}
              <Link href="#" aria-label="Snapchat">
                <svg
                  className="w-5 h-5 fill-white hover:fill-gray-300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M255.7 0c-77.3 0-147.4 55.8-154.7 132.4-3.6 37.5-2.8 68.3-15.5 75.1-29.2 15.1-42.2 15.1-43.8 22.2-1.8 8.1 6.3 17.3 17.5 26.6 14.6 12.4 32.5 16.6 32.6 22.3.1 5.2-10.8 12.5-23.6 19.1-16.4 8.5-29.1 15.2-28.9 23.6.2 6.3 9 12.4 24.2 18.2 14.7 5.5 25.5 6.4 26.7 10.2 1.5 4.9-6.3 12.2-11.6 18.5-6.4 7.6-10.6 12.6-9.2 16.9 1.5 4.5 9.2 7.3 20.6 9.4 9.4 1.7 17.9 1.6 22.9 1.5 7.4-.2 17.6-.6 30.8 7.5 24.4 15 46.4 35.1 92.2 35.1 46.1 0 68.4-20.3 92.7-35.5 13.3-8.2 23.4-7.7 30.8-7.5 5 .1 13.5.2 22.9-1.5 11.4-2.1 19.1-4.9 20.6-9.4 1.4-4.3-2.8-9.3-9.2-16.9-5.3-6.3-13.1-13.6-11.6-18.5 1.2-3.8 12-4.7 26.7-10.2 15.2-5.8 24-11.9 24.2-18.2.2-8.4-12.5-15.1-28.9-23.6-12.8-6.6-23.7-13.9-23.6-19.1.1-5.7 18-9.9 32.6-22.3 11.2-9.4 19.3-18.5 17.5-26.6-1.6-7.1-14.6-7.1-43.8-22.2-12.7-6.8-11.9-37.6-15.5-75.1C403 55.8 333 0 255.7 0z" />
                </svg>
              </Link>
              {/* Instagram SVG */}
              <Link href="#" aria-label="Instagram">
                <svg
                  className="w-5 h-5 fill-white hover:fill-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.95.24 2.41.405a4.9 4.9 0 011.785 1.09 4.9 4.9 0 011.09 1.785c.165.46.35 1.24.405 2.41.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.95-.405 2.41a4.9 4.9 0 01-1.09 1.785 4.9 4.9 0 01-1.785 1.09c-.46.165-1.24.35-2.41.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.95-.24-2.41-.405a4.9 4.9 0 01-1.785-1.09 4.9 4.9 0 01-1.09-1.785c-.165-.46-.35-1.24-.405-2.41C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.95.405-2.41a4.9 4.9 0 011.09-1.785 4.9 4.9 0 011.785-1.09c.46-.165 1.24-.35 2.41-.405C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.51.012-4.75.07-.98.046-1.51.21-1.86.35a3.1 3.1 0 00-1.125.735 3.1 3.1 0 00-.735 1.125c-.14.35-.304.88-.35 1.86-.058 1.24-.07 1.61-.07 4.75s.012 3.51.07 4.75c.046.98.21 1.51.35 1.86.173.46.418.865.735 1.125.26.317.665.562 1.125.735.35.14.88.304 1.86.35 1.24.058 1.61.07 4.75.07s3.51-.012 4.75-.07c.98-.046 1.51-.21 1.86-.35a3.1 3.1 0 001.125-.735 3.1 3.1 0 00.735-1.125c.14-.35.304-.88.35-1.86.058-1.24.07-1.61.07-4.75s-.012-3.51-.07-4.75c-.046-.98-.21-1.51-.35-1.86a3.1 3.1 0 00-.735-1.125 3.1 3.1 0 00-1.125-.735c-.35-.14-.88-.304-1.86-.35-1.24-.058-1.61-.07-4.75-.07zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.85a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" />
                </svg>
              </Link>
            </div>

            <Image src="/logo.svg" alt="logo-img" width={193} height={58} />
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between items-center sm:w-2/3 space-x-3">
            <Link href="#" className="hover:text-gray-300 text-base lg:text-xl">
              عن ميادين
            </Link>
            <Link href="#" className="hover:text-gray-300 text-base lg:text-xl">
              الخدمات
            </Link>
            <Link href="#" className="hover:text-gray-300 text-base lg:text-xl">
              المسابقات
            </Link>
            <Link href="#" className="hover:text-gray-300 text-base lg:text-xl">
              البث المباشر
            </Link>
            <Link href="#" className="hover:text-gray-300 text-base lg:text-xl">
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 text-center text-base text-gray-400">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Link href="#" className="hover:text-white">
              سياسة الخصوصية
            </Link>
            |
            <Link href="#" className="hover:text-white">
              أحكام وشروط
            </Link>
            |
            <Link href="#" className="hover:text-white">
              ميثاق العملاء
            </Link>
            |
            <Link href="#" className="hover:text-white">
              أدوات الموقع
            </Link>
          </div>

          <span>جميع الحقوق محفوظة</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
