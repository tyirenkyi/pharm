import {Image} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-transparent h-[60px] flex flex-col justify-center"
    >
      <ul className="flex flex-row items-center justify-center w-full space-x-10 bg-transparent">
        <li className="text-sm font-medium text-[#C4C8CC] hover:text-gray-900">
          <a
            href="https://github.com/Shopify/hydrogen/discussions"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <Image src={'/facebook.svg'} width={10} height={5} />
          </a>
        </li>
        <li className="text-sm font-medium text-[#C4C8CC] hover:text-gray-900">
          <a
            href="https://discord.gg/ppSbThrFaS"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <Image src={'/twitter.svg'} width={18} height={20} />
          </a>
        </li>
        <li className="text-sm font-medium text-[#C4C8CC] hover:text-gray-900">
          <a
            href="https://discord.gg/ppSbThrFaS"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <Image src={'/instagram.svg'} width={18} height={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
