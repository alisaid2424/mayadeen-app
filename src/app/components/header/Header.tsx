import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-primary text-white relative">
      <div className="container flex items-center justify-between h-[133px] w-full">
        {/* account */}
        <div className="account flex items-center gap-2 me-5">
          <Link href="#" className="text-base">
            حسابى
          </Link>
          <Image
            src="/icons/account.svg"
            alt="account-img"
            width={20}
            height={20}
          />
        </div>

        {/* Interactive middle part*/}
        <NavBar />

        {/* Logo */}

        <Image
          src="/logo.svg"
          alt="logo-img"
          width={193}
          height={58}
          className="w-[100px] sm:w-[200px]"
        />
      </div>
    </header>
  );
};

export default Header;
