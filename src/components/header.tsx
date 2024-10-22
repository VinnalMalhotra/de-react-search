
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
type Link = {
  label: string;
  url: string;
};

const links: any[] = [
  {
    label: "Products",
    url: "https://www.dewalt.com/products/power-tools/automotive-tools",
  },
  {
    label: "Systems",
    url: "https://www.dewalt.com/systems/cordless-platforms",
  },
  {
    label: "Support",
    url: "/",
  },
  ,
  {
    label: "Trade Solutions",
    url: "/",
  },
];

const Header = ({ _site }: any) => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="p-6 flex justify-start items-center w-full max-w-screen-3xl bg-black">
      <img
        src="https://www.dewalt.com/sites/g/files/xnuzat961/files/dewalt2024_logo.png"
        alt=""
        className="w-28 h-auto"
      />
      <div className="flex gap-4 items-center text-lg  text-primary ml-8">
        {links.map((item: Link, index: any) => (
          <a
            href={item.url}
            key={index}
            className={`${item.label === "For Patients" ? "hover:underline" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex gap-6 items-center mr-8 ml-auto">
        <IoIosSearch className="w-6 h-6 text-[#FEBD17]" />
        <FiMapPin className="w-6 h-6 text-[#FEBD17]" />
        <CiGlobe className="w-6 h-6 text-[#FEBD17]" />
        <FaRegUserCircle className="w-6 h-6 text-[#FEBD17]" />
      </div>
    </div>
  );
};

export default Header;
