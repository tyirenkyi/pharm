import {useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {ImLocation, ImPhone} from 'react-icons/im';

import CartToggle from './CartToggle.client';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 lg:h-32" role="banner">
      <div
        className={`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <p className="text-appBlack text-[16px]">Terms and Conditions</p>
            <p className="text-appBlack text-[16px]">Privacy Policy</p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <span className="flex flex-row items-center space-x-2">
              <ImLocation />
              <p>3rd Street, Makola - Accra</p>
            </span>
            <span className="flex flex-row items-center space-x-2">
              <ImPhone />
              <p>0241234567</p>
            </span>
          </div>
        </div>
        <div className="flex h-full lg:flex-col place-content-between">
          <div className="flex items-center justify-between w-full text-center">
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link
              className="text-3xl font-black tracking-widest uppercase"
              to="/"
            >
              {storeName}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
