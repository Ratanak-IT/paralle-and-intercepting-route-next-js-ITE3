"use client";

import ProductComponent from "@/components/product/ProductCardComponent";
import { Product } from "@/lib/product-type/product";
import useSWR from "swr";

const fetcher = async (url: string) => {
  try{
    const res = await fetch(url, {
      cache: "force-cache",
    });
    const products = await res?.json();
    console.log(`=> Product Data: ${products}`)
    return products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};



export default function ProductsPageRoute() {
  const {
    data,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL}/products`,
    fetcher,
  {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: true,
    refreshInterval: 1000,
  }

  )

  const products = data?.content;

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {products?.map((product: Product) => (
          <ProductComponent
            key={product.uuid}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}