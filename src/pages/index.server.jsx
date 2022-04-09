import {Suspense} from 'react';
import {
  useShopQuery,
  flattenConnection,
  ProductProviderFragment,
  Image,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import ProductCard from '../components/ProductCard';
import Welcome from '../components/Welcome.server';
import Categories from '../components/Categories.client';
import SymptomsBanner from '../components/SymptomsBanner';
import CovidBanner from '../components/CovidBanner';
import Carousel from '../components/Carousel.client';

export default function Index({country = {isoCode: 'US'}}) {
  return (
    <Layout>
      <div className="relative mt-[120px]">
        <div className="hidden lg:block">
          <Welcome />
        </div>
        <div className="block lg:hidden">
          <Carousel />
        </div>
        <Suspense fallback={<BoxFallback />}>
          <div className="my-[20px] flex flex-row lg:space-x-4 w-full">
            <Categories />
            <div className="flex flex-col w-full space-y-[90px]">
              <SalesProductsBox country={country} />
              <NewlyStockedProductsBox country={country} />
              <SymptomsBanner country={country} />
              <ImmuneBoostersProductsBox country={country} />
              <EnergyBoostersProductsBox country={country} />
              <CovidBanner country={country} />
              <HerbalMedicineProductsBox country={country} />
            </div>
          </div>
        </Suspense>
      </div>
    </Layout>
  );
}

function BoxFallback() {
  return <div className="h-40 p-12 mb-10 bg-white shadow-xl rounded-xl"></div>;
}

function SalesProductsBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="flex flex-col w-full px-[20px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-[#393838] text-[16px] font-medium">Sales</p>
        <button className="flex flex-row items-center space-x-1">
          <p className="text-[#747474] text-[16px]">See more</p>
          <Image src="/arrow-right.svg" width={12} height={16} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        {featuredProducts.map((item) => (
          <ProductCard product={item} key={item.handle} />
        ))}
      </div>
    </div>
  );
}

function NewlyStockedProductsBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="flex flex-col w-full px-[20px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-[#393838] text-[16px] font-medium">Newly Stocked</p>
        <button className="flex flex-row items-center space-x-1">
          <p className="text-[#747474] text-[16px]">See more</p>
          <Image src="/arrow-right.svg" width={12} height={16} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        {featuredProducts.map((item) => (
          <ProductCard product={item} key={item.handle} />
        ))}
      </div>
    </div>
  );
}

function ImmuneBoostersProductsBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="flex flex-col w-full px-[20px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-[#393838] text-[16px] font-medium">
          Immune Boosters
        </p>
        <button className="flex flex-row items-center space-x-1">
          <p className="text-[#747474] text-[16px]">See more</p>
          <Image src="/arrow-right.svg" width={12} height={16} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        {featuredProducts.map((item) => (
          <ProductCard product={item} key={item.handle} />
        ))}
      </div>
    </div>
  );
}

function EnergyBoostersProductsBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="flex flex-col w-full px-[20px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-[#393838] text-[16px] font-medium">
          Energy Boosters
        </p>
        <button className="flex flex-row items-center space-x-1">
          <p className="text-[#747474] text-[16px]">See more</p>
          <Image src="/arrow-right.svg" width={12} height={16} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        {featuredProducts.map((item) => (
          <ProductCard product={item} key={item.handle} />
        ))}
      </div>
    </div>
  );
}

function HerbalMedicineProductsBox({country}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="flex flex-col w-full px-[20px]">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-[#393838] text-[16px] font-medium">
          Herbal Medicine
        </p>
        <button className="flex flex-row items-center space-x-1">
          <p className="text-[#747474] text-[16px]">See more</p>
          <Image src="/arrow-right.svg" width={12} height={16} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        {featuredProducts.map((item) => (
          <ProductCard product={item} key={item.handle} />
        ))}
      </div>
    </div>
  );
}

const QUERY = gql`
  query indexContent(
    $country: CountryCode
    $numCollections: Int = 2
    $numProducts: Int = 3
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collections(first: $numCollections) {
      edges {
        node {
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    }
  }

  ${ProductProviderFragment}
  ${Image.Fragment}
`;
