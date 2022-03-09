import {useState} from 'react';
import {Image, Link} from '@shopify/hydrogen/client';
import {ImLocation, ImPhone} from 'react-icons/im';
import {BiSearchAlt} from 'react-icons/bi';

import CartToggle from './CartToggle.client';
import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <header role="banner">
      <div
        className={`fixed z-20 w-full border-b border-gray-200 px-6 md:px-0 md:py-0 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="flex flex-row items-center justify-between h-[41px] px-[132px]">
          <div className="flex flex-row items-center space-x-8">
            <p className="text-appBlack text-[14px]">Terms and Conditions</p>
            <p className="text-appBlack text-[14px]">Privacy Policy</p>
          </div>
          <div className="flex flex-row items-center space-x-8">
            <span className="flex flex-row items-center space-x-2">
              <ImLocation />
              <p className="text-appBlack text-[14px]">
                3rd Street, Makola - Accra
              </p>
            </span>
            <span className="flex flex-row items-center space-x-2">
              <ImPhone />
              <p className="text-appBlack text-[14px]">0241234567</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-appBlack h-[66px] px-[132px]">
          <Link to="/">
            <Image src={'/pharma.png'} width={103} height={30} />
          </Link>
          <form className="flex flex-row items-center bg-white rounded w-[512px] h-[40px] pl-4 pr-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none ring-0"
              placeholder="Search drug"
            />
            <button className="outline-none ring-0">
              <BiSearchAlt color="#AAAAAA" size={30} />
            </button>
          </form>
          <div className="flex flex-row items-center space-x-8">
            <CartToggle />
            <button className="bg-transparent text-white text-[16px] tracking-wider">
              Sign In
            </button>
            <button className="bg-[#15A383] text-white text-[16px] px-4 py-2 tracking-wider rounded">
              Register
            </button>
          </div>
          <MobileNavigation
            collections={collections}
            isOpen={isMobileNavOpen}
            setIsOpen={setIsMobileNavOpen}
          />
        </div>
      </div>
    </header>
  );
}
