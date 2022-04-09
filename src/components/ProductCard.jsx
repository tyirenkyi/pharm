/* eslint-disable hydrogen/prefer-image-component */
import {Link} from '@shopify/hydrogen';

import MoneyCompareAtPrice from './MoneyCompareAtPrice.client';
import MoneyPrice from './MoneyPrice.client';

/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCard({product}) {
  //const selectedVariant = product.variants.edges[0].node;
  const selectedVariant = product;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <div className="relative mb-4 text-md h-[326px]">
      <Link to={`/products/${product.handle}`}>
        <div className="relative flex flex-col items-center justify-end object-cover mb-2 overflow-hidden border border-[#EFEFEF] rounded-lg w-full h-full pb-6 bg-white">
          {selectedVariant.media ? (
            <img
              className="absolute object-contain top-[70px] w-[160px] h-[163px] transition-all duration-500 ease-in-out transform bg-white bg-center bg-cover hover:scale-110"
              src={selectedVariant.media.edges[0].node.image.url}
              alt=""
            />
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className="absolute top-0 left-0 px-4 py-3 text-xs text-white bg-black">
              Out of stock
            </div>
          )}
          <span className="text-black font-semibold mb-0.5 tracking-wider">
            {product.title}
          </span>
          <div className="flex ">
            {selectedVariant.compareAtPriceRange && (
              <MoneyCompareAtPrice
                money={selectedVariant.compareAtPriceRange.maxVariantPrice}
              />
            )}
            <MoneyPrice money={selectedVariant.priceRange.maxVariantPrice} />
          </div>
        </div>

        {product.vendor && (
          <p className="text-gray-900 font-medium text-sm mb-0.5">
            {product.vendor}
          </p>
        )}
      </Link>
    </div>
  );
}
