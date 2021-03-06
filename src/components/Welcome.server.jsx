import {useShopQuery, flattenConnection} from '@shopify/hydrogen';
import gql from 'graphql-tag';

function ExternalIcon() {
  return (
    <svg
      className="ml-3"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M8.11963 0.000976562C7.56734 0.000976562 7.11963 0.448692 7.11963 1.00098C7.11963 1.55326 7.56734 2.00098 8.11963 2.00098H10.7054L4.41252 8.29387C4.022 8.68439 4.022 9.31756 4.41252 9.70808C4.80305 10.0986 5.43621 10.0986 5.82674 9.70808L12.1196 3.41519V6.00098C12.1196 6.55326 12.5673 7.00098 13.1196 7.00098C13.6719 7.00098 14.1196 6.55326 14.1196 6.00098V1.00098C14.1196 0.448692 13.6719 0.000976562 13.1196 0.000976562H8.11963Z" />
      <path d="M2.11963 2.00098C1.01506 2.00098 0.119629 2.89641 0.119629 4.00098V12.001C0.119629 13.1055 1.01506 14.001 2.11963 14.001H10.1196C11.2242 14.001 12.1196 13.1055 12.1196 12.001V9.00098C12.1196 8.44869 11.6719 8.00098 11.1196 8.00098C10.5673 8.00098 10.1196 8.44869 10.1196 9.00098V12.001H2.11963V4.00098L5.11963 4.00098C5.67191 4.00098 6.11963 3.55326 6.11963 3.00098C6.11963 2.44869 5.67191 2.00098 5.11963 2.00098H2.11963Z" />
    </svg>
  );
}

function StorefrontInfo() {
  const {data} = useShopQuery({query: QUERY});
  const shopName = data ? data.shop.name : '';
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);
  const totalProducts = products && products.length;
  const totalCollections = collections && collections.length;

  const pluralize = (count, noun, suffix = 's') =>
    `${count} ${noun}${count === 1 ? '' : suffix}`;
  return (
    <div className="p-12 text-gray-900 bg-white shadow-xl rounded-xl">
      <p className="mb-4 font-medium uppercase text-md">Connected Storefront</p>
      <h2 className="mb-4 text-2xl font-bold">{shopName}</h2>
      <p className="text-md">
        {pluralize(totalProducts, 'Product')}
        {', '}
        {pluralize(totalCollections, 'Collection')}
      </p>
      {totalProducts === 0 && totalCollections === 0 && (
        <div className="px-3 py-2 bg-red-100 text-md">
          Use the{' '}
          <a
            href="https://shopify.dev/apps/tools/cli/getting-started"
            className="font-mono font-bold underline text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Shopify CLI
          </a>{' '}
          to populate sample products and collections.
        </div>
      )}
      <hr className="my-4" />
      <a
        href="https://shopify.dev/custom-storefronts/hydrogen/getting-started#update-information-about-your-shopify-storefront"
        className="inline-flex items-center font-medium text-blue-700 text-md hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Change your storefront access token
        <ExternalIcon />
      </a>
    </div>
  );
}

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="xl:h-[467px] h-[400px] bg-[url('/drugs.png')] bg-right-top bg-cover col-span-2 bg-no-repeat px-[50px] py-[50px]">
        <h2 className="text-appBlack text-[35px] font-semibold w-[450px]">
          Multivitamins - the right choice for you
        </h2>
        <p className="text-black w-[440px] my-[13px] text-[16px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <button className="bg-white w-[215px] h-[55px] text-black">
          Shop for multivitamins
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="xl:h-[223px] h-[190px] bg-[url('/symptom.png')] bg-center bg-cover px-[21px] py-[50px]">
          <p className="text-white text-[20px] font-semibold mb-[22px]">
            Seeing some symptoms?
          </p>
          <button className="bg-black w-[186px] h-[39px] text-white">
            Shop by symptom
          </button>
        </div>
        <div className="xl:h-[223px] h-[190px] bg-[url('/genders.png')] bg-center bg-cover px-[21px] py-[50px]">
          <p className="text-white text-[20px] font-semibold mb-[22px]">
            Be sexually responsible at all times
          </p>
          <button className="bg-black w-[186px] h-[39px] text-white">
            Shop for sexual health
          </button>
        </div>
      </div>
    </div>
  );
}

const QUERY = gql`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
